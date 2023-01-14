import React, { useState , useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import TextToSpeech from './text-to-speech';

const SpeechToText = () => {
  const {
    // transcript,
    // interimTranscript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const [finalTranscript, setFinalTranscript] = useState('');
  const [voice, setVoice] = useState(null);
  const [audioSettings, setAudioSettings] = useState({pitch: 1, rate: 1, volume: 1});

  useEffect(() => {
    SpeechRecognition.onFinalTranscript = (finalTranscript) => {
      setFinalTranscript(finalTranscript);
    };
  }, []);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={() => SpeechRecognition.startListening({ continuous: true })}>Dictate</button>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>

      <TextToSpeech text={finalTranscript[0]} setText={finalTranscript[1]} voice={voice} audioSettings={audioSettings}/>

    </div>
  );
};

export default SpeechToText;


































// import React, { useState , useEffect } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


// const SpeechToText = () => {
//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition
//   } = useSpeechRecognition();
//   const startListening = () => SpeechRecognition.startListening({ continuous: true });

//   if (!browserSupportsSpeechRecognition) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }

//   return (
//     <div>
//       <p>Microphone: {listening ? 'on' : 'off'}</p>
//       <button
//         onTouchStart={startListening}
//         onMouseDown={startListening}
//         onTouchEnd={SpeechRecognition.stopListening}
//         onMouseUp={SpeechRecognition.stopListening}
//       >Hold to talk</button>
//       {/* <button onClick={SpeechRecognition.startListening({ continuous: true })}>Dictate</button> */}
//       <button onClick={SpeechRecognition.startListening}>Start</button>
//       <button onClick={SpeechRecognition.stopListening}>Stop</button>
//       <button onClick={resetTranscript}>Reset</button>
      


//       <p>{transcript}</p>
//     </div>
//   );
// };

// export default SpeechToText;