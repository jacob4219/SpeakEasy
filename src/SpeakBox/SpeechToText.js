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

import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import AudioAdjusters from './AudioAdjusters';
import VoiceMenu from './VoiceMenu';
import { useSpeechSynthesis } from 'react-speech-kit';

const SpeechToText = ({ onFinalTranscription }) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const [finalTranscript, setFinalTranscript] = useState('');
  const [lastFinalTranscription, setLastFinalTranscription] = useState('');
  const [audioSettings, setAudioSettings] = useState({
    volume: 1,
    rate: 1,
    pitch: 1,
  });
  const [selectedVoice, setSelectedVoice] = useState('Google US English');
  const { supported, voices } = useSpeechSynthesis();
  const [autoMuteMic, setAutoMuteMic] = useState(false);

  useEffect(() => {
    let listeningInterval = null;
    if (listening) {
      SpeechRecognition.startListening({ continuous: true });
      listeningInterval = setInterval(() => {
        setFinalTranscript(transcript);
      }, 525);
    } else {
      clearInterval(listeningInterval);
      SpeechRecognition.stopListening();
    }
    return () => {
      clearInterval(listeningInterval);
    };
  }, [listening, transcript]);

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
// Call the onFinalTranscription prop with the new final transcript if not empty
if (finalTranscript.trim() !== '') {
  onFinalTranscription({
    text: finalTranscript.trim(),
    audioSettings: audioSettings,
    selectedVoice: selectedVoice,
  });
}

      }
    }
  }, [finalTranscript, lastFinalTranscription, browserSupportsSpeechRecognition, resetTranscript, selectedVoice, audioSettings, supported, voices, autoMuteMic, onFinalTranscription]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <AudioAdjusters audioSettings={audioSettings} setAudioSettings={setAudioSettings} />
      <VoiceMenu selectedVoice={selectedVoice} setSelectedVoice={setSelectedVoice} voices={voices} />
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={() => SpeechRecognition.startListening({ continuous: true })}>Start</button>
      <button onClick={() => SpeechRecognition.stopListening()}>Stop</button>
<label>
  <input
    type="checkbox"
    checked={autoMuteMic}
    onChange={() => setAutoMuteMic(!autoMuteMic)}
  />
  Auto Mute Mic
</label>
<p>{finalTranscript}</p>
</div>
);
};

export default SpeechToText;

// NEWEST!!!!! Working Code Above //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

