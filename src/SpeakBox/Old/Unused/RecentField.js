// import React from 'react';

// const RecentField = ({ recentEntries = [] }) => {
//   return (
//     <div>
//       <h3>Recent Entries</h3>
//       <ul>
//         {recentEntries.map((entry, index) => (
//           <li key={index}>{entry}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RecentField;

// Above is Original Working Code //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState } from 'react';

// const RecentField = ({ recentEntries = [], selectedVoice, audioSettings }) => {

//     const [expandedEntryIndex, setExpandedEntryIndex] = useState(null);

//   const playEntry = (entry) => {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(entry);
//     utterance.voice = synth.getVoices().find(voice => voice.name === selectedVoice);
//     utterance.volume = audioSettings.volume;
//     utterance.rate = audioSettings.rate;
//     utterance.pitch = audioSettings.pitch;
//     synth.speak(utterance);
//   };

//   const toggleDetails = (index) => {
//     if (expandedEntryIndex === index) {
//       setExpandedEntryIndex(null);
//     }   else {
//         setExpandedEntryIndex(index);
//     }
//     };

//   return (
//     <div>
//       <h3>Recent Entries</h3>
//       <ul>
//         {recentEntries.map((entry, index) => (
//           <li key={index}>
//             {entry}
//             <button onClick={() => playEntry(entry)}>Play</button>
//             <button onClick={() => toggleDetails(index)}>Details</button>
//             {expandedEntryIndex === index && (
//                 <div>
//                     <p>Timestamp: {new Date(entry.timestamp).toLocaleString()}</p>
//                     <p>Rate: {entry.rate}</p>
//                     <p>Pitch: {entry.pitch}</p>
//                 </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RecentField;

// Above is working code 
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// // import VoiceMenu from './VoiceMenu';

// const RecentField = ({ recentEntries = [], selectedVoice, audioSettings }) => {
//   const [expandedEntryIndex, setExpandedEntryIndex] = useState(null);

//   const playEntry = (entry) => {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(entry.text);
//     const voice = synth.getVoices().find((voice) => voice.name === entry.voice);
//     console.log(entry.voice);
//     console.log(voice);
    
//     if (!voice) {
//         console.error('Voice not found:', entry.voice);
//         return;
//       }
//     // use voiceURI property for Chrome
//     utterance.voiceURI = voice.voiceURI;
    
//     // use lang property for other browsers
//     utterance.lang = voice.lang;
    
//     utterance.volume = audioSettings.volume;
//     utterance.rate = entry.rate;
//     utterance.pitch = entry.pitch;
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
//       <h3>Recent Entries</h3>
//       <ul>
//         {recentEntries.map((entry, index) => (
//           <li key={index}>
//             {entry.text}
//             <button onClick={() => playEntry(entry)}>Play</button>
//             <button onClick={() => toggleDetails(index)}>Details</button>
//             {expandedEntryIndex === index && (
//   <div>
//     <p>Timestamp: {new Date(entry.timestamp).toLocaleString()}</p>
//     <p>Rate: {entry.rate}</p>
//     <p>Pitch: {entry.pitch}</p>
//     <p>Voice: {entry.voice}</p>
//   </div>
// )}

//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RecentField;

/// working code above //
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////



// import React, { useState } from 'react';
// import AudioAdjusters from './AudioAdjusters';

// const RecentField = ({ recentEntries = [], selectedVoice, setSelectedVoice, audioSettings }) => {
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
//       }
//       };
      
      
//       return (
//       <div>
//       <h3>Recent Entries</h3>
//       <ul>
//       {recentEntries.map((entry, index) => (
//       <li key={index}>
//       {entry.text}
//       <button onClick={() => playEntry(entry)}>Play</button>
//       <button onClick={() => toggleDetails(index)}>Details</button>
//       {expandedEntryIndex === index && (
//       <div>
//       <p>Timestamp: {new Date(entry.timestamp).toLocaleString()}</p>
//       <AudioAdjusters
//       audioSettings={entry.audioSettings}
//       setAudioSettings={() => {}}
//       />
//       <p>Voice: {entry.selectedVoice}</p>
//       </div>
//       )}
//       </li>
//       ))}
//       </ul>
//       </div>
//       );
//       };
      
//       export default RecentField;

// Working Code Above 
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import AudioAdjusters from './AudioAdjusters';

// const RecentField = ({ recentEntries = [], deleteEntry, selectedVoice, setSelectedVoice, audioSettings }) => {
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
//       }
//   };

//   const handleDelete = (index) => {
//     if (window.confirm('Are you sure you want to delete this entry?')) {
//       deleteEntry(index);
//     }
//   };
      
//   return (
//     <div>
//       <h3>Recent Entries</h3>
//       <ul>
//         {recentEntries.map((entry, index) => (
//           <li key={index}>
//             {entry.text}
//             <button onClick={() => playEntry(entry)}>Play</button>
//             <button onClick={() => handleDelete(index)}>Delete</button>
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
      
// export default RecentField;


////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import AudioAdjusters from './AudioAdjusters';

// const RecentField = ({ recentEntries = [], deleteEntry, selectedVoice, setSelectedVoice, audioSettings }) => {
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
// setExpandedEntryIndex(index);
// }
// };

// const handleDelete = (id) => {
// // if (window.confirm('Are you sure you want to delete this entry?')) {
// deleteEntry(id);
// // }
// };

