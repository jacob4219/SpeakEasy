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
//     voices,
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

import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import AudioAdjusters from './AudioAdjusters';
import VoiceMenu from './VoiceMenu';
import { useAudioSettings } from './AudioSettingsContext'; 

const SpeechToText = ({ onFinalTranscription }) => {
  const {
    audioSettings,
    setAudioSettings,
    autoMuteMic,
    setAutoMuteMic,
    selectedVoice,
    setSelectedVoice,
    toggleListening,
    voices,
  } = useAudioSettings();

  const [inputText, setInputText] = useState('');
  const [lastFinalTranscription, setLastFinalTranscription] = useState('');
  const { transcript, resetTranscript, finalTranscript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();

  const handlePlayText = () => {
    if (autoMuteMic) {
      SpeechRecognition.stopListening();
    }

    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(inputText);
    utterance.voice = voices.find(voice => voice.name === selectedVoice);
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
    if (e.key === 'Enter') {
      handlePlayText();
      onFinalTranscription({
        text: inputText.trim(),
        audioSettings: audioSettings,
        selectedVoice: selectedVoice,
        id: Math.random().toString(36).substring(7),
      });
      setInputText('');
    }
  };

  const handleUserGeneratedEntry = () => {
    onFinalTranscription({
      text: inputText.trim(),
      audioSettings: audioSettings,
      selectedVoice: selectedVoice,
      id: Math.random().toString(36).substring(7),
      field: 'userGenerated',
    });
    setInputText('');
  };

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      return;
    }

    if (finalTranscript !== lastFinalTranscription) {
      setLastFinalTranscription(finalTranscript);
      if (window.speechSynthesis) {
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
  }, [finalTranscript, lastFinalTranscription, browserSupportsSpeechRecognition, resetTranscript, selectedVoice, audioSettings, autoMuteMic, voices, setSelectedVoice, onFinalTranscription]);

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div>
      <p>{transcript}</p>
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyPress={handleEnter}/>
      <button onClick={handlePlayText}>Play</button>
      <button onClick={handleUserGeneratedEntry}>+</button>
      <AudioAdjusters audioSettings={audioSettings} setAudioSettings={setAudioSettings} />
      <VoiceMenu />
      <button onClick={toggleListening}>{listening ? 'Stop' : 'Start'}</button>
      <button onClick={() => setAutoMuteMic(!autoMuteMic)}>
        {autoMuteMic ? 'Auto Mute Mic: ON' : 'Auto Mute Mic: OFF'}
      </button>
    </div>
  );
};

export default SpeechToText;