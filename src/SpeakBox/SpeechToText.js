// import React, { useState, useEffect } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import AudioAdjusters from './AudioAdjusters';
// import VoiceMenu from './VoiceMenu';
// import { useSpeechSynthesis } from 'react-speech-kit';
// import { useAudioSettings } from './AudioSettingsContext'; // import the custom hook

// const SpeechToText = ({ onFinalTranscription }) => {
//   const { audioSettings, setAudioSettings, autoMuteMic, setAutoMuteMic } = useAudioSettings(); // use the custom hook
//   const [selectedVoice, setSelectedVoice] = useState('Google US English');
//   const [lastFinalTranscription, setLastFinalTranscription] = useState('');
//   const { transcript, resetTranscript, finalTranscript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();
//   const { voices = [], supported } = useSpeechSynthesis();

//   const toggleListening = () => {
//     if (listening) {
//       SpeechRecognition.stopListening();
//     } else {
//       SpeechRecognition.startListening({ continuous: true });
//     }
//   };

//   useEffect(() => {
//     if (!browserSupportsSpeechRecognition) {
//       return;
//     }

//     if (finalTranscript !== lastFinalTranscription) {
//       setLastFinalTranscription(finalTranscript);
//       if (supported) {
//         const synth = window.speechSynthesis;
//         const utterance = new SpeechSynthesisUtterance(finalTranscript);
//         resetTranscript();
//         utterance.onstart = () => {
//           if (autoMuteMic) {
//             SpeechRecognition.stopListening();
//           }
//         };
//         utterance.onend = () => {
//           if (autoMuteMic) {
//             SpeechRecognition.startListening({ continuous: true });
//           }
//         };
//         utterance.voice = voices.find(voice => voice.name === selectedVoice);
//         utterance.volume = audioSettings.volume;
//         utterance.rate = audioSettings.rate;
//         utterance.pitch = audioSettings.pitch;
//         synth.speak(utterance);

//         if (finalTranscript.trim() !== '') {
//           const entry = {
//             text: finalTranscript.trim(),
//             audioSettings: audioSettings,
//             selectedVoice: selectedVoice,
//             id: Math.random().toString(36).substring(7),
//           };
//           onFinalTranscription(entry);
//         }
//       }
//     }
//   }, [finalTranscript, lastFinalTranscription, browserSupportsSpeechRecognition, resetTranscript, selectedVoice, audioSettings, supported, voices, autoMuteMic, onFinalTranscription]);

//   if (!browserSupportsSpeechRecognition) {
//     return null;
//   }

//   return (
//     <div>
//       <p>{transcript}</p>
//       <AudioAdjusters audioSettings={audioSettings} setAudioSettings={setAudioSettings} />
//       <VoiceMenu voices={voices} selectedVoice={selectedVoice} setSelectedVoice={setSelectedVoice} />
//       <button onClick={toggleListening}>{listening ? 'Stop' : 'Start'}</button>
//       <button onClick={() => setAutoMuteMic(!autoMuteMic)}>
//         {autoMuteMic ? 'Auto Mute Mic: ON' : 'Auto Mute Mic: OFF'}
//       </button>
//     </div>
//   );
// };

// export default SpeechToText;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState, useEffect } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import AudioAdjusters from './AudioAdjusters';
// import VoiceMenu from './VoiceMenu';
// import { useAudioSettings } from './AudioSettingsContext'; 

// const SpeechToText = ({ onFinalTranscription }) => {
//   const {
//     audioSettings,
//     setAudioSettings,
//     autoMuteMic,
//     setAutoMuteMic,
//     selectedVoice,
//     setSelectedVoice,
//     toggleListening,
//     voices = [],
//   } = useAudioSettings();

//   const [lastFinalTranscription, setLastFinalTranscription] = useState('');
//   const { transcript, resetTranscript, finalTranscript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();

//   useEffect(() => {
//     if (!browserSupportsSpeechRecognition) {
//       return;
//     }

