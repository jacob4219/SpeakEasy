// import React, { useState } from 'react';
// import AudioAdjusters from './AudioAdjusters';

// const FavoritesField = ({ favoriteEntries = [], selectedVoice, audioSettings }) => {
//   const [expandedEntryIndex, setExpandedEntryIndex] = useState(null);

//   const playEntry = (entry) => {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(entry.text);
//     const voice = synth.getVoices().find((voice) => voice.voiceURI === entry.selectedVoice);
  
//     if (!voice) {
//         console.error('Voice not found:', entry.selectedVoice);
//         return;
//     }
  
//     utterance.voice = voice;
//     utterance.volume = entry.audioSettings.volume;
//     utterance.rate = entry.audioSettings.rate;
//     utterance.pitch = entry.audioSettings.pitch;
  
//     synth.speak(utterance);
//   };
  
//   const toggleDetails = (index) => {
//     if (expandedEntryIndex === index) {
//       setExpandedEntryIndex(null);
//     } else {
//       setExpandedEntryIndex(index);
//     }
//   };

//   return (
//     <div>
//       <h3>Favorites</h3>
//       <ul>
//         {favoriteEntries.map((entry, index) => (
//           <li key={entry.id}>
//             {entry.text}
//             <button onClick={() => playEntry(entry)}>Play</button>
//             <button onClick={() => toggleDetails(index)}>Details</button>
//             {expandedEntryIndex === index && (
//               <div>
//                 <p>Timestamp: {new Date(entry.timestamp).toLocaleString()}</p>
//                 <AudioAdjusters
//                   audioSettings={entry.audioSettings}
//                   setAudioSettings={() => {}}
//                 />
//                 <p>Voice: {entry.selectedVoice}</p>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FavoritesField;

// New Working Code Above //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState } from 'react';
// import AudioAdjusters from './AudioAdjusters';

// const FavoritesField = ({ favoriteEntries = [], selectedVoice, audioSettings, isLocked }) => {

//   const playEntry = (entry) => {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(entry.text);
//     const voice = synth.getVoices().find((voice) => voice.voiceURI === entry.selectedVoice);
  
//     if (!voice) {
//         console.error('Voice not found:', entry.selectedVoice);
//         return;
//     }
  
//     utterance.voice = voice;
//     utterance.volume = entry.audioSettings.volume;
//     utterance.rate = entry.audioSettings.rate;
//     utterance.pitch = entry.audioSettings.pitch;
  
//     synth.speak(utterance);
//   };
  
//   const toggleDetails = (index) => {
//     if (expandedEntryIndex === index) {
//       setExpandedEntryIndex(null);
//     } else {
//       setExpandedEntryIndex(index);
//     }
//   };
  
//   return (
//     <div>
//       <h3>Favorites</h3>
//       <button onClick={() => setIsFavoritesLocked(!isFavoritesLocked)}>
//         {isFavoritesLocked ? 'Unlock' : 'Lock'}
//       </button>
//       <ul>
//         {favoriteEntries.map((entry, index) => (
//           <li key={entry.id}>
//             {entry.text}
//             <button onClick={() => playEntry(entry)}>Play</button>
//             <button onClick={() => toggleDetails(index)}>Details</button>
//             {!isLocked && <button>Edit</button>}
//             {expandedEntryIndex === index && (
//               <div>
//                 <p>Timestamp: {new Date(entry.timestamp).toLocaleString()}</p>
//                 <AudioAdjusters
//                   audioSettings={entry.audioSettings}
//                   setAudioSettings={() => {}}
//                 />
//                 <p>Voice: {entry.selectedVoice}</p>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FavoritesField;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import AudioAdjusters from './AudioAdjusters';

// const FavoritesField = ({
//   favoriteEntries = [],
//   selectedVoice,
//   audioSettings,
//   isLocked,
//   removeFromFavorites,
//   sendToRecent
// }) => {
//   const [expandedEntryIndex, setExpandedEntryIndex] = useState(null);

//   const playEntry = (entry) => {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(entry.text);
//     const voice = synth.getVoices().find((voice) => voice.voiceURI === entry.selectedVoice);
  
