// import React, { useState, useEffect } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import AudioAdjusters from './audio-adjusters';
// import VoiceMenu from './voice-menu';
// import { useSpeechSynthesis } from 'react-speech-kit';

// const SpeechToText = () => {
// const {
// transcript,
// listening,
// resetTranscript,
// browserSupportsSpeechRecognition
// } = useSpeechRecognition();
// const [finalTranscript, setFinalTranscript] = useState('');
// const [lastFinalTranscription, setLastFinalTranscription] = useState('');
// const [audioSettings, setAudioSettings] = useState({
// volume: 1,
// rate: 1,
// pitch: 1,
// });
// const [selectedVoice, setSelectedVoice] = useState('Google US English');
// const { supported, voices } = useSpeechSynthesis();

// useEffect(() => {
// let listeningInterval = null;
// if (listening) {
// SpeechRecognition.startListening({ continuous: true });
// listeningInterval = setInterval(() => {
// setFinalTranscript(transcript);
// }, 525);
// } else {
// clearInterval(listeningInterval);
// SpeechRecognition.stopListening();
// }
// return () => {
// clearInterval(listeningInterval);
// };
// }, [listening, transcript]);

// useEffect(() => {
// if (!browserSupportsSpeechRecognition) {
// return;
// }
// if (finalTranscript !== lastFinalTranscription) {
// setLastFinalTranscription(finalTranscript);
// if (supported) {
// const synth = window.speechSynthesis;
// const utterance = new SpeechSynthesisUtterance(finalTranscript);
// resetTranscript();
// utterance.onend = () => {
// }
// utterance.voice = voices.find(voice => voice.name === selectedVoice);
// utterance.volume = audioSettings.volume;
// utterance.rate = audioSettings.rate;
// utterance.pitch = audioSettings.pitch;
// synth.speak(utterance);
// }
// }
// }, [finalTranscript, lastFinalTranscription, browserSupportsSpeechRecognition, resetTranscript, selectedVoice, audioSettings, supported, voices]);

// if (!browserSupportsSpeechRecognition) {
// return <span>Browser doesn't support speech recognition.</span>;
// }

// return (
//     <div>
//       <AudioAdjusters audioSettings={audioSettings} setAudioSettings={setAudioSettings} />
//       <VoiceMenu selectedVoice={selectedVoice} setSelectedVoice={setSelectedVoice} voices={voices} />
//       <p>Microphone: {listening ? 'on' : 'off'}</p>
//       <button onClick={() => SpeechRecognition.startListening({ continuous: true })}>Start</button>
//       <button onClick={() => SpeechRecognition.stopListening()}>Stop</button>
//       <p>{finalTranscript}</p>
//     </div>
//   );
  
// };

// export default SpeechToText;

// Above is the original working code //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import AudioAdjusters from './AudioAdjusters';
// import VoiceMenu from './VoiceMenu';
// import { useSpeechSynthesis } from 'react-speech-kit';

// const SpeechToText = ({ onFinalTranscription }) => {
//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition
//   } = useSpeechRecognition();
//   const [finalTranscript, setFinalTranscript] = useState('');
//   const [lastFinalTranscription, setLastFinalTranscription] = useState('');
//   const [audioSettings, setAudioSettings] = useState({
//     volume: 1,
//     rate: 1,
//     pitch: 1,
//   });
//   const [selectedVoice, setSelectedVoice] = useState('Google US English');
//   const { supported, voices } = useSpeechSynthesis();
//   const [autoMuteMic, setAutoMuteMic] = useState(false);

//   useEffect(() => {
//     let listeningInterval = null;
//     if (listening) {
//       SpeechRecognition.startListening({ continuous: true });
//       listeningInterval = setInterval(() => {
//         setFinalTranscript(transcript);
//       }, 525);
//     } else {
//       clearInterval(listeningInterval);
//       SpeechRecognition.stopListening();
//     }
//     return () => {
//       clearInterval(listeningInterval);
//     };
//   }, [listening, transcript]);

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
// // Call the onFinalTranscription prop with the new final transcript if not empty
// if (finalTranscript.trim() !== '') {
//   onFinalTranscription({
//     text: finalTranscript.trim(),
//     audioSettings: audioSettings,
//     selectedVoice: selectedVoice,
//   });
// }