//     if (finalTranscript !== lastFinalTranscription) {
//       setLastFinalTranscription(finalTranscript);
//       if (window.speechSynthesis) {
//         const synth = window.speechSynthesis;
//         const utterance = new SpeechSynthesisUtterance(finalTranscript);
//         resetTranscript();
//         utterance.onstart = () => {
//           if (autoMuteMic) {
//             SpeechRecognition.stopListening();
//           }
//         };
//         utterance.onend = () => {
//           if (autoMuteMic) {
//             SpeechRecognition.startListening({ continuous: true });
//           }
//         };
//         utterance.voice = voices.find(voice => voice.name === selectedVoice);
//         utterance.volume = audioSettings.volume;
//         utterance.rate = audioSettings.rate;
//         utterance.pitch = audioSettings.pitch;
//         synth.speak(utterance);

//         if (finalTranscript.trim() !== '') {
//           const entry = {
//             text: finalTranscript.trim(),
//             audioSettings: audioSettings,
//             selectedVoice: selectedVoice,
//             id: Math.random().toString(36).substring(7),
//           };
//           onFinalTranscription(entry);
//         }
//       }
//     }
//   }, [finalTranscript, lastFinalTranscription, browserSupportsSpeechRecognition, resetTranscript, selectedVoice, audioSettings, autoMuteMic, voices, setSelectedVoice, onFinalTranscription]);

//   if (!browserSupportsSpeechRecognition) {
//     return null;
//   }

//   return (
//     <div>
//       <p>{transcript}</p>
//       <AudioAdjusters audioSettings={audioSettings} setAudioSettings={setAudioSettings} />
//       <VoiceMenu />
//       <button onClick={toggleListening}>{listening ? 'Stop' : 'Start'}</button>
//       <button onClick={() => setAutoMuteMic(!autoMuteMic)}>
//         {autoMuteMic ? 'Auto Mute Mic: ON' : 'Auto Mute Mic: OFF'}
//       </button>
//     </div>
//   );
// };

// export default SpeechToText;

// import React, { useState, useEffect } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import AudioAdjusters from './AudioAdjusters';
// import VoiceMenu from './VoiceMenu';
// import { useAudioSettings } from './AudioSettingsContext'; 

// const SpeechToText = ({ onFinalTranscription }) => {
//   const {
//     audioSettings,
//     setAudioSettings,
//     autoMuteMic,
//     setAutoMuteMic,
//     selectedVoice,
//     setSelectedVoice,
//     toggleListening,
//     voices,
//   } = useAudioSettings();

//   const [inputText, setInputText] = useState('');
//   const [lastFinalTranscription, setLastFinalTranscription] = useState('');
//   const { transcript, resetTranscript, finalTranscript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();

//   const handlePlayText = () => {
//     if (autoMuteMic) {
//       SpeechRecognition.stopListening();
//     }

//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(inputText);
//     utterance.voice = voices.find(voice => voice.name === selectedVoice);
//     utterance.volume = audioSettings.volume;
//     utterance.rate = audioSettings.rate;
//     utterance.pitch = audioSettings.pitch;

//     utterance.onend = () => {
//       if (autoMuteMic) {
//         SpeechRecognition.startListening({ continuous: true });
//       }
//     };

//     synth.speak(utterance);
//   };

//   const handleEnter = (e) => {
//     if (e.key === 'Enter') {
//       handlePlayText();
//       onFinalTranscription({
//         text: inputText.trim(),
//         audioSettings: audioSettings,
//         selectedVoice: selectedVoice,
//         id: Math.random().toString(36).substring(7),
//       });
//       setInputText('');
//     }
//   };

//   useEffect(() => {
//     if (!browserSupportsSpeechRecognition) {
//       return;
//     }

