import React, { useState, useEffect } from 'react';

const TextInputField = (props) => {
  const [text, setText] = useState('');
  const { selectedVoice } = props;

  const handleChange = (event) => {
    if (event.keyCode === 13) {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = selectedVoice;
        synth.speak(utterance);
        setText('');
    } else {
        setText(event.target.value);
    }
  };

  useEffect(() => {
    // some logic here that uses the text variable
  }, [text]);

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      speak();
      setText('');
    }
  };

  const speak = () => {
    if (text !== '') {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}   
        onKeyDown={handleKeyPress}
        onChange={handleChange}
     
        placeholder="Say Something!"
      />
    </div>
  );
};

export default TextInputField;