// import React from 'react';
// // import Speak from './SpeakBox/speak';
// import TextToSpeech from './SpeakBox/TextToSpeech';
// import AudioAdjusters from './SpeakBox/AudioAdjusters';
// import SpeechToText from './SpeakBox/SpeechToText';
// const App = () => {
//   const [selectedVoice, setSelectedVoice] = useState(null);

//   return (
//     <div>
//       {/* <Speak selectedVoice={selectedVoice} setSelectedVoice={setSelectedVoice} /> */}
//       <TextInputField selectedVoice={selectedVoice} />
//           {/* <SpeakEasy /> */}
//           {/* <AudioAdjusters /> */}
//           <SpeechToText />
//           {/* <TextToSpeech /> */}
//           {/* <SpeechOutput />
//           <VoiceSelect />
//           <RatePitchVolumeControl />
//           <MuteButton />
//           <Recent />
//           <Favorites /> */}
//       </div>
//   );
// };

// export default App;

// Above is Original Working Code // Below is AI generated code 
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState } from 'react';
// import SpeechToText from './SpeakBox/SpeechToText';
// import RecentField from './SpeakBox/RecentField';

// const App = () => {
//   const [recentEntries, setRecentEntries] = useState([]);
//   const [selectedVoice, setSelectedVoice] = useState('Google US English');
//   const [audioSettings, setAudioSettings] = useState({
//     volume: 1,
//     rate: 1,
//     pitch: 1,
//   });

//   const addRecentEntry = (entry) => {
//     const entryWithSettings = {
//       text: entry,
//       timestamp: new Date().getTime(),
//       rate: parseFloat(audioSettings.rate),
//       pitch: parseFloat(audioSettings.pitch),
//       voice: selectedVoice,
//     };
//     setRecentEntries((prevEntries) => [entryWithSettings, ...prevEntries]);
//   };
  

//   return (
//     <div>
//       <SpeechToText
//         onFinalTranscription={addRecentEntry}
//         selectedVoice={selectedVoice}
//         setSelectedVoice={setSelectedVoice}
//         audioSettings={audioSettings}
//         setAudioSettings={setAudioSettings}
//       />
//       <RecentField
//         recentEntries={recentEntries}
//         selectedVoice={selectedVoice}
//         audioSettings={audioSettings}
//       />
      
//     </div>
//   );
// };

// export default App;


// Above is working code. Below is a new attempt
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState } from 'react';
// import SpeechToText from './SpeakBox/SpeechToText';
// import RecentField from './SpeakBox/RecentField';

// const App = () => {
//   const [recentEntries, setRecentEntries] = useState([]);
//   const [selectedVoice, setSelectedVoice] = useState('Google US English');
//   const [audioSettings, setAudioSettings] = useState({
//     volume: 1,
//     rate: 1,
//     pitch: 1,
//   });

//   const addRecentEntry = (entry) => {
//     const entryWithSettings = {
//       text: entry.text, // Extract text from the entry object
//       timestamp: new Date().getTime(),
//       audioSettings: entry.audioSettings, // Extract audioSettings from the entry object
//       selectedVoice: entry.selectedVoice, // Extract selectedVoice from the entry object
//     };
//     setRecentEntries((prevEntries) => [entryWithSettings, ...prevEntries]);
//   };

//   return (
//     <div>
//       <SpeechToText
//         onFinalTranscription={addRecentEntry}
//         selectedVoice={selectedVoice}
//         setSelectedVoice={setSelectedVoice}
//         audioSettings={audioSettings}
//         setAudioSettings={setAudioSettings}
//       />
//       <RecentField
//         recentEntries={recentEntries}
//         selectedVoice={selectedVoice}
//         audioSettings={audioSettings}
//       />
//     </div>
//   );
// };

// export default App;

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState } from 'react';
// import SpeechToText from './SpeakBox/SpeechToText';
// import RecentField from './SpeakBox/RecentField';
// // import VoiceMenu from './SpeakBox/VoiceMenu';
// // import AudioAdjusters from './AudioAdjusters';

