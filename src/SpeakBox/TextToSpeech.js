import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import AudioAdjusters from './AudioAdjusters';

function TextToSpeech() {
  const [text, setText] = useState('');
  const [voice, setVoice] = useState(null);
  const [audioSettings, setAudioSettings] = useState({pitch: 1, rate: 1, volume: 1, mute: false});
  const { speak, voices } = useSpeechSynthesis(audioSettings);

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleEnter = (e) => {
    if(e.key === 'Enter') {
      speak({ text: text, voice: voice, ...audioSettings });
      setText('');
    }
  }

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        onKeyPress={handleEnter}
        placeholder="Enter text here..."
        rows={5}
        cols={50}
      />
      <select
        value={voice ? voice.voiceURI : ''}
        onChange={(event) => {
          setVoice(voices.find((v) => v.voiceURI === event.target.value));
        }}
      >
        <option value="">Choose Your Voice</option>
        {voices.map((option) => (
          <option key={option.voiceURI} value={option.voiceURI}>
             {option.name}
          </option>
        ))}
      </select>
      <AudioAdjusters audioSettings={audioSettings} setAudioSettings={setAudioSettings} speak={speak} />
    </div>
  );
}

export default TextToSpeech;

// Original Working Code ABOVE ^^^^
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////