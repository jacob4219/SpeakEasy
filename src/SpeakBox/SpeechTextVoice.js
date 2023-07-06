import React, { useState } from 'react';
import SpeechToText from './SpeechToText';
import VoiceMenu from './VoiceMenu';
import { useSpeechSynthesis } from 'react-speech-kit';

function SpeechTextVoice ({ setRecentEntries }) {
  const [selectedVoice, setSelectedVoice] = useState('Google US English');
  const { supported, speak } = useSpeechSynthesis();
  const [finalTranscription, setFinalTranscription] = useState('');

  const handleFinalTranscription = (transcript, audioSettings, selectedVoice) => {
    setFinalTranscription(transcript);
    speak({ text: transcript, voice: selectedVoice });
    const newEntry = {
      text: transcript,
      timestamp: Date.now(),
      voice: selectedVoice,
      audioSettings, // store the current audio settings in the entry
    };
    setRecentEntries(prev => [newEntry, ...prev]);
  };

  return (
    <div>
      <VoiceMenu
        selectedVoice={selectedVoice}
        setSelectedVoice={setSelectedVoice}
      />
      <SpeechToText onFinalTranscription={handleFinalTranscription} />
    </div>
  );
}

export default SpeechTextVoice;