// return (
// <div>
// <h3>Recent Entries</h3>
// <ul>
// {recentEntries.map((entry) => (
// <li key={entry.id}>
// {entry.text}
// <button onClick={() => playEntry(entry)}>Play</button>
// <button onClick={() => handleDelete(entry.id)}>Delete</button>
// <button onClick={() => toggleDetails(entry.id)}>Details</button>
// {expandedEntryIndex === entry.id && (
// <div>
// <p>Timestamp: {new Date(entry.timestamp).toLocaleString()}</p>
// <AudioAdjusters
// audioSettings={entry.audioSettings}
// setAudioSettings={() => {}}
// />
// <p>Voice: {entry.selectedVoice}</p>
// </div>
// )}
// </li>
// ))}
// </ul>
// </div>
// );
// };

// export default RecentField;

// Newest Working Code Above // New!!! ~~~  
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import AudioAdjusters from './AudioAdjusters';

// const RecentField = ({ recentEntries = [], deleteEntry, addFavoriteEntry, selectedVoice, setSelectedVoice, audioSettings }) => {
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

//   const handleDelete = (id) => {
//     // if (window.confirm('Are you sure you want to delete this entry?')) {
//     deleteEntry(id);
//     // }
//   };

//   const handleFavorite = (id) => {
//     addFavoriteEntry(id);
//   };

//   return (
//     <div>
//       <h3>Recent Entries</h3>
//       <ul>
//         {recentEntries.map((entry, index) => (
//           <li key={entry.id}>
//             {entry.text}
//             <button onClick={() => playEntry(entry)}>Play</button>
//         <button onClick={() => toggleDetails(index)}>Details</button>
//         <button onClick={() => handleDelete(entry.id)}>Delete</button>
//         <button onClick={() => handleFavorite(entry.id)}>Favorite</button> {/* New Favorite button */}
//         {expandedEntryIndex === index && (
//           <div>
//             <p>Timestamp: {new Date(entry.timestamp).toLocaleString()}</p>
//             <AudioAdjusters
//               audioSettings={entry.audioSettings}
//               setAudioSettings={() => {}}
//             />
//             <p>Voice: {entry.selectedVoice}</p>
//           </div>
//         )}
//       </li>
//     ))}
//   </ul>
// </div>
// );
// };

// export default RecentField;

// import React, { useState } from 'react';
// import AudioAdjusters from './AudioAdjusters';

// const RecentField = ({ recentEntries = [], deleteEntry, addFavoriteEntry, selectedVoice, setSelectedVoice, audioSettings }) => {
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

//   const handleDelete = (id) => {
//     deleteEntry(id);
//   };

//   const handleFavorite = (entry) => {
//     addFavoriteEntry(entry);
//   };

//   return (
//     <div>
//       <h3>Recent Entries</h3>
//       <ul>
//         {recentEntries.map((entry) => (
//           <li key={entry.id}>
//             {entry.text}
//             <button onClick={() => playEntry(entry)}>Play</button>
//             <button onClick={() => handleDelete(entry.id)}>Delete</button>
//             <button onClick={() => handleFavorite(entry)}>Favorite</button>
//             <button onClick={() => toggleDetails(entry.id)}>Details</button>
//             {expandedEntryIndex === entry.id && (
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

// export default RecentField;

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import AudioAdjusters from './AudioAdjusters';
// // import ToggleButton from './ToggleButton';  // New Toggle Button

// const RecentField = ({ entries = [], deleteEntry, selectedVoice, setSelectedVoice, audioSettings, addFavoriteEntry }) => {
//   const [expandedEntryIndex, setExpandedEntryIndex] = React.useState(null);

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
//   const handleFavorite = (entry) => {
//     addFavoriteEntry(entry.id);
//   };
  
//   const handleDelete = (entry) => {
//     deleteEntry(entry.id);
//   };

  

//   return (
//     <div>
//       <h3>Recent Entries</h3>
//       <ul>
//         {entries.map((entry, index) => (
//           <li key={entry.id}>
//             {entry.text}
//             <button onClick={() => playEntry(entry)}>Play</button>
//             <button onClick={() => handleFavorite(entry)}>Favorite</button>
//             <button onClick={() => handleDelete(entry)}>Delete</button>
//             <button onClick={() => toggleDetails(index)}>Details</button>
//             {expandedEntryIndex === index && (
// <div>
// <p>Timestamp: {new Date(entry.timestamp).toLocaleString()}</p>
// <AudioAdjusters
// audioSettings={entry.audioSettings}
// setAudioSettings={() => {}}
// />
// <p>Voice: {entry.selectedVoice}</p>
// </div>
// )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RecentField;

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import Entry from './Entry';

// const RecentField = ({ entries, setEntries }) => {
//   // Implementation for RecentField-specific features...

//   return (
//     <div>
//       <h2>Recent</h2>
//       {entries.map(entry => 
//         <Entry key={entry.id} entry={entry} setEntries={setEntries} field="recent" />
//       )}
//     </div>
//   );
// };

// export default RecentField;

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import Entry from './Entry';

// const RecentField = ({ entries, setEntries }) => {
//   return (
//     <div>
//       <h2>Recent</h2>
//       {entries.map(entry => 
//         <Entry key={entry.id} entry={entry} setEntries={setEntries} field="recent" />
//       )}
//     </div>
//   );
// };

// export default RecentField;