//     if (!voice) {
//         console.error('Voice not found:', entry.selectedVoice);
//         return;
//     }
  
//     utterance.voice = voice;
//     utterance.volume = entry.audioSettings.volume;
//     utterance.rate = entry.audioSettings.rate;
//     utterance.pitch = entry.audioSettings.pitch;
  
//     synth.speak(utterance);
//   };
  
//   const toggleDetails = (index) => {
//     if (expandedEntryIndex === index) {
//       setExpandedEntryIndex(null);
//     } else {
//       setExpandedEntryIndex(index);
//     }
//   };

//   const handleSendToRecent = (entry) => {
//     removeFromFavorites(entry.id);
//     sendToRecent(entry);
//   };

//   return (
//     <div>
//       <h3>Favorites</h3>
//       <ul>
//         {favoriteEntries.map((entry, index) => (
//           <li key={entry.id}>
//             {entry.text}
//             <button onClick={() => playEntry(entry)}>Play</button>
//             <button onClick={() => toggleDetails(index)}>Details</button>
//             {!isLocked && (
//               <div>
//                 <button>Edit</button>
//                 <div>
//                   <button onClick={() => handleSendToRecent(entry)}>Send To Recent</button>
//                 </div>
//               </div>
//             )}
//             {expandedEntryIndex === index && (
//               <div>
//                 <p>Timestamp: {new Date(entry.timestamp).toLocaleString()}</p>
//                 <AudioAdjusters
//                   audioSettings={entry.audioSettings}
//                   setAudioSettings={() => {}}
//                 />
//                 <p>Voice: {entry.selectedVoice}</p>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FavoritesField;

// import React, { useState } from 'react';
// import AudioAdjusters from './AudioAdjusters';

// const FavoritesField = ({
//   favoriteEntries = [],
//   selectedVoice,
//   audioSettings,
//   isLocked,
//   setIsFavoritesLocked,
//   removeFromFavorites,
//   editEntry,
//   sendToRecent,
// }) => {
//   const [expandedEntryIndex, setExpandedEntryIndex] = useState(null);
//   const [editingEntryId, setEditingEntryId] = useState(null);
//   const [editedTitle, setEditedTitle] = useState('');
//   const [editedPitch, setEditedPitch] = useState('');
//   const [editedRate, setEditedRate] = useState('');

//   const playEntry = (entry) => {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(entry.text);
//     const voice = synth.getVoices().find((voice) => voice.voiceURI === entry.selectedVoice);

//     if (!voice) {
//         console.error('Voice not found:', entry.selectedVoice);
//         return;
//     }
  
//     utterance.voice = voice;
//     utterance.volume = entry.audioSettings.volume;
//     utterance.rate = entry.audioSettings.rate;
//     utterance.pitch = entry.audioSettings.pitch;
  
//     synth.speak(utterance);
//   };

//   const handleEditClick = (entry) => {
//     setEditingEntryId(entry.id);
//     setEditedTitle(entry.title);
//     setEditedPitch(entry.audioSettings.pitch);
//     setEditedRate(entry.audioSettings.rate);
//   };

//   const handleEditSaveClick = () => {
//     const entry = favoriteEntries.find(entry => entry.id === editingEntryId);
//     editEntry(editingEntryId, {
//       title: editedTitle,
//       audioSettings: {
//         ...entry.audioSettings,
//         pitch: editedPitch,
//         rate: editedRate,
//       }
//     });
//     setEditingEntryId(null);
//   };

//   const toggleDetails = (index) => {
//     if (expandedEntryIndex === index) {
//       setExpandedEntryIndex(null);
//     } else {
//       setExpandedEntryIndex(index);
//     }
//   };

//   const handleDelete = (id) => {
//     removeFromFavorites(id);
//     const entryToSend = favoriteEntries.find(entry => entry.id === id);
//     sendToRecent(entryToSend);
//   };