//     if (finalTranscript !== lastFinalTranscription) {
//       setLastFinalTranscription(finalTranscript);
//       if (window.speechSynthesis) {
//         const synth = window.speechSynthesis;
//         const utterance = new SpeechSynthesisUtterance(finalTranscript);
//         resetTranscript();
//         utterance.onstart = () => {
//           if (autoMuteMic) {
//             SpeechRecognition.stopListening();
//           }
//         };
//         utterance.onend = () => {
//           if (autoMuteMic) {
//             SpeechRecognition.startListening({ continuous: true });
//           }
//         };
//         utterance.voice = voices.find(voice => voice.name === selectedVoice);
//         utterance.volume = audioSettings.volume;
//         utterance.rate = audioSettings.rate;
//         utterance.pitch = audioSettings.pitch;
//         synth.speak(utterance);

//         if (finalTranscript.trim() !== '') {
//           const entry = {
//             text: finalTranscript.trim(),
//             audioSettings: audioSettings,
//             selectedVoice: selectedVoice,
//             id: Math.random().toString(36).substring(7),
//           };
//           onFinalTranscription(entry);
//         }
//       }
//     }
//   }, [finalTranscript, lastFinalTranscription, browserSupportsSpeechRecognition, resetTranscript, selectedVoice, audioSettings, autoMuteMic, voices, setSelectedVoice, onFinalTranscription]);

//   if (!browserSupportsSpeechRecognition) {
//     return null;
//   }

//   return (
//     <div>
//       <p>{transcript}</p>
//       <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyPress={handleEnter}/>
//       <button onClick={handlePlayText}>Play</button>
//       <button onClick={() => {
//         onFinalTranscription({
//           text: inputText.trim(),
//           audioSettings: audioSettings,
//           selectedVoice: selectedVoice,
//           id: Math.random().toString(36).substring(7),
//         });
//         setInputText('');
//       }}>+</button>
//       <AudioAdjusters audioSettings={audioSettings} setAudioSettings={setAudioSettings} />
//       <VoiceMenu />
//       <button onClick={toggleListening}>{listening ? 'Stop' : 'Start'}</button>
//       <button onClick={() => setAutoMuteMic(!autoMuteMic)}>
//         {autoMuteMic ? 'Auto Mute Mic: ON' : 'Auto Mute Mic: OFF'}
//       </button>
//     </div>
//   );
// };

// export default SpeechToText;


//////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
// import AudioAdjusters from "./AudioAdjusters";
// import VoiceMenu from "./VoiceMenu";
// import { useAudioSettings } from "./AudioSettingsContext";
// import { useDraggable } from "@dnd-kit/core";

// const SpeechToText = ({ onFinalTranscription }) => {
//   const {
//     audioSettings,
//     setAudioSettings,
//     autoMuteMic,
//     setAutoMuteMic,
//     selectedVoice,
//     setSelectedVoice,
//     toggleListening,
//     voices,
//   } = useAudioSettings();

//   const [inputText, setInputText] = useState("");
//   const [lastFinalTranscription, setLastFinalTranscription] = useState("");
//   const { transcript, resetTranscript, finalTranscript, listening, browserSupportsSpeechRecognition } =
//     useSpeechRecognition();

//   // Drag-and-Drop Hook
//   const { attributes, listeners, setNodeRef, transform } = useDraggable({
//     id: `text-${Math.random().toString(36).substring(7)}`,
//     data: { text: inputText },
//   });

//   const style = {
//     transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
//     padding: "8px",
//     margin: "4px",
//     borderRadius: "4px",
//     cursor: "grab",
//     backgroundColor: "#f3f3f3",
//     border: "1px solid #ccc",
//   };

//   const handlePlayText = () => {
//     if (autoMuteMic) {
//       SpeechRecognition.stopListening();
//     }

//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(inputText);
//     utterance.voice = voices.find((voice) => voice.name === selectedVoice);
//     utterance.volume = audioSettings.volume;
//     utterance.rate = audioSettings.rate;
//     utterance.pitch = audioSettings.pitch;

//     utterance.onend = () => {
//       if (autoMuteMic) {
//         SpeechRecognition.startListening({ continuous: true });
//       }
//     };

//     synth.speak(utterance);
//   };

//   const handleEnter = (e) => {
//     if (e.key === "Enter") {
//       handlePlayText();
//       onFinalTranscription({
//         text: inputText.trim(),
//         audioSettings: audioSettings,
//         selectedVoice: selectedVoice,
//         id: Math.random().toString(36).substring(7),
//       });
//       setInputText("");
//     }
//   };

