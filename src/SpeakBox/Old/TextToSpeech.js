import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { useAudioSettings } from './AudioSettingsContext';

const TextToSpeech = ({ onFinalTranscription }) => {
  const { speak, voices } = useSpeechSynthesis();
  const { audioSettings, selectedVoice, autoMuteMic, setListening } = useAudioSettings();
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    const newEntry = {
      id: Date.now(),
      text: input,
      audioSettings,
      selectedVoice,
    };
    onFinalTranscription(newEntry);
    setInput('');
    handleSpeak(newEntry);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    const newEntry = {
      id: Date.now(),
      text: input,
      audioSettings,
      selectedVoice,
    };
    onFinalTranscription(newEntry);
    setInput('');
  };

  const handleSpeak = (entry) => {
    const voice = voices.find(v => v.name === entry.selectedVoice);
    if (autoMuteMic) {
      setListening(false);
    }
    speak({
      text: entry.text,
      voice,
      volume: entry.audioSettings.volume,
      rate: entry.audioSettings.rate,
      pitch: entry.audioSettings.pitch,
      onend: () => {
        if (autoMuteMic) {
          setListening(true);
        }
      },
    });
  };

  const handlePlay = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    const entry = {
      id: Date.now(),
      text: input,
      audioSettings,
      selectedVoice,
    };
    handleSpeak(entry);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={input}
          onChange={handleInputChange}
          placeholder='Enter text...'
        />
        <button type='submit'>Enter</button>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handleAdd}>+</button>
      </form>
    </div>
  );
};

export default TextToSpeech;