import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

function VoiceMenu() {
  const [selectedVoice, setSelectedVoice] = useState('Google US English');
  const { supported, voices } = useSpeechSynthesis();

  if (!supported) {
    return <div>Sorry, your browser does not support speech synthesis</div>;
  }

  return (
    <div>
      <select
        value={selectedVoice}
        onChange={(e) => setSelectedVoice(e.target.value)}
      >
        {voices.map((voice) => (
          <option key={voice.name} value={voice.name}>
            {voice.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default VoiceMenu;