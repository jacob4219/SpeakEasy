// import React, { useState } from 'react';
// import { useSpeechSynthesis } from 'react-speech-kit';
// import { useAudioSettings } from './AudioSettingsContext'; // import the custom hook

// const TextEntry = ({ setEntries }) => {
//   const { speak, voices } = useSpeechSynthesis();
//   const { audioSettings } = useAudioSettings(); // use the custom hook
//   const [text, setText] = useState('');
//   const [selectedVoice, setSelectedVoice] = useState('Google US English');

//   const handleTextChange = (event) => {
//     setText(event.target.value);
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       event.preventDefault(); // prevent form submission
//       const voice = voices.find((v) => v.name === selectedVoice);
//       speak({ text, voice, ...audioSettings });
//       const newEntry = {
//         text,
//         timestamp: Date.now(),
//         voice: selectedVoice,
//         audioSettings, // store the current audio settings in the entry
//       };
//       setEntries(prev => ({
//         ...prev,
//         recent: [newEntry, ...prev.recent],
//       }));
//       setText(''); // clear the text field
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={text}
//         onChange={handleTextChange}
//         onKeyPress={handleKeyPress}
//         placeholder="Type to speak"
//       />
//     </div>
//   );
// };

// export default TextEntry;

import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { useAudioSettings } from './AudioSettingsContext'; // import the custom hook
import SpeechRecognition from 'react-speech-recognition'; // import SpeechRecognition

const TextEntry = ({ setEntries }) => {
  const { speak, voices } = useSpeechSynthesis();
  const { audioSettings, autoMuteMic, selectedVoice } = useAudioSettings(); // use the custom hook
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const voice = voices.find((v) => v.name === selectedVoice); // find the selected voice
      if (autoMuteMic) {
        SpeechRecognition.stopListening();
      }
      speak({ 
        text, 
        voice, 
        volume: audioSettings.volume, 
        rate: audioSettings.rate, 
        pitch: audioSettings.pitch,
        onend: () => {
          if (autoMuteMic) {
            SpeechRecognition.startListening({ continuous: true });
          }
        },
      });
      const newEntry = {
        text: text,
        timestamp: Date.now(),
        voice: selectedVoice,
        audioSettings,
        id: Math.random().toString(36).substring(7),
      };
      setEntries(prev => ({
        ...prev,
        recent: [newEntry, ...prev.recent],
      }));
      setText('');
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextChange}
        onKeyPress={handleKeyPress}
        placeholder="Type here and press Enter to speak..."
      />
    </div>
  );
};

export default TextEntry;