//   useEffect(() => {
//     if (!browserSupportsSpeechRecognition) {
//       return;
//     }

//     if (finalTranscript !== lastFinalTranscription) {
//       setLastFinalTranscription(finalTranscript);
//       if (window.speechSynthesis) {
//         const synth = window.speechSynthesis;
//         const utterance = new SpeechSynthesisUtterance(finalTranscript);
//         resetTranscript();
//         utterance.onstart = () => {
//           if (autoMuteMic) {
//             SpeechRecognition.stopListening();
//           }
//         };
//         utterance.onend = () => {
//           if (autoMuteMic) {
//             SpeechRecognition.startListening({ continuous: true });
//           }
//         };
//         utterance.voice = voices.find((voice) => voice.name === selectedVoice);
//         utterance.volume = audioSettings.volume;
//         utterance.rate = audioSettings.rate;
//         utterance.pitch = audioSettings.pitch;
//         synth.speak(utterance);

//         if (finalTranscript.trim() !== "") {
//           const entry = {
//             text: finalTranscript.trim(),
//             audioSettings: audioSettings,
//             selectedVoice: selectedVoice,
//             id: Math.random().toString(36).substring(7),
//           };
//           onFinalTranscription(entry);
//         }
//       }
//     }
//   }, [
//     finalTranscript,
//     lastFinalTranscription,
//     browserSupportsSpeechRecognition,
//     resetTranscript,
//     selectedVoice,
//     audioSettings,
//     autoMuteMic,
//     voices,
//     setSelectedVoice,
//     onFinalTranscription,
//   ]);

//   if (!browserSupportsSpeechRecognition) {
//     return null;
//   }

//   return (
//     <div>
//       <p>{transcript}</p>
//       <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
//         <input
//           type="text"
//           value={inputText}
//           onChange={(e) => setInputText(e.target.value)}
//           onKeyPress={handleEnter}
//         />
//       </div>
//       <button onClick={handlePlayText}>Play</button>
//       <button
//         onClick={() => {
//           onFinalTranscription({
//             text: inputText.trim(),
//             audioSettings: audioSettings,
//             selectedVoice: selectedVoice,
//             id: Math.random().toString(36).substring(7),
//           });
//           setInputText("");
//         }}
//       >
//         +
//       </button>
//       <AudioAdjusters audioSettings={audioSettings} setAudioSettings={setAudioSettings} />
//       <VoiceMenu />
//       <button onClick={toggleListening}>{listening ? "Stop" : "Start"}</button>
//       <button onClick={() => setAutoMuteMic(!autoMuteMic)}>
//         {autoMuteMic ? "Auto Mute Mic: ON" : "Auto Mute Mic: OFF"}
//       </button>
//     </div>
//   );
// };

// export default SpeechToText;

///////////////////////////////////////////////////////////////////////////////////////


// import React, { useState, useEffect } from "react";
// import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
// import AudioAdjusters from "./AudioAdjusters";
// import VoiceMenu from "./VoiceMenu";
// import { useAudioSettings } from "./AudioSettingsContext";
// import { useDragAndDrop } from "./DragAndDropProvider"; // Drag and drop context
// import { generateUniqueID } from "./utils/idGenerator";

// const SpeechToText = ({ onFinalTranscription }) => {
//   const {
//     audioSettings,
//     setAudioSettings,
//     autoMuteMic,
//     setAutoMuteMic,
//     selectedVoice,
//     toggleListening,
//     voices,
//   } = useAudioSettings();

//   const { addBubble } = useDragAndDrop(); // Function to add bubbles to fields

//   const [inputText, setInputText] = useState("");
//   const [lastFinalTranscription, setLastFinalTranscription] = useState("");

//   const { transcript, resetTranscript, finalTranscript, listening, browserSupportsSpeechRecognition } =
//     useSpeechRecognition();

//   const handlePlayText = () => {
//     if (autoMuteMic) SpeechRecognition.stopListening();

