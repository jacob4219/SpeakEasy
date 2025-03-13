import React, { useState, useEffect, useRef } from 'react';
import { useDrop } from 'react-dnd';
import Bubble from './Bubble';
import { useSpeechSynthesis } from 'react-speech-kit';
import { useAudioSettings } from './AudioSettingsContext';

const Field = ({ title, entries, setEntries, field }) => {
  const { voices } = useSpeechSynthesis();
  const { selectedVoice, audioSettings } = useAudioSettings();
  const [isCollapsed, setIsCollapsed] = useState(field === 'recycle' || entries.length === 0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [useMainVoice, setUseMainVoice] = useState(true);
  const [newEntryText, setNewEntryText] = useState('');
  const [isAddingEntry, setIsAddingEntry] = useState(false);
  const synth = useRef(window.speechSynthesis);

  useEffect(() => {
    if (field !== 'recycle' && entries.length === 1) {
      setIsCollapsed(false);
    }
  }, [entries.length, field]);

  useEffect(() => {
    if (field !== 'recycle' && entries.length === 0) {
      setIsCollapsed(true);
    }
  }, [entries.length, field]);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleRecycle = () => {
    if (entries.length === 0) {
      return; // No entries, no action needed
    }

    if (entries.length === 1) {
      // Only one entry, recycle without prompt
      const recycledEntry = entries[0];
      setEntries((prevEntries) => ({
        ...prevEntries,
        recycle: [recycledEntry, ...prevEntries.recycle],
        [field]: [],
      }));
      return;
    }

    const confirmRecycle = window.confirm(`Are you sure you want to move all entries to the recycle field?`);
    if (confirmRecycle) {
      setEntries((prevEntries) => ({
        ...prevEntries,
        recycle: [...prevEntries.recycle, ...entries],
        [field]: [],
      }));
    }
  };

  const handleDeleteAll = () => {
    if (entries.length === 0) {
      return; // No entries, no action needed
    }

    if (entries.length === 1) {
      // Only one entry, delete without prompt
      setEntries((prevEntries) => ({
        ...prevEntries,
        [field]: [],
      }));
      return;
    }

    const confirmDelete = window.confirm(`Are you sure you want to delete all entries?`);
    if (confirmDelete) {
      setEntries((prevEntries) => ({
        ...prevEntries,
        [field]: [],
      }));
    }
  };

  const moveEntryUp = (index) => {
    if (index > 0) {
      const newEntries = [...entries];
      [newEntries[index], newEntries[index - 1]] = [newEntries[index - 1], newEntries[index]];
      setEntries((prevEntries) => ({
        ...prevEntries,
        [field]: newEntries,
      }));
    }
  };

  const moveEntryDown = (index) => {
    if (index < entries.length - 1) {
      const newEntries = [...entries];
      [newEntries[index], newEntries[index + 1]] = [newEntries[index + 1], newEntries[index]];
      setEntries((prevEntries) => ({
        ...prevEntries,
        [field]: newEntries,
      }));
    }
  };

  const handlePlay = () => {
    if (isPlaying) {
      synth.current.cancel();
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    playEntries(entries);
  };

  const playEntries = (entries) => {
    if (entries.length === 0) {
      setIsPlaying(false);
      return;
    }

    const entry = entries[0];
    const utterance = new SpeechSynthesisUtterance(entry.text);
    if (useMainVoice) {
      utterance.voice = synth.current.getVoices().find(v => v.name === selectedVoice);
      utterance.rate = audioSettings.rate;
      utterance.pitch = audioSettings.pitch;
    } else {
      utterance.voice = synth.current.getVoices().find(v => v.name === entry.voice);
      utterance.rate = entry.rate;
      utterance.pitch = entry.pitch;
    }

    utterance.onend = () => {
      playEntries(entries.slice(1));
    };
    utterance.onerror = () => {
      setIsPlaying(false);
    };

    synth.current.speak(utterance);
  };

  const getDefaultView = () => {
    switch (field) {
      case 'recent':
        return 3;
      case 'favorite':
        return 5;
      case 'userGenerated':
        return 5;
      case 'hopper':
        return 15;
      default:
        return entries.length;
    }
  };

  const getMaxView = () => {
    switch (field) {
      case 'recent':
        return 10;
      case 'favorite':
        return 20;
      default:
        return entries.length;
    }
  };

  const moveEntry = (fromIndex, toIndex) => {
    const updatedEntries = [...entries];
    const [movedEntry] = updatedEntries.splice(fromIndex, 1);
    updatedEntries.splice(toIndex, 0, movedEntry);
    setEntries((prevEntries) => ({
      ...prevEntries,
      [field]: updatedEntries,
    }));
  };

  const handleAddEntry = () => {
    if (newEntryText.trim() === '') return;
    const newEntry = {
      id: Date.now().toString(),
      text: newEntryText,
      voice: selectedVoice,
      rate: audioSettings.rate,
      pitch: audioSettings.pitch,
      audioSettings: { volume: 1, rate: audioSettings.rate, pitch: audioSettings.pitch }, // Ensure audioSettings is set
    };
    setEntries((prevEntries) => ({
      ...prevEntries,
      [field]: [...prevEntries[field], newEntry],
    }));
    setNewEntryText('');
  };

  const displayedEntries = isCollapsed
    ? []
    : isExpanded
    ? entries.slice(0, getMaxView())
    : entries.slice(0, getDefaultView());

  const [, drop] = useDrop({
    accept: 'ENTRY',
    drop: (item) => {
      if (item.field !== field) {
        setEntries((prevEntries) => {
          const newEntries = prevEntries[item.field].filter((entry) => entry.id !== item.id);
          return {
            ...prevEntries,
            [item.field]: newEntries,
            [field]: [...prevEntries[field], { ...item, field }],
          };
        });
      }
    },
  });

  return (
    <div ref={drop}>
      <h2>{title}</h2>
      <button onClick={handleToggleCollapse}>
        {isCollapsed ? 'Expand' : 'Collapse'}
      </button>
      {field !== 'recycle' && (
        <button onClick={handleRecycle}>
          Recycle All
        </button>
      )}
      {field === 'recycle' && (
        <button onClick={handleDeleteAll}>
          Delete All
        </button>
      )}
      {field === 'hopper' && (
        <>
          <button onClick={handlePlay}>
            {isPlaying ? 'Stop' : 'Play'}
          </button>
          <label>
            <input
              type="checkbox"
              checked={useMainVoice}
              onChange={() => setUseMainVoice(!useMainVoice)}
            />
            Use Main Voice
          </label>
          {!isAddingEntry && (
            <button onClick={() => setIsAddingEntry(true)}>+</button>
          )}
          {isAddingEntry && (
            <div>
              <input
                type="text"
                value={newEntryText}
                onChange={(e) => setNewEntryText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddEntry()}
              />
              <button onClick={handleAddEntry}>Create</button>
              <button onClick={() => setIsAddingEntry(false)}>Close</button>
            </div>
          )}
        </>
      )}
      {!isCollapsed && (
        <>
          {displayedEntries.length > 0 ? (
            displayedEntries.map((entry, index) => (
              <Bubble
                key={entry.id}
                id={entry.id}
                entry={entry}
                field={field}
                setEntries={setEntries}
                index={index}
                moveEntry={moveEntry}
              >
                {field === 'hopper' && (
                  <div className='entry-controls'>
                    <button onClick={() => moveEntryUp(index)}>Up</button>
                    <button onClick={() => moveEntryDown(index)}>Down</button>
                  </div>
                )}
              </Bubble>
            ))
          ) : (
            <p>No entries.</p>
          )}
          {field !== 'recycle' && entries.length > getDefaultView() && (
            <button onClick={handleToggleExpand}>
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Field;