//       }
//     }
//   }, [finalTranscript, lastFinalTranscription, browserSupportsSpeechRecognition, resetTranscript, selectedVoice, audioSettings, supported, voices, autoMuteMic, onFinalTranscription]);

//   if (!browserSupportsSpeechRecognition) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }

//   return (
//     <div>
//       <AudioAdjusters audioSettings={audioSettings} setAudioSettings={setAudioSettings} />
//       <VoiceMenu selectedVoice={selectedVoice} setSelectedVoice={setSelectedVoice} voices={voices} />
//       <p>Microphone: {listening ? 'on' : 'off'}</p>
//       <button onClick={() => SpeechRecognition.startListening({ continuous: true })}>Start</button>
//       <button onClick={() => SpeechRecognition.stopListening()}>Stop</button>
// <label>
//   <input
//     type="checkbox"
//     checked={autoMuteMic}
//     onChange={() => setAutoMuteMic(!autoMuteMic)}
//   />
//   Auto Mute Mic
// </label>
// <p>{finalTranscript}</p>
// </div>
// );
// };

// export default SpeechToText;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import AudioAdjusters from './AudioAdjusters';
// import VoiceMenu from './VoiceMenu';
// import { useSpeechSynthesis } from 'react-speech-kit';

// const SpeechToText = ({ onFinalTranscription }) => {
//   const [selectedVoice, setSelectedVoice] = useState('Google US English');
//   const [audioSettings, setAudioSettings] = useState({ volume: 1.0, rate: 1.0, pitch: 1.0 });
//   const [autoMuteMic, setAutoMuteMic] = useState(false);
//   const [lastFinalTranscription, setLastFinalTranscription] = useState('');
//   const { transcript, resetTranscript, finalTranscript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();
//   const { voices, supported } = useSpeechSynthesis();

//   const toggleListening = () => {
//     if (listening) {
//       SpeechRecognition.stopListening();
//     } else {
//       SpeechRecognition.startListening({ continuous: true });
//     }
//   };

//   const handleSettingsChange = (name, value) => {
//     setAudioSettings((prevSettings) => ({ ...prevSettings, [name]: value }));
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
      
//       <AudioAdjusters audioSettings={audioSettings} onSettingsChange={handleSettingsChange} />
//       <VoiceMenu voices={voices} selectedVoice={selectedVoice} onVoiceChange={setSelectedVoice} />
//       <button onClick={toggleListening}>{listening ? 'Stop' : 'Start'}</button>
//       <input type='checkbox' checked={autoMuteMic} onChange={() => setAutoMuteMic(!autoMuteMic)} /> Auto Mute Mic
//     </div>
//   );
// };

// export default SpeechToText;

// NEWEST!!!!! Working Code Above //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import AudioAdjusters from './AudioAdjusters';
// import VoiceMenu from './VoiceMenu';
// import { useSpeechSynthesis } from 'react-speech-kit';

// const SpeechToText = ({ onFinalTranscription }) => {
//   const [selectedVoice, setSelectedVoice] = useState('Google US English');
//   const [audioSettings, setAudioSettings] = useState({ volume: 1.0, rate: 1.0, pitch: 1.0 });
//   const [autoMuteMic, setAutoMuteMic] = useState(false);
//   const [lastFinalTranscription, setLastFinalTranscription] = useState('');
//   const { transcript, resetTranscript, finalTranscript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();
//   const { voices, supported } = useSpeechSynthesis();

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
//       <VoiceMenu voices={voices} selectedVoice={selectedVoice} onVoiceChange={setSelectedVoice} />
//       <button onClick={toggleListening}>{listening ? 'Stop' : 'Start'}</button>
//       <input type='checkbox' checked={autoMuteMic} onChange={() => setAutoMuteMic(!autoMuteMic)} /> Auto Mute Mic
//     </div>
//   );
// };

