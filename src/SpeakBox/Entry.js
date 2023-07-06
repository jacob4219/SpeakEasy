// import React from 'react';
// import { useSpeechSynthesis } from 'react-speech-kit';

// const Entry = ({ entry, setEntries, field }) => {
//   const { speak, voices } = useSpeechSynthesis();

//   const deleteEntry = () => {
//     setEntries(prevEntries => ({
//       ...prevEntries,
//       recycle: [...prevEntries.recycle, entry],
//       [field]: prevEntries[field].filter(e => e.id !== entry.id)
//     }));
//   };

//   const moveEntry = (targetField) => {
//     setEntries(prevEntries => ({
//       ...prevEntries,
//       [targetField]: [...prevEntries[targetField], entry],
//       [field]: prevEntries[field].filter(e => e.id !== entry.id)
//     }));
//   };

//   const playEntry = () => {
//     const { text, audioSettings, selectedVoice } = entry;
//     const voice = voices.find((v) => v.name === selectedVoice);
//     speak({ text, voice, ...audioSettings });
//   };

//   return (
//     <div className='entry'>
//       <h3>{entry.text}</h3>
//       {field === 'recycle' && <button onClick={deleteEntry}>Delete</button>}
//       {field !== 'favorite' && <button onClick={() => moveEntry('favorite')}>Favorite</button>}
//       {field !== 'recycle' && <button onClick={() => moveEntry('recycle')}>Recycle</button>}
//       {field !== 'userGenerated' && <button onClick={() => moveEntry('userGenerated')}>User</button>}
//       <button onClick={playEntry}>Play</button>
//     </div>
//   );
// };

// export default Entry;

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// import React from 'react';
// import { useSpeechSynthesis } from 'react-speech-kit';
// import { useAudioSettings } from './AudioSettingsContext'; // import the custom hook

// const Entry = ({ entry, setEntries, field }) => {
//   const { audioSettings } = useAudioSettings(); // use the custom hook
//   const { speak, voices } = useSpeechSynthesis();

//   const deleteEntry = () => {
//     setEntries(prevEntries => ({
//       ...prevEntries,
//       recycle: [...prevEntries.recycle, entry],
//       [field]: prevEntries[field].filter(e => e.id !== entry.id)
//     }));
//   };

//   const moveEntry = (targetField) => {
//     setEntries(prevEntries => ({
//       ...prevEntries,
//       [targetField]: [...prevEntries[targetField], entry],
//       [field]: prevEntries[field].filter(e => e.id !== entry.id)
//     }));
//   };

//   const playEntry = () => {
//     const { text, selectedVoice } = entry;
//     const voice = voices.find((v) => v.name === selectedVoice);
//     speak({ text, voice, ...audioSettings });
//   };

//   return (
//     <div className='entry'>
//       <h3>{entry.text}</h3>
//       {field === 'recycle' && <button onClick={deleteEntry}>Delete</button>}
//       {field !== 'favorite' && <button onClick={() => moveEntry('favorite')}>Favorite</button>}
//       {field !== 'recycle' && <button onClick={() => moveEntry('recycle')}>Recycle</button>}
//       {field !== 'userGenerated' && <button onClick={() => moveEntry('userGenerated')}>User</button>}
//       <button onClick={playEntry}>Play</button>
//     </div>
//   );
// };

// export default Entry;

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// import React from 'react';
// import { useSpeechSynthesis } from 'react-speech-kit';
// import { useAudioSettings } from './AudioSettingsContext'; // import the custom hook
// import SpeechRecognition from 'react-speech-recognition'; // import SpeechRecognition

// const Entry = ({ entry, setEntries, field }) => {
//   const { speak, voices } = useSpeechSynthesis();
//   const { audioSettings, autoMuteMic } = useAudioSettings(); // use the custom hook

//   const deleteEntry = () => {
//     setEntries(prevEntries => ({
//       ...prevEntries,
//       recycle: [...prevEntries.recycle, entry],
//       [field]: prevEntries[field].filter(e => e.id !== entry.id)
//     }));
//   };

//   const moveEntry = (targetField) => {
//     setEntries(prevEntries => ({
//       ...prevEntries,
//       [targetField]: [...prevEntries[targetField], entry],
//       [field]: prevEntries[field].filter(e => e.id !== entry.id)
//     }));
//   };

//   const playEntry = () => {
//     const { text, audioSettings, selectedVoice } = entry;
//     const voice = voices.find((v) => v.name === selectedVoice);
//     if (autoMuteMic) {
//       SpeechRecognition.stopListening();
//     }
//     speak({ text, voice, ...audioSettings });
//     if (autoMuteMic) {
//       SpeechRecognition.startListening({ continuous: true });
//     }
//   };

//   return (
//     <div className='entry'>
//       <h3>{entry.text}</h3>
//       {field === 'recycle' && <button onClick={deleteEntry}>Delete</button>}
//       {field !== 'favorite' && <button onClick={() => moveEntry('favorite')}>Favorite</button>}
//       {field !== 'recycle' && <button onClick={() => moveEntry('recycle')}>Recycle</button>}
//       {field !== 'userGenerated' && <button onClick={() => moveEntry('userGenerated')}>User</button>}
//       <button onClick={playEntry}>Play</button>
//     </div>
//   );
// };

// export default Entry;

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

import React from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { useAudioSettings } from './AudioSettingsContext'; // import the custom hook
import SpeechRecognition from 'react-speech-recognition'; // import SpeechRecognition

const Entry = ({ entry, setEntries, field }) => {
  const { speak, voices } = useSpeechSynthesis();
  const { audioSettings, autoMuteMic } = useAudioSettings(); // use the custom hook

  const deleteEntry = () => {
    setEntries(prevEntries => ({
      ...prevEntries,
      recycle: [...prevEntries.recycle, entry],
      [field]: prevEntries[field].filter(e => e.id !== entry.id)
    }));
  };

  const moveEntry = (targetField) => {
    setEntries(prevEntries => ({
      ...prevEntries,
      [targetField]: [...prevEntries[targetField], entry],
      [field]: prevEntries[field].filter(e => e.id !== entry.id)
    }));
  };

  const playEntry = () => {
    const { text, audioSettings, selectedVoice } = entry;
    const voice = voices.find((v) => v.name === selectedVoice);
    if (autoMuteMic) {
      SpeechRecognition.stopListening();
    }
    speak({ 
      text, 
      voice, 
      volume: audioSettings.volume, 
      rate: audioSettings.rate, 
      pitch: audioSettings.pitch,
      onend: () => {
        if (autoMuteMic) {
          SpeechRecognition.startListening({ continuous: true });
        }
      },
    });
  };

  return (
    <div className='entry'>
      <h3>{entry.text}</h3>
      {field === 'recycle' && <button onClick={deleteEntry}>Delete</button>}
      {field !== 'favorite' && <button onClick={() => moveEntry('favorite')}>Favorite</button>}
      {field !== 'recycle' && <button onClick={() => moveEntry('recycle')}>Recycle</button>}
      {field !== 'userGenerated' && <button onClick={() => moveEntry('userGenerated')}>User</button>}
      <button onClick={playEntry}>Play</button>
    </div>
  );
};

export default Entry;