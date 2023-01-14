import React, { useState } from 'react';
import SpeechToText from './SpeechToText';
import VoiceMenu from './VoiceMenu';
import { useSpeechSynthesis } from 'react-speech-kit';

function SpeechTextVoice () {
  const [selectedVoice, setSelectedVoice] = useState('Google US English');
  const { supported, speak } = useSpeechSynthesis();
  const [finalTranscription, setFinalTranscription] = useState('');

  const handleFinalTranscription = (transcript) => {
    setFinalTranscription(transcript);
    speak({ text: transcript, voice: selectedVoice });
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
