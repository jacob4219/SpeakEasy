// import React, { createContext, useState, useContext } from 'react';

// const AudioSettingsContext = createContext();

// export const AudioSettingsProvider = ({ children }) => {
//   const [audioSettings, setAudioSettings] = useState({ volume: 1.0, rate: 1.0, pitch: 1.0 });
//   const [autoMuteMic, setAutoMuteMic] = useState(false);

//   return (
//     <AudioSettingsContext.Provider value={{ audioSettings, setAudioSettings, autoMuteMic, setAutoMuteMic }}>
//       {children}
//     </AudioSettingsContext.Provider>
//   );
// };

// export const useAudioSettings = () => useContext(AudioSettingsContext);

import React, { createContext, useState, useContext } from 'react';

export const AudioSettingsContext = createContext();

export const AudioSettingsProvider = ({ children }) => {
  const [audioSettings, setAudioSettings] = useState({ volume: 1.0, rate: 1.0, pitch: 1.0 });
  const [autoMuteMic, setAutoMuteMic] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState('Google US English'); // add selectedVoice state

  return (
    <AudioSettingsContext.Provider value={{ audioSettings, setAudioSettings, autoMuteMic, setAutoMuteMic, selectedVoice, setSelectedVoice }}>
      {children}
    </AudioSettingsContext.Provider>
  );
};

export const useAudioSettings = () => useContext(AudioSettingsContext);