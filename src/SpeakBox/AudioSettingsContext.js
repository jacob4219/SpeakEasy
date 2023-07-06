// import React, { createContext, useState, useContext } from 'react';

// // Create a new context
// export const AudioSettingsContext = createContext();

// // Create a custom hook that allows any component to access the audio settings
// export const useAudioSettings = () => {
//     return useContext(AudioSettingsContext);
//   };
  
// // Create a provider component that allows any component to modify the audio settings
// export const AudioSettingsProvider = ({ children }) => {
//     const [audioSettings, setAudioSettings] = useState({ volume: 1.0, rate: 1.0, pitch: 1.0 });
  
//     const value = {
//       audioSettings,
//       setAudioSettings,
//     };
  
//     return (
//       <AudioSettingsContext.Provider value={value}>
//         {children}
//       </AudioSettingsContext.Provider>
//     );
//   };
  

import React, { createContext, useState, useContext } from 'react';

const AudioSettingsContext = createContext();

export const AudioSettingsProvider = ({ children }) => {
  const [audioSettings, setAudioSettings] = useState({ volume: 1.0, rate: 1.0, pitch: 1.0 });
  const [autoMuteMic, setAutoMuteMic] = useState(false);

  return (
    <AudioSettingsContext.Provider value={{ audioSettings, setAudioSettings, autoMuteMic, setAutoMuteMic }}>
      {children}
    </AudioSettingsContext.Provider>
  );
};

export const useAudioSettings = () => useContext(AudioSettingsContext);