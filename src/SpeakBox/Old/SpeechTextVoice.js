// import React, { useState } from 'react';
// import SpeechToText from './SpeechToText';
// import VoiceMenu from './VoiceMenu';
// import { useSpeechSynthesis } from 'react-speech-kit';
// import { useAudioSettings } from './AudioSettingsContext'; // import the custom hook

// function SpeechTextVoice ({ setRecentEntries }) {
//   const { audioSettings } = useAudioSettings(); // use the custom hook
//   const [selectedVoice, setSelectedVoice] = useState('Google US English');
//   const { supported, speak } = useSpeechSynthesis();
//   const [finalTranscription, setFinalTranscription] = useState('');

//   const handleFinalTranscription = (transcript, selectedVoice) => {
//     setFinalTranscription(transcript);
//     speak({ text: transcript, voice: selectedVoice });
//     const newEntry = {
//       text: transcript,
//       timestamp: Date.now(),
//       voice: selectedVoice,
//       audioSettings, // store the current audio settings in the entry
//     };
//     setRecentEntries(prev => [newEntry, ...prev]);
//   };

//   return (
//     <div>
//       <VoiceMenu
//         selectedVoice={selectedVoice}
//         setSelectedVoice={setSelectedVoice}
//       />
//       <SpeechToText onFinalTranscription={handleFinalTranscription} />
//     </div>
//   );
// }

// export default SpeechTextVoice;

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import SpeechToText from './SpeechToText';
// import { useAudioSettings } from './AudioSettingsContext'; 

// function SpeechTextVoice ({ setRecentEntries }) {
//   const { 
//     audioSettings, 
//     speak, 
//     selectedVoice, 
//     setSelectedVoice 
//   } = useAudioSettings();

//   const [finalTranscription, setFinalTranscription] = useState('');

//   const handleFinalTranscription = (entry) => {
//     setFinalTranscription(entry.text);
//     speak({ text: entry.text, voice: entry.selectedVoice });

//     const newEntry = {
//       ...entry,
//       timestamp: Date.now(),
//     };
//     setRecentEntries(prev => [newEntry, ...prev]);
//   };

//   return (
//     <div>
//       <SpeechToText onFinalTranscription={handleFinalTranscription} />
//     </div>
//   );
// }

// export default SpeechTextVoice;