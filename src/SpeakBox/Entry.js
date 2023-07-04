
// const Entry = ({ entry, setEntries, field }) => {
//   const deleteEntry = () => {
//     setEntries(prevEntries => ({
//       ...prevEntries,
//       recycle: [...prevEntries.recycle, entry], // Add the entry to the Recycle field
//       [field]: prevEntries[field].filter(e => e.id !== entry.id) // Remove the entry from the current field
//     }));
//   };

//   const moveEntry = (targetField) => {
//     setEntries(prevEntries => ({
//       ...prevEntries,
//       [targetField]: [...prevEntries[targetField], entry], // Add the entry to the target field
//       [field]: prevEntries[field].filter(e => e.id !== entry.id) // Remove the entry from the current field
//     }));
//   };

//   return (
//     <div className='entry'>
//       <h3>{entry.text}</h3>
//       {field !== 'recycle' && <button onClick={deleteEntry}>Delete</button>}
//       {field !== 'favorite' && <button onClick={() => moveEntry('favorite')}>Favorite</button>}
//       {field !== 'recycle' && <button onClick={() => moveEntry('recycle')}>Recycle</button>}
//       {field !== 'userGenerated' && <button onClick={() => moveEntry('userGenerated')}>User</button>}
//     </div>
//   );
// };

// export default Entry;

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////Working Code Above^^^///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { useSpeechSynthesis } from 'react-speech-kit';
// const Entry = ({ entry, setEntries, field }) => {
//   const { speak } = useSpeechSynthesis();

//   const deleteEntry = () => {
//     setEntries(prevEntries => ({
//       ...prevEntries,
//       recycle: [...prevEntries.recycle, entry], // Add the entry to the Recycle field
//       [field]: prevEntries[field].filter(e => e.id !== entry.id) // Remove the entry from the current field
//     }));
//   };

//   const moveEntry = (targetField) => {
//     setEntries(prevEntries => ({
//       ...prevEntries,
//       [targetField]: [...prevEntries[targetField], entry], // Add the entry to the target field
//       [field]: prevEntries[field].filter(e => e.id !== entry.id) // Remove the entry from the current field
//     }));
//   };

//   const playEntry = () => {
//     const { text, voice, audioSettings } = entry;
//     speak({ text, voice, ...audioSettings });
//   };

//   return (
//     <div className='entry'>
//       <h3>{entry.text}</h3>
//       <button onClick={playEntry}>Play</button>
//       {field !== 'recycle' && <button onClick={deleteEntry}>Delete</button>}
//       {field !== 'favorite' && <button onClick={() => moveEntry('favorite')}>Favorite</button>}
//       {field !== 'recycle' && <button onClick={() => moveEntry('recycle')}>Recycle</button>}
//       {field !== 'userGenerated' && <button onClick={() => moveEntry('userGenerated')}>User</button>}
//     </div>
//   );
// };

// export default Entry;

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////Working Code Above^^^///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////


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


////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////Working Code Above^^^///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const Entry = ({ entry, setEntries, field }) => {
  const { speak, voices } = useSpeechSynthesis();

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
    speak({ text, voice, ...audioSettings });
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