// const App = () => {
//   const [recentEntries, setRecentEntries] = useState([]);
//   const [selectedVoice, setSelectedVoice] = useState('Google US English');
//   const [audioSettings, setAudioSettings] = useState({
//     volume: 1,
//     rate: 1,
//     pitch: 1,
//   });

//   const addRecentEntry = (entry) => {
//     const entryWithSettings = {
//       text: entry.text,
//       timestamp: new Date().getTime(),
//       audioSettings: entry.audioSettings,
//       selectedVoice: entry.selectedVoice,
//     };
//     setRecentEntries((prevEntries) => [entryWithSettings, ...prevEntries]);
//   };

//   return (
//     <div>
//       {/* <VoiceMenu
//         selectedVoice={selectedVoice}
//         setSelectedVoice={setSelectedVoice}
//       /> */}
//       <SpeechToText
//         onFinalTranscription={addRecentEntry}
//         selectedVoice={selectedVoice}
//         setSelectedVoice={setSelectedVoice}
//         audioSettings={audioSettings}
//         setAudioSettings={setAudioSettings}
//       />
//       <RecentField
//         recentEntries={recentEntries}
//         selectedVoice={selectedVoice}
//         setSelectedVoice={setSelectedVoice}
//         audioSettings={audioSettings}
//       />
//     </div>
//   );
// };

// export default App;


// WORKING CODE ABOVE
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import SpeechToText from './SpeakBox/SpeechToText';
// import RecentField from './SpeakBox/RecentField';

// const App = () => {
//   const [recentEntries, setRecentEntries] = useState([]);
//   const [selectedVoice, setSelectedVoice] = useState('Google US English');
//   const [audioSettings, setAudioSettings] = useState({
//     volume: 1,
//     rate: 1,
//     pitch: 1,
//   });

//   const addRecentEntry = (entry) => {
//     const entryWithSettings = {
//       text: entry.text,
//       timestamp: new Date().getTime(),
//       audioSettings: entry.audioSettings,
//       selectedVoice: entry.selectedVoice,
//     };
//     setRecentEntries((prevEntries) => [entryWithSettings, ...prevEntries]);
//   };

//   // New deleteEntry function
//   const deleteEntry = (index) => {
//     setRecentEntries((prevEntries) => prevEntries.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//       <SpeechToText
//         onFinalTranscription={addRecentEntry}
//         selectedVoice={selectedVoice}
//         setSelectedVoice={setSelectedVoice}
//         audioSettings={audioSettings}
//         setAudioSettings={setAudioSettings}
//       />
//       <RecentField
//         recentEntries={recentEntries}
//         deleteEntry={deleteEntry} // Passing the deleteEntry function
//         selectedVoice={selectedVoice}
//         setSelectedVoice={setSelectedVoice}
//         audioSettings={audioSettings}
//       />
//     </div>
//   );
// };

// export default App;


// WORKING CODE ABOVE
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState } from 'react';
// import SpeechToText from './SpeakBox/SpeechToText';
// import RecentField from './SpeakBox/RecentField';
// import RecycleField from './SpeakBox/RecycleField';

// const App = () => {
//   const [recentEntries, setRecentEntries] = useState([]);
//   const [recycleEntries, setRecycleEntries] = useState([]);
//   const [selectedVoice, setSelectedVoice] = useState('Google US English');
//   const [audioSettings, setAudioSettings] = useState({
//     volume: 1,
//     rate: 1,
//     pitch: 1,
//   });

//   const addRecentEntry = (entry) => {
//     const entryWithSettings = {
//       text: entry.text,
//       timestamp: new Date().getTime(),
//       audioSettings: entry.audioSettings,
//       selectedVoice: entry.selectedVoice,
//     };
//     setRecentEntries((prevEntries) => [entryWithSettings, ...prevEntries]);
//   };