//   return (
//     <div>
//       <h3>Favorites</h3>
//       <ul>
//         {favoriteEntries.map((entry, index) => (
//           <li key={entry.id}>
//             {entry.text}
//             <button onClick={() => playEntry(entry)}>Play</button>
//             <button onClick={() => handleEditClick(entry)}>Edit</button>
//             <button onClick={handleEditSaveClick}>Save</button>
//             <button onClick={() => toggleDetails(index)}>Details</button>
//             <button onClick={() => handleDelete(entry.id)}>Remove</button>
//             {expandedEntryIndex === index && (
//               <div>
//                 <p>Timestamp: {new Date(entry.timestamp).toLocaleString()}</p>
//                 <AudioAdjusters
//                   audioSettings={entry.audioSettings}
//                   setAudioSettings={() => {}}
//                 />
//                 <p>Voice: {entry.selectedVoice}</p>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FavoritesField;

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState } from 'react';
// import AudioAdjusters from './AudioAdjusters';

// const FavoritesField = ({
//   favoriteEntries = [],
//   selectedVoice,
//   audioSettings,
//   isLocked,
//   setIsFavoritesLocked,
//   removeFromFavorites,
//   removeFromFavoritesAndSendToRecycle,
//   editEntry,
//   sendToRecent,
// }) => {
//   const [expandedEntryIndex, setExpandedEntryIndex] = useState(null);
//   const [editingEntryId, setEditingEntryId] = useState(null);
//   const [editedTitle, setEditedTitle] = useState('');
//   const [editedPitch, setEditedPitch] = useState('');
//   const [editedRate, setEditedRate] = useState('');

//   const playEntry = (entry) => {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(entry.text);
//     const voice = synth.getVoices().find((voice) => voice.voiceURI === entry.selectedVoice);

//     if (!voice) {
//         console.error('Voice not found:', entry.selectedVoice);
//         return;
//     }
  
//     utterance.voice = voice;
//     utterance.volume = entry.audioSettings.volume;
//     utterance.rate = entry.audioSettings.rate;
//     utterance.pitch = entry.audioSettings.pitch;
  
//     synth.speak(utterance);
//   };

//   const handleEditClick = (entry) => {
//     setEditingEntryId(entry.id);
//     setEditedTitle(entry.title);
//     setEditedPitch(entry.audioSettings.pitch);
//     setEditedRate(entry.audioSettings.rate);
//   };

//   const handleEditSaveClick = () => {
//     const entry = favoriteEntries.find(entry => entry.id === editingEntryId);
//     editEntry(editingEntryId, {
//       title: editedTitle,
//       audioSettings: {
//         ...entry.audioSettings,
//         pitch: editedPitch,
//         rate: editedRate,
//       }
//     });
//     setEditingEntryId(null);
//   };

//   const toggleDetails = (index) => {
//     if (expandedEntryIndex === index) {
//       setExpandedEntryIndex(null);
//     } else {
//       setExpandedEntryIndex(index);
//     }
//   };

//   const handleSendToRecent = (id) => {
//     sendToRecent(id);
//   };
  
//   const handleDelete = (id) => {
//     removeFromFavoritesAndSendToRecycle(id);
//   };
  
//   return (
//     <div>
//       <h3>Favorites</h3>
//       <ul>
//         {favoriteEntries.map((entry, index) => (
//           <li key={entry.id}>
//             {entry.text}
//             <button onClick={() => playEntry(entry)}>Play</button>
//             <button onClick={() => handleEditClick(entry)}>Edit</button>
//             <button onClick={handleEditSaveClick}>Save</button>
//             <button onClick={() => handleSendToRecent(entry.id)}>Send to Recent</button>
//             <button onClick={() => handleDelete(entry.id)}>Remove</button>
//             <button onClick={() => toggleDetails(index)}>Details</button>
//             {expandedEntryIndex === index && (
//               <div>
//                 <p>Timestamp: {new Date(entry.timestamp).toLocaleString()}</p>
//                 <AudioAdjusters
//                   audioSettings={entry.audioSettings}
//                   setAudioSettings={() => {}}
//                 />
//                 <p>Voice: {entry.selectedVoice}</p>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FavoritesField;

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import Entry from './Entry';

const FavoriteField = ({ entries, setEntries }) => {
  return (
    <div>
      <h2>Favorite</h2>
      {entries.map(entry => 
        <Entry key={entry.id} entry={entry} setEntries={setEntries} field="favorite" />
      )}
    </div>
  );
};

export default FavoriteField;