// export default SpeechToText;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import AudioAdjusters from './AudioAdjusters';
// import VoiceMenu from './VoiceMenu';
// import { useSpeechSynthesis } from 'react-speech-kit';

// const SpeechToText = ({ onFinalTranscription }) => {
//   const [selectedVoice, setSelectedVoice] = useState(null);
//   const [audioSettings, setAudioSettings] = useState({ volume: 1.0, rate: 1.0, pitch: 1.0 });
//   const [autoMuteMic, setAutoMuteMic] = useState(false);
//   const [lastFinalTranscription, setLastFinalTranscription] = useState('');
//   const { transcript, resetTranscript, finalTranscript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();
//   const { voices, supported, speak } = useSpeechSynthesis();

//   const toggleListening = () => {
//     if (listening) {
//       SpeechRecognition.stopListening();
//     } else {
//       SpeechRecognition.startListening({ continuous: true });
//     }
//   };

//   useEffect(() => {
//     if (voices.length && !selectedVoice) {
//       setSelectedVoice('Google US English');
//     }
//   }, [voices, selectedVoice]);

//   useEffect(() => {
//     if (!browserSupportsSpeechRecognition) {
//       return;
//     }

//     if (finalTranscript !== lastFinalTranscription) {
//       setLastFinalTranscription(finalTranscript);
//       if (supported) {
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
//         speak(utterance);

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
//   }, [finalTranscript, lastFinalTranscription, browserSupportsSpeechRecognition, resetTranscript, selectedVoice, audioSettings, supported, voices, autoMuteMic, onFinalTranscription, speak]);

//   if (!browserSupportsSpeechRecognition) {
//     return null;
//   }

//   return (
//     <div>
//       <p>{transcript}</p>
//       <AudioAdjusters audioSettings={audioSettings} setAudioSettings={setAudioSettings} />
//       <VoiceMenu voices={voices} selectedVoice={selectedVoice} setSelectedVoice={setSelectedVoice} />
//       <button onClick={toggleListening}>{listening ? 'Stop' : 'Start'}</button>
//       <input type='checkbox' checked={autoMuteMic} onChange={() => setAutoMuteMic(!autoMuteMic)} /> Auto Mute Mic
//     </div>
//   );
// };

// export default SpeechToText;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import AudioAdjusters from './AudioAdjusters';
// import VoiceMenu from './VoiceMenu';
// import { useSpeechSynthesis } from 'react-speech-kit';

// const SpeechToText = ({ onFinalTranscription }) => {
//   const [selectedVoice, setSelectedVoice] = useState(null);
//   const [audioSettings, setAudioSettings] = useState({ volume: 1.0, rate: 1.0, pitch: 1.0 });
//   const [autoMuteMic, setAutoMuteMic] = useState(false);
//   const [lastFinalTranscription, setLastFinalTranscription] = useState('');
//   const { transcript, resetTranscript, finalTranscript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();
//   const { voices, supported, speak } = useSpeechSynthesis();

//   const toggleListening = () => {
//     if (listening) {
//       SpeechRecognition.stopListening();
//     } else {
//       const options = { continuous: true, autoMuteMic: autoMuteMic }; // Pass the autoMuteMic option to startListening
//       SpeechRecognition.startListening(options);
//     }
//   };

//   useEffect(() => {
//     if (voices.length && !selectedVoice) {
//       setSelectedVoice('Google US English');
//     }
//   }, [voices, selectedVoice]);

//   useEffect(() => {
//     if (!browserSupportsSpeechRecognition) {
//       return;
//     }