//   const deleteEntry = (index) => {
//     setRecentEntries((prevEntries) => {
//       const deleted = prevEntries[index];
//       const newRecentEntries = [...prevEntries.slice(0, index), ...prevEntries.slice(index + 1)];
//       setRecycleEntries((prevRecycleEntries) => [deleted, ...prevRecycleEntries]);
//       return newRecentEntries;
//     });
//   };
  
//   const restoreEntry = (index) => {
//     setRecycleEntries((prevEntries) => {
//       const restored = prevEntries[index];
//       const newRecycleEntries = [...prevEntries.slice(0, index), ...prevEntries.slice(index + 1)];
//       setRecentEntries((prevRecentEntries) => [restored, ...prevRecentEntries]);
//       return newRecycleEntries;
//     });
//   };
  

//   return (
//     <div>
//       <SpeechToText
//         onFinalTranscription={addRecentEntry}
//         selectedVoice={selectedVoice}
//         setSelectedVoice={setSelectedVoice}
//         audioSettings={audioSettings}
//         setAudioSettings={setAudioSettings}
//       />
//       <RecentField
//         recentEntries={recentEntries}
//         deleteEntry={deleteEntry} // Passing the deleteEntry function
//         selectedVoice={selectedVoice}
//         setSelectedVoice={setSelectedVoice}
//         audioSettings={audioSettings}
//       />
//       <RecycleField
//         recycleEntries={recycleEntries}
//         restoreEntry={restoreEntry}
//       />
//     </div>
//   );
// };

// export default App;

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import SpeechToText from './SpeakBox/SpeechToText';
// import RecentField from './SpeakBox/RecentField';
// import RecycleField from './SpeakBox/RecycleField';

// const App = () => {
//   const [recentEntries, setRecentEntries] = useState([]);
//   const [recycleEntries, setRecycleEntries] = useState([]);
//   const [selectedVoice, setSelectedVoice] = useState('Google US English');
//   const [audioSettings, setAudioSettings] = useState({
//     volume: 1,
//     rate: 1,
//     pitch: 1,
//   });
//   const [deletedEntry, setDeletedEntry] = useState(null);

//   useEffect(() => {
//     if (deletedEntry) {
//       setRecycleEntries((prevRecycleEntries) => [deletedEntry, ...prevRecycleEntries]);
//       setDeletedEntry(null);  // Reset for future deletions
//     }
//   }, [deletedEntry]);

//   const addRecentEntry = (entry) => {
//     const entryWithSettings = {
//       id: uuidv4(),
//       text: entry.text,
//       timestamp: new Date().getTime(),
//       audioSettings: entry.audioSettings,
//       selectedVoice: entry.selectedVoice,
//     };
//     setRecentEntries((prevEntries) => [entryWithSettings, ...prevEntries]);
//   };

//   const deleteEntry = (id) => {
//     setRecentEntries((prevEntries) => {
//       const deleted = prevEntries.find(entry => entry.id === id);
//       const newRecentEntries = prevEntries.filter(entry => entry.id !== id);
//       setDeletedEntry(deleted);
//       return newRecentEntries;
//     });
//   };

//   const restoreEntry = (id) => {
//     setRecycleEntries((prevEntries) => {
//       const restored = prevEntries.find(entry => entry.id === id);
//       const newRecycleEntries = prevEntries.filter(entry => entry.id !== id);
//       setRecentEntries((prevRecentEntries) => [restored, ...prevRecentEntries]);
//       return newRecycleEntries;
//     });
//   };

//   return (
//     <div>
//       <SpeechToText
//         onFinalTranscription={addRecentEntry}
//         selectedVoice={selectedVoice}
//         setSelectedVoice={setSelectedVoice}
//         audioSettings={audioSettings}
//         setAudioSettings={setAudioSettings}
//       />
//       <RecentField
//         recentEntries={recentEntries}
//         deleteEntry={deleteEntry}
//         selectedVoice={selectedVoice}
//         setSelectedVoice={setSelectedVoice}
//         audioSettings={audioSettings}
//       />
//       <RecycleField
//         recycleEntries={recycleEntries}
//         restoreEntry={restoreEntry}
//       />
//     </div>
//   );
// };

