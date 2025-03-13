import React from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { useAudioSettings } from './AudioSettingsContext';

const Entry = ({ entry, setEntries, field }) => {
  const { voices } = useSpeechSynthesis();
  const { autoMuteMic, listeningRef, setListening } = useAudioSettings();

  const deleteEntry = () => {
    setEntries(prevEntries => ({
      ...prevEntries,
      recycle: [...prevEntries.recycle, entry],
      [field]: prevEntries[field].filter(e => e.id !== entry.id)
    }));
  };

  const moveEntry = (targetField) => {
    setEntries(prevEntries => ({
      ...prevEntries,
      [targetField]: [...prevEntries[targetField], entry],
      [field]: prevEntries[field].filter(e => e.id !== entry.id)
    }));
  };

  const playEntry = () => {
    const { text, audioSettings, voice } = entry;
    const selectedVoice = voices.find((v) => v.name === voice);

    const wasListeningBeforePlayback = listeningRef.current;

    if (autoMuteMic && listeningRef.current) {
      setListening(false);
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = selectedVoice;
    utterance.volume = audioSettings.volume;
    utterance.rate = audioSettings.rate;
    utterance.pitch = audioSettings.pitch;

    utterance.onend = () => {
      if (autoMuteMic && wasListeningBeforePlayback) {
        setListening(true);
      }
    };

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className='entry'>
      <h3>{entry.text}</h3>
      {field === 'recycle' && <button onClick={deleteEntry}>Delete</button>}
      {field !== 'favorite' && <button onClick={() => moveEntry('favorite')}>Favorite</button>}
      {field !== 'recycle' && <button onClick={() => moveEntry('recycle')}>Recycle</button>}
      {field !== 'userGenerated' && <button onClick={() => moveEntry('userGenerated')}>User</button>}
      {field !== 'hopper' && <button onClick={() => moveEntry('hopper')}>Hopper</button>}
      <button onClick={playEntry}>Play</button> 
    </div>
  );
};

export default Entry;