//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(inputText);
//     utterance.voice = voices.find((voice) => voice.name === selectedVoice);
//     utterance.volume = audioSettings.volume;
//     utterance.rate = audioSettings.rate;
//     utterance.pitch = audioSettings.pitch;

//     utterance.onend = () => {
//       if (autoMuteMic) SpeechRecognition.startListening({ continuous: true });
//     };

//     synth.speak(utterance);
//   };

//   const handleEnter = (e) => {
//     if (e.key === "Enter" && inputText.trim() !== "") {
//       const newBubble = {
//         id: generateUniqueID(),
//         content: inputText.trim(),
//         field: "recent", // Default to "recent"
//       };

//       onFinalTranscription(newBubble);
//       addBubble(newBubble); // Add to the drag-and-drop system
//       setInputText("");
//     }
//   };

//   useEffect(() => {
//     if (!browserSupportsSpeechRecognition) return;

//     if (finalTranscript !== lastFinalTranscription) {
//       setLastFinalTranscription(finalTranscript);
//       if (window.speechSynthesis) {
//         const synth = window.speechSynthesis;
//         const utterance = new SpeechSynthesisUtterance(finalTranscript);
//         resetTranscript();

//         utterance.onstart = () => {
//           if (autoMuteMic) SpeechRecognition.stopListening();
//         };
//         utterance.onend = () => {
//           if (autoMuteMic) SpeechRecognition.startListening({ continuous: true });
//         };

//         utterance.voice = voices.find((voice) => voice.name === selectedVoice);
//         utterance.volume = audioSettings.volume;
//         utterance.rate = audioSettings.rate;
//         utterance.pitch = audioSettings.pitch;
//         synth.speak(utterance);

//         if (finalTranscript.trim() !== "") {
//           const newBubble = {
//             id: generateUniqueID(),
//             content: finalTranscript.trim(),
//             field: "recent",
//           };
//           onFinalTranscription(newBubble);
//           addBubble(newBubble); // Add to drag-and-drop system
//         }
//       }
//     }
//   }, [
//     finalTranscript,
//     lastFinalTranscription,
//     browserSupportsSpeechRecognition,
//     resetTranscript,
//     selectedVoice,
//     audioSettings,
//     autoMuteMic,
//     voices,
//     setSelectedVoice,
//     onFinalTranscription,
//     addBubble,
//   ]);

//   if (!browserSupportsSpeechRecognition) return null;

//   return (
//     <div className="p-4 border rounded-lg bg-gray-100">
//       <p>{transcript}</p>
//       <input
//         type="text"
//         value={inputText}
//         onChange={(e) => setInputText(e.target.value)}
//         onKeyPress={handleEnter}
//         className="p-2 border rounded-md w-full"
//       />
//       <div className="flex gap-2 mt-2">
//         <button className="btn" onClick={handlePlayText}>Play</button>
//         <button
//           className="btn"
//           onClick={() => {
//             if (inputText.trim() !== "") {
//               const newBubble = {
//                 id: generateUniqueID(),
//                 content: inputText.trim(),
//                 field: "recent",
//               };
//               onFinalTranscription(newBubble);
//               addBubble(newBubble);
//               setInputText("");
//             }
//           }}
//         >
//           +
//         </button>
//       </div>
//       <AudioAdjusters audioSettings={audioSettings} setAudioSettings={setAudioSettings} />
//       <VoiceMenu />
//       <div className="mt-2 flex gap-2">
//         <button className="btn" onClick={toggleListening}>{listening ? "Stop" : "Start"}</button>
//         <button className="btn" onClick={() => setAutoMuteMic(!autoMuteMic)}>
//           {autoMuteMic ? "Auto Mute Mic: ON" : "Auto Mute Mic: OFF"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SpeechToText;

/////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
// import AudioAdjusters from "./AudioAdjusters";
// import VoiceMenu from "./VoiceMenu";
// import { useAudioSettings } from "./AudioSettingsContext";
// import { useDraggable } from "@dnd-kit/core";
// import { generateUniqueID } from "./utils/idGenerator";

