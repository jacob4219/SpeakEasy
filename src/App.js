import './App.css';
import React, { useState } from 'react';
import TextInputField from './SpeakBox/text-input-field';
import VoiceList from './SpeakBox/voice-list';


const App = () => {
  const [voice, setVoice] = useState('');

  return (
    <div>
      <VoiceList setVoice={setVoice} />
      <TextInputField selectedVoice={voice} />
    </div>
  );
};

export default App;
