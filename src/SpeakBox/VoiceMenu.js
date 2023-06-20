// import React from 'react';
// import { useSpeechSynthesis } from 'react-speech-kit';

// function VoiceMenu({ selectedVoice, setSelectedVoice, voices }) {
//   const { supported } = useSpeechSynthesis();

//   if (!supported) {
//     return <div>Sorry, your browser does not support speech synthesis</div>;
//   }

//   return (
//     <div>
//       <select
//         value={selectedVoice}
//         onChange={(e) => setSelectedVoice(e.target.value)}
//       >
//         {voices.map((voice) => (
//           <option key={voice.name} value={voice.name}>
//             {voice.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default VoiceMenu;

// Original working code above, new AI code below vvv

// import React from 'react';
// import { useSpeechSynthesis } from 'react-speech-kit';

// function VoiceMenu({ selectedVoice, setSelectedVoice, voices }) {
//   const { supported } = useSpeechSynthesis();

//   if (!supported) {
//     return <div>Sorry, your browser does not support speech synthesis</div>;
//   }

//   return (
//     <div>
//       <select
//         value={selectedVoice}
//         onChange={(e) => setSelectedVoice(e.target.value)}
//       >
//         {voices.map((voice) => (
//           <option key={voice.name} value={voice.name}>
//             {voice.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default VoiceMenu;


import React from 'react';

function VoiceMenu({ selectedVoice, setSelectedVoice }) {
  const voices = window.speechSynthesis.getVoices();

  return (
    <div>
      <select
        value={selectedVoice}
        onChange={(e) => setSelectedVoice(e.target.value)}
      >
        {voices.map((voice) => (
          <option key={voice.name} value={voice.name}>
            {voice.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default VoiceMenu;
