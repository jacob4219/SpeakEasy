// import React, { useState, useRef, useEffect } from 'react';
// import { useSpeechSynthesis } from 'react-speech-kit';
// import { useAudioSettings } from './AudioSettingsContext'; 
// import { v4 as uuidv4 } from 'uuid'; // import the UUID generator

// const TextToSpeech = ({ onNewEntry }) => {
//   const [input, setInput] = useState("");
//   const { speak, voices } = useSpeechSynthesis();
//   const { audioSettings, selectedVoice } = useAudioSettings(); 
//   const inputRef = useRef(); // to keep track of the input field

//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       event.preventDefault();

//       // Create the entry
//       const entry = {
//         id: uuidv4(),
//         text: input,
//         audioSettings,
//         selectedVoice,
//       };

//       // Speak the entry text
//       const voice = voices.find((v) => v.name === selectedVoice);
//       speak({ 
//         text: input, 
//         voice, 
//         volume: audioSettings.volume, 
//         rate: audioSettings.rate, 
//         pitch: audioSettings.pitch,
//       });

//       // Call the parent component's handler
//       onNewEntry(entry);

//       // Clear the input field and focus it for the next entry
//       setInput("");
//       inputRef.current.focus();
//     }
//   };

//   useEffect(() => {
//     // set the focus to the input field on initial render
//     inputRef.current.focus();
//   }, []);

//   return (
//     <input
//       type="text"
//       value={input}
//       onChange={(e) => setInput(e.target.value)}
//       onKeyDown={handleKeyDown}
//       ref={inputRef} // attach the ref to the input field
//       placeholder="Type here..."
//     />
//   );
// };

// export default TextToSpeech;

///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