// export default App;


// WORKING CODE ABOVE
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import SpeechToText from './SpeakBox/SpeechToText';
// import RecentField from './SpeakBox/RecentField';
// import RecycleField from './SpeakBox/RecycleField';
// import FavoritesField from './SpeakBox/FavoritesField';

// const App = () => {
//   const [recentEntries, setRecentEntries] = useState([]);
//   const [recycleEntries, setRecycleEntries] = useState([]);
//   const [favoriteEntries, setFavoriteEntries] = useState([]);
//   const [selectedVoice, setSelectedVoice] = useState('Google US English');
//   const [isLocked, setIsLocked] = useState(false);
//   const [audioSettings, setAudioSettings] = useState({
//     volume: 1,
//     rate: 1,
//     pitch: 1,
//   });
//   const [deletedEntry, setDeletedEntry] = useState(null);

//   useEffect(() => {
//     if (deletedEntry) {
//       setRecycleEntries((prevRecycleEntries) => [deletedEntry, ...prevRecycleEntries]);
//       setDeletedEntry(null);
//     }
//   }, [deletedEntry]);

//   const addRecentEntry = (entry) => {
//     const entryWithSettings = {
//       id: uuidv4(),
//       text: entry.text,
//       timestamp: new Date().getTime(),
//       audioSettings: entry.audioSettings,
//       selectedVoice: entry.selectedVoice,
//     };
//     setRecentEntries((prevEntries) => [entryWithSettings, ...prevEntries]);
//   };

//   const deleteEntry = (id) => {
//     setRecentEntries((prevEntries) => {
//       const deleted = prevEntries.find(entry => entry.id === id);
//       const newRecentEntries = prevEntries.filter(entry => entry.id !== id);
//       setDeletedEntry(deleted);
//       return newRecentEntries;
//     });
//   };

//   const addFavoriteEntry = (id) => {
//     setRecentEntries((prevEntries) => {
//       const favorite = prevEntries.find(entry => entry.id === id);
//       const newRecentEntries = prevEntries.filter(entry => entry.id !== id);
//       setFavoriteEntries((prevFavoriteEntries) => {
//         if (!prevFavoriteEntries.some(entry => entry.id === favorite.id)) {
//           return [favorite, ...prevFavoriteEntries];
//         } else {
//           return [...prevFavoriteEntries];
//         }
//       });
//       return newRecentEntries;
//     });
//   };

//   const restoreEntry = (id) => {
//     setRecycleEntries((prevEntries) => {
//       const restored = prevEntries.find(entry => entry.id === id);
//       const newRecycleEntries = prevEntries.filter(entry => entry.id !== id);
//       setRecentEntries((prevRecentEntries) => [restored, ...prevRecentEntries]);
//       return newRecycleEntries;
//     });
//   };

//   const removeFromFavorites = (id) => {
//     setFavoriteEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
//   };

//   const editEntry = (id, newValues) => {
//     setFavoriteEntries((prevEntries) => prevEntries.map((entry) => entry.id === id ? {...entry, ...newValues} : entry));
//   };

//   const sendToRecent = (entry) => {
//     setRecentEntries((prevEntries) => [entry, ...prevEntries]);
//     removeFromFavorites(entry.id);
//   };