//     if (finalTranscript !== lastFinalTranscription) {
//       setLastFinalTranscription(finalTranscript);
//       if (supported) {
//         const utterance = new SpeechSynthesisUtterance(finalTranscript);
//         resetTranscript();
//         utterance.onstart = () => {
//           if (autoMuteMic) {
//             SpeechRecognition.stopListening();
//           }
//         };
//         utterance.onend = () => {
//           if (autoMuteMic) {
//             const options = { continuous: true, autoMuteMic: autoMuteMic }; // Pass the autoMuteMic option to startListening
//             SpeechRecognition.startListening(options);
//           }
//         };
//         utterance.voice = voices.find((voice) => voice.name === selectedVoice);
//         utterance.volume = audioSettings.volume;
//         utterance.rate = audioSettings.rate;
//         utterance.pitch = audioSettings.pitch;
//         speak(utterance);

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
//   }, [finalTranscript, lastFinalTranscription, browserSupportsSpeechRecognition, resetTranscript, selectedVoice, audioSettings, supported, voices, autoMuteMic, onFinalTranscription, speak]);

//   if (!browserSupportsSpeechRecognition) {
//     return null;
//   }

//   return (
//     <div>
//       <p>{transcript}</p>
//       <AudioAdjusters audioSettings={audioSettings} setAudioSettings={setAudioSettings} />
//       <VoiceMenu voices={voices} selectedVoice={selectedVoice} setSelectedVoice={setSelectedVoice} />
//       <button onClick={toggleListening}>{listening ? 'Stop' : 'Start'}</button>
//       <label>
//         <input type='checkbox' checked={autoMuteMic} onChange={() => setAutoMuteMic(!autoMuteMic)} />
//         Auto Mute Mic
//       </label>
//     </div>
//   );
// };

// export default SpeechToText;


import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import AudioAdjusters from './AudioAdjusters';
import VoiceMenu from './VoiceMenu';
import { useSpeechSynthesis } from 'react-speech-kit';

const SpeechToText = ({ onFinalTranscription }) => {
  const [selectedVoice, setSelectedVoice] = useState('Google US English');
  const [audioSettings, setAudioSettings] = useState({ volume: 1.0, rate: 1.0, pitch: 1.0 });
  const [autoMuteMic, setAutoMuteMic] = useState(false);
  const [lastFinalTranscription, setLastFinalTranscription] = useState('');
  const { transcript, resetTranscript, finalTranscript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const { voices, supported } = useSpeechSynthesis();

  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      return;
    }

    if (finalTranscript !== lastFinalTranscription) {
      setLastFinalTranscription(finalTranscript);
      if (supported) {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(finalTranscript);
        resetTranscript();
        utterance.onstart = () => {
          if (autoMuteMic) {
            SpeechRecognition.stopListening();
          }
        };
        utterance.onend = () => {
          if (autoMuteMic) {
            SpeechRecognition.startListening({ continuous: true });
          }
        };
        utterance.voice = voices.find(voice => voice.name === selectedVoice);
        utterance.volume = audioSettings.volume;
        utterance.rate = audioSettings.rate;
        utterance.pitch = audioSettings.pitch;
        synth.speak(utterance);

        if (finalTranscript.trim() !== '') {
          const entry = {
            text: finalTranscript.trim(),
            audioSettings: audioSettings,
            selectedVoice: selectedVoice,
            id: Math.random().toString(36).substring(7),
          };
          onFinalTranscription(entry);
        }
      }
    }
  }, [finalTranscript, lastFinalTranscription, browserSupportsSpeechRecognition, resetTranscript, selectedVoice, audioSettings, supported, voices, autoMuteMic, onFinalTranscription]);

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div>
      <p>{transcript}</p>
      <AudioAdjusters audioSettings={audioSettings} setAudioSettings={setAudioSettings} />
      <VoiceMenu voices={voices} selectedVoice={selectedVoice} setSelectedVoice={setSelectedVoice} />
      <button onClick={toggleListening}>{listening ? 'Stop' : 'Start'}</button>
      <input type='checkbox' checked={autoMuteMic} onChange={() => setAutoMuteMic(!autoMuteMic)} /> Auto Mute Mic
    </div>
  );
};

export default SpeechToText;



