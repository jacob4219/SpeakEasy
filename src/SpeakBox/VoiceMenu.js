import React from 'react';

const VoiceMenu = ({ voices, selectedVoice, setSelectedVoice }) => {
  const handleChange = (event) => {
    setSelectedVoice(event.target.value);
  };

  return (
    <div>
      <label htmlFor="voice-select">Select Voice:</label>
      <select id="voice-select" value={selectedVoice || ''} onChange={handleChange}>
        {voices.map((voice) => (
          <option key={voice.name} value={voice.name}>
            {voice.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default VoiceMenu;