//   return (
//     <div>
//       <SpeechToText
//         onFinalTranscription={addRecentEntry}
//         selectedVoice={selectedVoice}
//         setSelectedVoice={setSelectedVoice}
//         audioSettings={audioSettings}
//         setAudioSettings={setAudioSettings}
//       />
//       <RecentField
//         recentEntries={recentEntries}
//         deleteEntry={deleteEntry}
//         addFavoriteEntry={addFavoriteEntry}
//         selectedVoice={selectedVoice}
//         setSelectedVoice={setSelectedVoice}
//         audioSettings={audioSettings}
//       />
//       <FavoritesField
//         favoriteEntries={favoriteEntries}
//         selectedVoice={selectedVoice}
//         audioSettings={audioSettings}
//         isLocked={isLocked}
//         setIsFavoritesLocked={setIsLocked}
//         removeFromFavorites={removeFromFavorites}
//         editEntry={editEntry}
//         sendToRecent={sendToRecent}
//      />
//       <RecycleField
//         recycleEntries={recycleEntries}
//         restoreEntry={restoreEntry}
//       />
//     </div>
//   );
// };

// export default App;



// NEWEST WORKING CODE ABOVE!!! NEW NEW NEW ~~  
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import RecentField from './SpeakBox/RecentField';
// import FavoritesField from './SpeakBox/FavoritesField';
// import SpeechToText from './SpeakBox/SpeechToText';

// const App = () => {
//   const [recentEntries, setRecentEntries] = useState([]);
//   const [favoriteEntries, setFavoriteEntries] = useState([]);
//   const [isLocked, setIsLocked] = useState(false);
//   const [selectedVoice, setSelectedVoice] = useState('Google US English');

//   const addRecentEntry = (entry) => {
//     if (entry.id) {
//       setRecentEntries((prevEntries) => [entry, ...prevEntries]);
//     } else {
//       const id = Date.now().toString();
//       setRecentEntries((prevEntries) => [{ id, ...entry }, ...prevEntries]);
//     }
//   };

//   const removeFromFavorites = (id) => {
//     setFavoriteEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
//   };

//   const editEntry = (id, updatedEntry) => {
//     setFavoriteEntries((prevEntries) => prevEntries.map((entry) => (entry.id === id ? updatedEntry : entry)));
//   };

//   const sendToRecent = (entry) => {
//     addRecentEntry(entry);
//   };

//   return (
//     <div className='app'>
//       <h1>Gypsy</h1>
//       <SpeechToText addRecentEntry={addRecentEntry} />
//       <RecentField
//         recentEntries={recentEntries}
//         selectedVoice={selectedVoice}
//         isLocked={isLocked}
//         setIsLocked={setIsLocked}
//         setFavoriteEntries={setFavoriteEntries}
//       />
//       <FavoritesField
//         favoriteEntries={favoriteEntries}
//         selectedVoice={selectedVoice}
//         isLocked={isLocked}
//         setIsFavoritesLocked={setIsLocked}
//         removeFromFavorites={removeFromFavorites}
//         editEntry={editEntry}
//         sendToRecent={sendToRecent}
//       />
//     </div>
//   );
// };

// export default App;

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import SpeechToText from './SpeakBox/SpeechToText';
// import RecentField from './SpeakBox/RecentField';
// import RecycleField from './SpeakBox/RecycleField';
// import FavoritesField from './SpeakBox/FavoritesField';

// const App = () => {
//   const [recentEntries, setRecentEntries] = useState([]);
//   const [favoriteEntries, setFavoriteEntries] = useState([]);
//   const [recycledEntries, setRecycledEntries] = useState([]);

//   useEffect(() => {
//     const storedRecents = localStorage.getItem('recents');
//     const storedFavorites = localStorage.getItem('favorites');
//     const storedRecycles = localStorage.getItem('recycles');

//     if (storedRecents) setRecentEntries(JSON.parse(storedRecents));
//     if (storedFavorites) setFavoriteEntries(JSON.parse(storedFavorites));
//     if (storedRecycles) setRecycledEntries(JSON.parse(storedRecycles));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('recents', JSON.stringify(recentEntries));
//     localStorage.setItem('favorites', JSON.stringify(favoriteEntries));
//     localStorage.setItem('recycles', JSON.stringify(recycledEntries));
//   }, [recentEntries, favoriteEntries, recycledEntries]);