// const SpeechToText = ({ onFinalTranscription }) => {
//   const {
//     audioSettings,
//     setAudioSettings,
//     autoMuteMic,
//     setAutoMuteMic,
//     selectedVoice,
//     setSelectedVoice, // ✅ Fix: Ensure this exists
//     toggleListening,
//     voices = [], // ✅ Fix: Default to empty array if undefined
//   } = useAudioSettings();

//   const [inputText, setInputText] = useState("");
//   const [lastFinalTranscription, setLastFinalTranscription] = useState("");
//   const { transcript, resetTranscript, finalTranscript, listening, browserSupportsSpeechRecognition } =
//     useSpeechRecognition();

//   const bubbleId = generateUniqueID(); // Ensure unique ID for each text entry

//   // Drag-and-Drop Hook
//   const { attributes, listeners, setNodeRef, transform } = useDraggable({
//     id: bubbleId,
//     data: { text: inputText },
//   });

//   const style = {
//     transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
//     padding: "8px",
//     margin: "4px",
//     borderRadius: "4px",
//     cursor: "grab",
//     backgroundColor: "#f3f3f3",
//     border: "1px solid #ccc",
//   };

//   const handlePlayText = () => {
//     if (autoMuteMic) {
//       SpeechRecognition.stopListening();
//     }

//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(inputText);
//     utterance.voice = voices.find((voice) => voice.name === selectedVoice) || null;
//     utterance.volume = audioSettings.volume;
//     utterance.rate = audioSettings.rate;
//     utterance.pitch = audioSettings.pitch;

//     utterance.onend = () => {
//       if (autoMuteMic) {
//         SpeechRecognition.startListening({ continuous: true });
//       }
//     };

//     synth.speak(utterance);
//   };

//   const handleEnter = (e) => {
//     if (e.key === "Enter") {
//       handlePlayText();
//       onFinalTranscription({
//         text: inputText.trim(),
//         audioSettings,
//         selectedVoice,
//         id: bubbleId,
//       });
//       setInputText("");
//     }
//   };

//   useEffect(() => {
//     if (!browserSupportsSpeechRecognition) return;

//     if (finalTranscript !== lastFinalTranscription) {
//       setLastFinalTranscription(finalTranscript);
//       if (window.speechSynthesis) {
//         const synth = window.speechSynthesis;
//         const utterance = new SpeechSynthesisUtterance(finalTranscript);
//         resetTranscript();
//         utterance.onstart = () => autoMuteMic && SpeechRecognition.stopListening();
//         utterance.onend = () => autoMuteMic && SpeechRecognition.startListening({ continuous: true });
//         utterance.voice = voices.find((voice) => voice.name === selectedVoice) || null;
//         utterance.volume = audioSettings.volume;
//         utterance.rate = audioSettings.rate;
//         utterance.pitch = audioSettings.pitch;
//         synth.speak(utterance);

//         if (finalTranscript.trim()) {
//           onFinalTranscription({
//             text: finalTranscript.trim(),
//             audioSettings,
//             selectedVoice,
//             id: bubbleId,
//           });
//         }
//       }
//     }
//   }, [finalTranscript, lastFinalTranscription, browserSupportsSpeechRecognition, resetTranscript, selectedVoice, audioSettings, autoMuteMic, voices, onFinalTranscription]);

//   if (!browserSupportsSpeechRecognition) {
//     return null;
//   }

//   return (
//     <div>
//       <p>{transcript}</p>
//       <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
//         <input
//           type="text"
//           value={inputText}
//           onChange={(e) => setInputText(e.target.value)}
//           onKeyPress={handleEnter}
//         />
//       </div>
//       <button onClick={handlePlayText}>Play</button>
//       <button
//         onClick={() => {
//           onFinalTranscription({
//             text: inputText.trim(),
//             audioSettings,
//             selectedVoice,
//             id: bubbleId,
//           });
//           setInputText("");
//         }}
//       >
//         +
//       </button>
//       <AudioAdjusters audioSettings={audioSettings} setAudioSettings={setAudioSettings} />
//       <VoiceMenu />
//       <button onClick={toggleListening}>{listening ? "Stop" : "Start"}</button>
//       <button onClick={() => setAutoMuteMic(!autoMuteMic)}>
//         {autoMuteMic ? "Auto Mute Mic: ON" : "Auto Mute Mic: OFF"}
//       </button>
//     </div>
//   );
// };

