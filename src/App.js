import React from 'react';
// import Speak from './SpeakBox/speak';
import TextToSpeech from './SpeakBox/text-to-speech';
// import AudioAdjusters from './SpeakBox/audio-adjusters';
import SpeechToText from './SpeakBox/speech-to-text';
// const App = () => {
//   const [selectedVoice, setSelectedVoice] = useState(null);

//   return (
//     <div>
//       {/* <Speak selectedVoice={selectedVoice} setSelectedVoice={setSelectedVoice} /> */}
//       <TextInputField selectedVoice={selectedVoice} />
//     </div>
//   );
// };

// export default App;


const App = () => {
  return (
      <div>
          {/* <SpeakEasy /> */}
          {/* <AudioAdjusters /> */}
          <SpeechToText />
          <TextToSpeech />
          {/* <SpeechOutput />
          <VoiceSelect />
          <RatePitchVolumeControl />
          <MuteButton />
          <Recent />
          <Favorites /> */}
      </div>
  );
}

export default App;