import React, { createContext, useContext, useState, useRef } from 'react';
import SpeechRecognition from 'react-speech-recognition';
import { useSpeechSynthesis } from 'react-speech-kit';

const AudioSettingsContext = createContext();

export const AudioSettingsProvider = ({ children }) => {
  const [audioSettings, setAudioSettings] = useState({
    volume: 1,
    rate: 1,
    pitch: 1,
  });
  const [autoMuteMic, setAutoMuteMic] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState('Google US English');
  const { voices } = useSpeechSynthesis();

  const listeningRef = useRef(false);

  const setListening = (value) => {
    listeningRef.current = value;
    if (value) {
      SpeechRecognition.startListening({ continuous: true });
    } else {
      SpeechRecognition.stopListening();
    }
  };

  const toggleListening = () => {
    setListening(!listeningRef.current);
  };

  return (
    <AudioSettingsContext.Provider
      value={{
        audioSettings,
        setAudioSettings,
        autoMuteMic,
        setAutoMuteMic,
        selectedVoice,
        setSelectedVoice,
        listening: listeningRef.current,
        setListening,
        listeningRef,
        toggleListening,
        voices,
      }}
    >
      {children}
    </AudioSettingsContext.Provider>
  );
};

export const useAudioSettings = () => useContext(AudioSettingsContext);