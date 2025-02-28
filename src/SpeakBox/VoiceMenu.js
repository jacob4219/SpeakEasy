// import React from 'react';

// const VoiceMenu = ({ voices, selectedVoice, setSelectedVoice }) => {
//   const handleChange = (event) => {
//     setSelectedVoice(event.target.value);
//   };

//   return (
//     <div>
//       <label htmlFor="voice-select">Select Voice:</label>
//       <select id="voice-select" value={selectedVoice || ''} onChange={handleChange}>
//         {voices.map((voice) => (
//           <option key={voice.name} value={voice.name}>
//             {voice.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default VoiceMenu;

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import { useAudioSettings } from './AudioSettingsContext';

// const VoiceMenu = () => {
//   const { voices, selectedVoice, setSelectedVoice } = useAudioSettings();

//   const handleChange = (event) => {
//     setSelectedVoice(event.target.value);
//   };

//   return (
//     <div>
//       <label htmlFor="voice-select">Select Voice:</label>
//       <select id="voice-select" value={selectedVoice || ''} onChange={handleChange}>
//         {voices.map((voice) => (
//           <option key={voice.name} value={voice.name}>
//             {voice.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default VoiceMenu;


// import React from 'react';
// import { useAudioSettings } from './AudioSettingsContext';
// import { generateUniqueID } from './utils/idGenerator'; // Ensure correct import path

// const VoiceMenu = () => {
//   const { voices, selectedVoice, setSelectedVoice } = useAudioSettings();

//   const handleChange = (event) => {
//     setSelectedVoice(event.target.value);
//   };

//   return (
//     <div>
//       <label htmlFor="voice-select">Select Voice:</label>
//       <select id="voice-select" value={selectedVoice || ''} onChange={handleChange}>
//         {voices.map((voice, index) => (
//           <option key={`${voice.name}-${index}-${generateUniqueID()}`} value={voice.name}>
//             {voice.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default VoiceMenu;

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { useAudioSettings } from './AudioSettingsContext';
import { generateUniqueID } from './utils/idGenerator'; // Ensure correct import path

const VoiceMenu = () => {
  const { voices, selectedVoice, setSelectedVoice } = useAudioSettings();

  const handleChange = (event) => {
    setSelectedVoice(event.target.value);
  };

  return (
    <div>
      <label htmlFor="voice-select">Select Voice:</label>
      <select id="voice-select" value={selectedVoice || ''} onChange={handleChange}>
        {voices.map((voice, index) => (
          <option key={`${voice.name}-${index}-${generateUniqueID()}`} value={voice.name}>
            {voice.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default VoiceMenu;