//   const addToFavorites = (entry) => {
//     setFavoriteEntries((prevFavorites) => [...prevFavorites, { ...entry, id: uuidv4() }]);
//     setRecentEntries((prevRecents) => prevRecents.filter((recent) => recent.id !== entry.id));
//   };
  

//   const sendToRecent = (entry) => {
//     setRecentEntries((prevRecents) => [{ ...entry, id: uuidv4() }, ...prevRecents]);
//   };
  

//   const sendToRecycle = (entry) => {
//     setRecycledEntries((prevRecycled) => [...prevRecycled, { ...entry, id: uuidv4() }]);
//     setRecentEntries((prevRecents) => prevRecents.filter((recent) => recent.id !== entry.id));
//   };
  

//   const removeFromFavoritesAndSendToRecycle = (id) => {
//     const entry = favoriteEntries.find(entry => entry.id === id);
//     if (!entry) return;

//     setFavoriteEntries((prevFavorites) => prevFavorites.filter((entry) => entry.id !== id));
//     sendToRecycle(entry);
//   };

//   const editEntry = (id, updatedEntry) => {
//     setFavoriteEntries((prevFavorites) =>
//       prevFavorites.map((entry) => (entry.id === id ? { ...entry, ...updatedEntry } : entry))
//     );
//   };

//   const onFinalTranscription = (entry) => {
//     sendToRecent(entry);
//   };

//   return (
//     <div className='app'>
//       <h1>Gypsy</h1>
//       <SpeechToText
//         addToFavorites={addToFavorites}
//         sendToRecent={sendToRecent}
//         onFinalTranscription={onFinalTranscription}
//       />
//       <RecentField
//         recentEntries={recentEntries}
//         deleteEntry={sendToRecycle} 
//         addFavoriteEntry={addToFavorites} 
//       />
//       <FavoritesField
//         favoriteEntries={favoriteEntries}
//         removeFromFavoritesAndSendToRecycle={removeFromFavoritesAndSendToRecycle}
//         editEntry={editEntry}
//         sendToRecent={sendToRecent}
//       />
//       <RecycleField
//         recycledEntries={recycledEntries}
//       />
//     </div>
//   );
// };

// export default App;

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import SpeechToText from './SpeakBox/SpeechToText';
// import RecentField from './SpeakBox/RecentField';
// import RecycleField from './SpeakBox/RecycleField';
// import FavoritesField from './SpeakBox/FavoritesField';

// const App = () => {
//   const [recentEntries, setRecentEntries] = useState([]);
//   const [favoriteEntries, setFavoriteEntries] = useState([]);
//   const [recycledEntries, setRecycledEntries] = useState([]);

//   useEffect(() => {
//     const storedRecents = localStorage.getItem('recents');
//     const storedFavorites = localStorage.getItem('favorites');
//     const storedRecycles = localStorage.getItem('recycles');

//     if (storedRecents) setRecentEntries(JSON.parse(storedRecents));
//     if (storedFavorites) setFavoriteEntries(JSON.parse(storedFavorites));
//     if (storedRecycles) setRecycledEntries(JSON.parse(storedRecycles));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('recents', JSON.stringify(recentEntries));
//     localStorage.setItem('favorites', JSON.stringify(favoriteEntries));
//     localStorage.setItem('recycles', JSON.stringify(recycledEntries));
//   }, [recentEntries, favoriteEntries, recycledEntries]);

//   const addToFavorites = (entry) => {
//     setFavoriteEntries((prevFavorites) => [...prevFavorites, entry]);
//     setRecentEntries((prevRecents) => prevRecents.filter((recent) => recent.id !== entry.id));
//   };
  

//   const sendToRecent = (entry) => {
//     setRecentEntries((prevRecents) => [entry, ...prevRecents]);
//   };
  

//   const sendToRecycle = (entry) => {
//     setRecycledEntries((prevRecycled) => [...prevRecycled, entry]);
//     setRecentEntries((prevRecents) => prevRecents.filter((recent) => recent.id !== entry.id));
//   };
  