// export default SpeechToText;

///////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import AudioAdjusters from "./AudioAdjusters";
import VoiceMenu from "./VoiceMenu";
import { useAudioSettings } from "./AudioSettingsContext";
import { useDraggable } from "@dnd-kit/core";
import { generateUniqueID } from "./utils/idGenerator";

const SpeechToText = ({ onFinalTranscription }) => {
  const {
    audioSettings,
    setAudioSettings,
    autoMuteMic,
    setAutoMuteMic,
    selectedVoice,
    toggleListening,
    voices = [],
  } = useAudioSettings();

  const [inputText, setInputText] = useState("");
  const [lastFinalTranscription, setLastFinalTranscription] = useState("");
  const { transcript, resetTranscript, finalTranscript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const bubbleId = generateUniqueID();

  // Drag-and-Drop Hook
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: bubbleId,
    data: { text: inputText },
  });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    padding: "8px",
    margin: "4px",
    borderRadius: "4px",
    cursor: "crosshair",
    backgroundColor: "#f3f3f3",
    border: "1px solid #ccc",
  };

  const handlePlayText = () => {
    if (autoMuteMic) {
      SpeechRecognition.stopListening();
    }

    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(inputText);
    utterance.voice = voices.find((voice) => voice.name === selectedVoice) || null;
    utterance.volume = audioSettings.volume;
    utterance.rate = audioSettings.rate;
    utterance.pitch = audioSettings.pitch;

    utterance.onend = () => {
      if (autoMuteMic) {
        SpeechRecognition.startListening({ continuous: true });
      }
    };

    synth.speak(utterance);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handlePlayText();
      onFinalTranscription({
        text: inputText.trim(),
        audioSettings,
        selectedVoice,
        id: bubbleId,
      });
      setInputText("");
    }
  };

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) return;

    if (finalTranscript !== lastFinalTranscription) {
      setLastFinalTranscription(finalTranscript);
      if (window.speechSynthesis) {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(finalTranscript);
        resetTranscript();
        utterance.onstart = () => autoMuteMic && SpeechRecognition.stopListening();
        utterance.onend = () => autoMuteMic && SpeechRecognition.startListening({ continuous: true });
        utterance.voice = voices.find((voice) => voice.name === selectedVoice) || null;
        utterance.volume = audioSettings.volume;
        utterance.rate = audioSettings.rate;
        utterance.pitch = audioSettings.pitch;
        synth.speak(utterance);

        if (finalTranscript.trim()) {
          onFinalTranscription({
            text: finalTranscript.trim(),
            audioSettings,
            selectedVoice,
            id: bubbleId,
          });
        }
      }
    }
  }, [finalTranscript, lastFinalTranscription, browserSupportsSpeechRecognition, resetTranscript, selectedVoice, audioSettings, autoMuteMic, voices, onFinalTranscription, bubbleId]);

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div>
      <p>{transcript}</p>
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleEnter}
        />
      </div>
      <button onClick={handlePlayText}>Play</button>
      <button
        onClick={() => {
          onFinalTranscription({
            text: inputText.trim(),
            audioSettings,
            selectedVoice,
            id: bubbleId,
          });
          setInputText("");
        }}
      >
        +
      </button>
      <AudioAdjusters audioSettings={audioSettings} setAudioSettings={setAudioSettings} />
      <VoiceMenu />
      <button onClick={toggleListening}>{listening ? "Stop" : "Start"}</button>
      <button onClick={() => setAutoMuteMic(!autoMuteMic)}>
        {autoMuteMic ? "Auto Mute Mic: ON" : "Auto Mute Mic: OFF"}
      </button>
    </div>
  );
};

export default SpeechToText;