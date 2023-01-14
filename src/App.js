import React, { useState } from 'react';
// import Speak from './SpeakBox/speak';
import TextInput from './SpeakBox/text-input-field';

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
          <TextInput />
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