//   const removeFromFavoritesAndSendToRecycle = (id) => {
//     const entry = favoriteEntries.find(entry => entry.id === id);
//     if (!entry) return;

//     setFavoriteEntries((prevFavorites) => prevFavorites.filter((entry) => entry.id !== id));
//     sendToRecycle(entry);
//   };

//   const editEntry = (id, updatedEntry) => {
//     setFavoriteEntries((prevFavorites) =>
//       prevFavorites.map((entry) => (entry.id === id ? { ...entry, ...updatedEntry } : entry))
//     );
//   };

//   const onFinalTranscription = (entry) => {
//     sendToRecent({ ...entry, id: uuidv4() });
//   };

//   return (
//     <div className='app'>
//       <h1>Gypsy</h1>
//       <SpeechToText
//         addToFavorites={addToFavorites}
//         sendToRecent={sendToRecent}
//         onFinalTranscription={onFinalTranscription}
//       />
//       <RecentField
//         recentEntries={recentEntries}
//         deleteEntry={sendToRecycle} 
//         addFavoriteEntry={addToFavorites} 
//       />
//       <FavoritesField
//         favoriteEntries={favoriteEntries}
//         removeFromFavoritesAndSendToRecycle={removeFromFavoritesAndSendToRecycle}
//         editEntry={editEntry}
//         sendToRecent={sendToRecent}
//       />
//       <RecycleField
//         recycledEntries={recycledEntries}
//         restoreEntry={sendToRecent} // Provide a way to restore entries from RecycleBin to Recent Entries
//       />
//     </div>
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import SpeechToText from './SpeakBox/SpeechToText';
// // import RecentField from './SpeakBox/RecentField';
// // import RecycleField from './SpeakBox/RecycleField';
// // import FavoritesField from './SpeakBox/FavoritesField';

// const App = () => {
//   const [entries, setEntries] = useState([]);
//   // const [fields, setFields] = useState(["recent", "favorite", "recycle"]);

//   useEffect(() => {
//     const storedEntries = localStorage.getItem('entries');
//     if (storedEntries) setEntries(JSON.parse(storedEntries));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('entries', JSON.stringify(entries));
//   }, [entries]);

// // App component
// const moveEntry = (id, newField) => {
//   setEntries((prevEntries) => {
//     const entryIndex = prevEntries.findIndex((entry) => entry.id === id);
//     if (entryIndex === -1) return prevEntries;  // Entry not found

//     const entry = { ...prevEntries[entryIndex], field: newField };

//     // Remove entry from array and add it at the start
//     const newEntries = [...prevEntries];
//     newEntries.splice(entryIndex, 1);
//     newEntries.unshift(entry);
//     return newEntries;
//   });
// };


//   const sendToRecent = (entry) => {
//     setEntries((prevEntries) => [{ ...entry, id: uuidv4(), field: 'recent' }, ...prevEntries]);
//   };

//   const addToFavorites = (id) => {
//     moveEntry(id, 'favorite');
//   };
  
//   const sendToRecycle = (id) => {
//     moveEntry(id, 'recycle');
//   };

//   const removeFromFavoritesAndSendToRecycle = (id) => {
//     moveEntry(id, 'recycle');
//   };

//   const onFinalTranscription = (entry) => {
//     sendToRecent({ ...entry, timestamp: new Date().toISOString() });
//   };

//   const editEntry = (id, updatedEntry) => {
//     setEntries((prevEntries) =>
//       prevEntries.map((entry) => (entry.id === id ? { ...entry, ...updatedEntry } : entry))
//     );
//   };

//   return (
//     <div className='app'>
//       <h1>Gypsy</h1>
//       <SpeechToText
//         addToFavorites={addToFavorites}
//         sendToRecent={sendToRecent}
//         onFinalTranscription={onFinalTranscription}
//       />
//       {/* <RecentField
//         entries={entries.filter(entry => entry.field === 'recent')}
//         deleteEntry={sendToRecycle}
//         addFavoriteEntry={addToFavorites}
//       />
//       <FavoritesField
//         entries={entries.filter(entry => entry.field === 'favorite')}
//         removeFromFavoritesAndSendToRecycle={removeFromFavoritesAndSendToRecycle}
//         editEntry={editEntry}
//         sendToRecent={sendToRecent}
//       />
//       <RecycleField
//         entries={entries.filter(entry => entry.field === 'recycle')}
//         restoreEntry={sendToRecent}
//         editEntry={editEntry}
//       /> */}
//     </div>
//   );
// };

// export default App;



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import SpeechToText from './SpeakBox/SpeechToText';

// const App = () => {
//   const [entries, setEntries] = useState([]);

//   useEffect(() => {
//     const storedEntries = localStorage.getItem('entries');
//     if (storedEntries) setEntries(JSON.parse(storedEntries));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('entries', JSON.stringify(entries));
//   }, [entries]);

//   const sendToRecent = (entry) => {
//     setEntries((prevEntries) => [{ ...entry, id: uuidv4(), field: 'recent' }, ...prevEntries]);
//   };

//   const onFinalTranscription = (entry) => {
//     sendToRecent({ ...entry, timestamp: new Date().toISOString() });
//   };

//   return (
//     <div className='app'>
//       <h1>Gypsy</h1>
//       <SpeechToText
//         // sendToRecent={sendToRecent}
//         onFinalTranscription={onFinalTranscription}
//       />
//     </div>
//   );
// };

// export default App;

// Above is newest working code.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import SpeechToText from './SpeakBox/SpeechToText';
// import Entries from './SpeakBox/Entries';

// const App = () => {
//   let addEntry;

//   const onFinalTranscription = (entry) => {
//     if (addEntry) {
//       addEntry('recent', { ...entry, timestamp: new Date().toISOString() });
//     }
//   };

//   return (
//     <div className='app'>
//       <h1>Gypsy</h1>
//       <SpeechToText onFinalTranscription={onFinalTranscription} />
//       <Entries onNewEntry={(add) => { addEntry = add; }} />
//     </div>
//   );
// };

// export default App;

// Works ^^ 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import SpeechToText from './SpeakBox/SpeechToText';
// import Fields from './SpeakBox/Fields';

// const App = () => {
//   const [entries, setEntries] = useState({ recent: [], favorite: [], recycle: [], userGenerated: [] });

//   const onFinalTranscription = (entry) => {
//     setEntries((prevEntries) => ({
//       ...prevEntries,
//       recent: [{ ...entry, timestamp: new Date().toISOString() }, ...prevEntries.recent],
//     }));
//   };

//   return (
//     <div className='app'>
//       <h1>Gypsy</h1>
//       <SpeechToText onFinalTranscription={onFinalTranscription} />
//       <Fields entries={entries} setEntries={setEntries} />
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import SpeechToText from './SpeakBox/SpeechToText';
import RecentField from './SpeakBox/RecentField';
import FavoriteField from './SpeakBox/FavoriteField';
import RecycleField from './SpeakBox/RecycleField';
// import UserGeneratedField from './SpeakBox/UserGeneratedField';

const App = () => {
  const [entries, setEntries] = useState({ recent: [], favorite: [], recycle: [], userGenerated: [] });

  const onFinalTranscription = (entry) => {
    setEntries((prevEntries) => ({
      ...prevEntries,
      recent: [{ ...entry, timestamp: new Date().toISOString() }, ...prevEntries.recent],
    }));
  };

  return (
    <div className='app'>
      <h1>Gypsy</h1>
      <SpeechToText onFinalTranscription={onFinalTranscription} />
      <RecentField entries={entries.recent} setEntries={setEntries} />
      <FavoriteField entries={entries.favorite} setEntries={setEntries} />
      <RecycleField entries={entries.recycle} setEntries={setEntries} />
      {/* <UserGeneratedField entries={entries.userGenerated} setEntries={setEntries} /> */}
    </div>
  );
};

export default App;
