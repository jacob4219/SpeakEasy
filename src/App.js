// import React, { useState } from 'react';
// import Field from './SpeakBox/Field';
// import SpeechToText from './SpeakBox/SpeechToText';
// import { AudioSettingsProvider } from './SpeakBox/AudioSettingsContext'; // import the provider

// function App() {
//   const [entries, setEntries] = useState({
//     recent: [],
//     favorite: [],
//     recycle: [],
//     userGenerated: [],
//   });

//   const onFinalTranscription = (entry) => {
//     setEntries(prev => ({
//       ...prev,
//       recent: [entry, ...prev.recent],
//     }));
//   };

//   const fields = [
//     { title: 'Recent', name: 'recent' },
//     { title: 'Favorite', name: 'favorite' },
//     { title: 'Recycle', name: 'recycle' },
//     { title: 'User Generated', name: 'userGenerated' },
//   ];

//   return (
//     <AudioSettingsProvider> {/* wrap your application with the provider */}
//       <div className='app'>
//         <h1>Gypsy</h1>
//         <SpeechToText onFinalTranscription={onFinalTranscription} />
//         {fields.map(field => 
//           <Field key={field.name} title={field.title} entries={entries[field.name]} setEntries={setEntries} field={field.name} />
//         )}
//       </div>
//     </AudioSettingsProvider>
//   );
// }

// export default App;

////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import Field from './SpeakBox/Field';
// import SpeechToText from './SpeakBox/SpeechToText';
// import { AudioSettingsProvider } from './SpeakBox/AudioSettingsContext';

// function App() {
//   const [entries, setEntries] = useState({
//     recent: [],
//     favorite: [],
//     recycle: [],
//     userGenerated: [],
//   });

//   const onFinalTranscription = (entry) => {
//     setEntries(prev => ({
//       ...prev,
//       recent: [entry, ...prev.recent],
//     }));
//   };

//   const fields = [
//     { title: 'Recent', name: 'recent' },
//     { title: 'Favorite', name: 'favorite' },
//     { title: 'Recycle', name: 'recycle' },
//     { title: 'User Generated', name: 'userGenerated' },
//   ];

//   return (
//     <AudioSettingsProvider>
//       <div className='app'>
//         <h1>Gypsy</h1>
//         <SpeechToText onFinalTranscription={onFinalTranscription} />
//         {fields.map(field => 
//           <Field key={field.name} title={field.title} entries={entries[field.name]} setEntries={setEntries} field={field.name} />
//         )}
//       </div>
//     </AudioSettingsProvider>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import Field from './SpeakBox/Field';
// import SpeechToText from './SpeakBox/SpeechToText';
// import Hopper from './SpeakBox/Hopper';
// import { AudioSettingsProvider } from './SpeakBox/AudioSettingsContext';

// function App() {
//   const [entries, setEntries] = useState({
//     recent: [],
//     favorite: [],
//     recycle: [],
//     userGenerated: [],
//   });

//   const onFinalTranscription = (entry) => {
//     const field = entry.field || 'recent'; // Use the field from the entry, default to 'recent'
//     setEntries(prev => ({
//       ...prev,
//       [field]: [entry, ...prev[field]],
//     }));
//   };

//   const fields = [
//     { title: 'Recent', name: 'recent' },
//     { title: 'Favorite', name: 'favorite' },
//     { title: 'Recycle', name: 'recycle' },
//     { title: 'User Generated', name: 'userGenerated' },
//   ];

//   return (
//     <AudioSettingsProvider>
//       <div className='app'>
//         <h1>Gypsy</h1>
//         <SpeechToText onFinalTranscription={onFinalTranscription} />
//         {fields.map(field => 
//           <Field key={field.name} title={field.title} entries={entries[field.name]} setEntries={setEntries} field={field.name} />
//         )}
//         <Hopper />
//       </div>
//     </AudioSettingsProvider>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import Field from "./SpeakBox/Field";
// import SpeechToText from "./SpeakBox/SpeechToText";
// import Hopper from "./SpeakBox/Hopper";
// import { AudioSettingsProvider } from "./SpeakBox/AudioSettingsContext";
// import { DragAndDropProvider } from "./SpeakBox/DragAndDropProvider"; // Import new provider

// function App() {
//   const [entries, setEntries] = useState({
//     recent: [],
//     favorite: [],
//     recycle: [],
//     userGenerated: [],
//   });

//   const onFinalTranscription = (entry) => {
//     const field = entry.field || "recent"; // Use the field from the entry, default to 'recent'
//     setEntries((prev) => ({
//       ...prev,
//       [field]: [entry, ...prev[field]],
//     }));
//   };

//   const fields = [
//     { title: "Recent", name: "recent" },
//     { title: "Favorite", name: "favorite" },
//     { title: "Recycle", name: "recycle" },
//     { title: "User Generated", name: "userGenerated" },
//   ];

//   return (
//     <AudioSettingsProvider>
//       <DragAndDropProvider> {/* Wrap everything in DragAndDropProvider */}
//         <div className="app">
//           <h1>Gypsy</h1>
//           <SpeechToText onFinalTranscription={onFinalTranscription} />
//           {fields.map((field) => (
//             <Field
//               key={field.name}
//               title={field.title}
//               entries={entries[field.name]}
//               setEntries={setEntries}
//               field={field.name}
//             />
//           ))}
//           <Hopper />
//         </div>
//       </DragAndDropProvider>
//     </AudioSettingsProvider>
//   );
// }

// export default App;


// import React from "react";
// import SpeechToText from "./SpeakBox/SpeechToText";
// import Hopper from "./SpeakBox/Hopper";
// import { AudioSettingsProvider } from "./SpeakBox/AudioSettingsContext";
// import { DragAndDropProvider } from "./SpeakBox/DragAndDropProvider";
// import RecentField from "./SpeakBox/RecentField";
// import FavoriteField from "./SpeakBox/FavoriteField";
// import RecycleField from "./SpeakBox/RecycleField";
// import UserGeneratedField from "./SpeakBox/UserGeneratedField";

// const AppContent = () => {
//   return (
//     <div className="app">
//       <h1>Gypsy</h1>
//       <SpeechToText />
//       <div className="fields-container">
//         <RecentField />
//         <FavoriteField />
//         <RecycleField />
//         <UserGeneratedField />
//       </div>
//       <Hopper />
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <AudioSettingsProvider>
//       <DragAndDropProvider>
//         <AppContent />
//       </DragAndDropProvider>
//     </AudioSettingsProvider>
//   );
// };

// export default App;


////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState } from "react";
// import SpeechToText from "./SpeakBox/SpeechToText";
// import { AudioSettingsProvider } from "./SpeakBox/AudioSettingsContext";
// import Field from "./SpeakBox/Field";

// function App() {
//   const [entries, setEntries] = useState({
//     recent: [],
//     favorite: [],
//     recycle: [],
//     userGenerated: [],
//     hopper: [],
//   });

//   const [preventEmptyBubbles, setPreventEmptyBubbles] = useState(true);

//   const onFinalTranscription = (entry) => {
//     const field = entry.field || "recent";
//     setEntries((prev) => ({
//       ...prev,
//       [field]: [entry, ...(prev[field] || [])],
//     }));
//   };

//   const fields = [
//     { title: 'Recent', name: 'recent' },
//     { title: 'Favorite', name: 'favorite' },
//     { title: 'Recycle', name: 'recycle' },
//     { title: 'User Generated', name: 'userGenerated' },
//     { title: 'Hopper', name: 'hopper' },
//   ];

//   return (
//     <AudioSettingsProvider>
//       <div className='app'>
//         <h1>Gypsy</h1>
      
//         <SpeechToText onFinalTranscription={onFinalTranscription} preventEmptyBubbles={preventEmptyBubbles} />
//         {fields.map(field => (
//           <Field 
//             key={field.name} 
//             title={field.title} 
//             entries={entries[field.name]} 
//             setEntries={setEntries} 
//             field={field.name} 
//           />
//         ))}

// <label>
//           <input
//             type="checkbox"
//             checked={preventEmptyBubbles}
//             onChange={() => setPreventEmptyBubbles(!preventEmptyBubbles)}
//           />
//           <>   </>
//            Prevent Empty Bubbles
//         </label>
//       </div>
//     </AudioSettingsProvider>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import SpeechToText from "./SpeakBox/SpeechToText";
// import { AudioSettingsProvider } from "./SpeakBox/AudioSettingsContext";
// import Field from "./SpeakBox/Field";
// import AudioAdjusters from "./SpeakBox/AudioAdjusters";
// import WordReader from "./SpeakBox/WordReader";

// function App() {
//   const [entries, setEntries] = useState({
//     recent: [],
//     favorite: [],
//     recycle: [],
//     userGenerated: [],
//     hopper: [],
//   });

//   const [preventEmptyBubbles, setPreventEmptyBubbles] = useState(true);
//   const [showSettings, setShowSettings] = useState(false);
//   const [showVolume, setShowVolume] = useState(true);
//   const [showRate, setShowRate] = useState(true);
//   const [showPitch, setShowPitch] = useState(true);
//   const [wordReaderEnabled, setWordReaderEnabled] = useState(false);

//   const [voice, setVoice] = useState("Google US English");
//   const [rate, setRate] = useState(1);
//   const [pitch, setPitch] = useState(1);
//   const [volume, setVolume] = useState(1);

//   const onFinalTranscription = (entry) => {
//     const field = entry.field || "recent";
//     setEntries((prev) => ({
//       ...prev,
//       [field]: [entry, ...(prev[field] || [])],
//     }));
//   };

//   const fields = [
//     { title: 'Recent', name: 'recent' },
//     { title: 'Favorite', name: 'favorite' },
//     { title: 'Recycle', name: 'recycle' },
//     { title: 'User Generated', name: 'userGenerated' },
//     { title: 'Hopper', name: 'hopper' },
//   ];

//   return (
//     <AudioSettingsProvider>
//       <div className='app'>
//         <h1>Gypsy</h1>

//         <SpeechToText 
//           onFinalTranscription={onFinalTranscription} 
//           preventEmptyBubbles={preventEmptyBubbles} 
//         />
//         <AudioAdjusters 
//           showVolume={showVolume} 
//           showRate={showRate} 
//           showPitch={showPitch}
//           setVoice={setVoice}
//           setRate={setRate}
//           setPitch={setPitch}
//           setVolume={setVolume}
//         />
//         {wordReaderEnabled && (
//           <WordReader voice={voice} rate={rate} pitch={pitch} volume={volume} />
//         )}

//         <div>
//           <button onClick={() => setShowSettings(!showSettings)}>
//             {showSettings ? "Hide Settings" : "Show Settings"}
//           </button>
//           {showSettings && (
//             <div className="settings-menu">
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={preventEmptyBubbles}
//                   onChange={() => setPreventEmptyBubbles(!preventEmptyBubbles)}
//                 /> <> </>
//                 Prevent Empty Bubbles
//               </label>
//               <>  </>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={showVolume}
//                   onChange={() => setShowVolume(!showVolume)}
//                 /> <> </>
//                 Show Volume
//               </label>
//               <> </>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={showRate}
//                   onChange={() => setShowRate(!showRate)}
//                 /> <> </>
//                 Show Rate
//               </label>
//               <> </>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={showPitch}
//                   onChange={() => setShowPitch(!showPitch)}
//                 /> <> </>
//                 Show Pitch
//               </label>
//               <> </>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={wordReaderEnabled}
//                   onChange={() => setWordReaderEnabled(!wordReaderEnabled)}
//                 /> <> </>
//                 Enable Word Reader
//               </label>
//             </div>
//           )}
//         </div>
        
//         {fields.map(field => (
//           <Field 
//             key={field.name} 
//             title={field.title} 
//             entries={entries[field.name]} 
//             setEntries={setEntries} 
//             field={field.name} 
//           />
//         ))}
//       </div>
//     </AudioSettingsProvider>
//   );
// }

// export default App;

////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import SpeechToText from "./SpeakBox/SpeechToText";
// import { AudioSettingsProvider } from "./SpeakBox/AudioSettingsContext";
// import Field from "./SpeakBox/Field";
// import AudioAdjusters from "./SpeakBox/AudioAdjusters";
// import WordReader from "./SpeakBox/WordReader";
// import TranslationSettings from "./SpeakBox/TranslationSettings";

// function App() {
//   const [entries, setEntries] = useState({
//     recent: [],
//     favorite: [],
//     recycle: [],
//     userGenerated: [],
//     hopper: [],
//   });

//   const [preventEmptyBubbles, setPreventEmptyBubbles] = useState(true);
//   const [showSettings, setShowSettings] = useState(false);
//   const [showVolume, setShowVolume] = useState(true);
//   const [showRate, setShowRate] = useState(true);
//   const [showPitch, setShowPitch] = useState(true);
//   const [wordReaderEnabled, setWordReaderEnabled] = useState(false);
//   const [translationEnabled, setTranslationEnabled] = useState(false);
//   const [targetLanguage, setTargetLanguage] = useState("es"); // Default to Spanish

//   const [voice, setVoice] = useState("Google US English");
//   const [rate, setRate] = useState(1);
//   const [pitch, setPitch] = useState(1);
//   const [volume, setVolume] = useState(1);

//   const onFinalTranscription = async (entry) => {
//     const field = entry.field || "recent";
//     if (translationEnabled) {
//       entry.text = await translateText(entry.text);
//     }
//     setEntries((prev) => ({
//       ...prev,
//       [field]: [entry, ...(prev[field] || [])],
//     }));
//   };

//   const translateText = async (text) => {
//     try {
//       const response = await fetch(`https://libretranslate.com/translate`, {
//         method: 'POST',
//         body: JSON.stringify({
//           q: text,
//           source: 'en',
//           target: targetLanguage,
//           format: 'text'
//         }),
//         headers: { 'Content-Type': 'application/json' },
//       });
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(`Translation error: ${response.statusText} - ${errorData.error}`);
//       }
//       const data = await response.json();
//       return data.translatedText;
//     } catch (error) {
//       console.error(error);
//       return text; // Fallback to the original text if translation fails
//     }
//   };

//   const fields = [
//     { title: 'Recent', name: 'recent' },
//     { title: 'Favorite', name: 'favorite' },
//     { title: 'Recycle', name: 'recycle' },
//     { title: 'User Generated', name: 'userGenerated' },
//     { title: 'Hopper', name: 'hopper' },
//   ];

//   return (
//     <AudioSettingsProvider>
//       <div className='app'>
//         <h1>Gypsy</h1>

//         <SpeechToText 
//           onFinalTranscription={onFinalTranscription} 
//           preventEmptyBubbles={preventEmptyBubbles} 
//         />
//         <AudioAdjusters 
//           showVolume={showVolume} 
//           showRate={showRate} 
//           showPitch={showPitch}
//           setVoice={setVoice}
//           setRate={setRate}
//           setPitch={setPitch}
//           setVolume={setVolume}
//         />
//         {wordReaderEnabled && (
//           <WordReader 
//             voice={voice} 
//             rate={rate} 
//             pitch={pitch} 
//             volume={volume} 
//             translationEnabled={translationEnabled}
//             targetLanguage={targetLanguage}
//           />
//         )}
// {/* 
//         <TranslationSettings 
//           translationEnabled={translationEnabled}
//           setTranslationEnabled={setTranslationEnabled}
//           targetLanguage={targetLanguage}
//           setTargetLanguage={setTargetLanguage}
//         /> */}

//         <div>
//           <button onClick={() => setShowSettings(!showSettings)}>
//             {showSettings ? "Hide Settings" : "Show Settings"}
//           </button>
//           {showSettings && (
//             <div className="settings-menu">
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={preventEmptyBubbles}
//                   onChange={() => setPreventEmptyBubbles(!preventEmptyBubbles)}
//                 /> <> </>
//                 Prevent Empty Bubbles
//               </label>
//               <>  </>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={showVolume}
//                   onChange={() => setShowVolume(!showVolume)}
//                 /> <> </>
//                 Show Volume
//               </label>
//               <> </>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={showRate}
//                   onChange={() => setShowRate(!showRate)}
//                 /> <> </>
//                 Show Rate
//               </label>
//               <> </>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={showPitch}
//                   onChange={() => setShowPitch(!showPitch)}
//                 /> <> </>
//                 Show Pitch
//               </label>
//               <> </>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={wordReaderEnabled}
//                   onChange={() => setWordReaderEnabled(!wordReaderEnabled)}
//                 /> <> </>
//                 Enable Word Reader
//               </label>
//             </div>
//           )}
//         </div>
        
//         {fields.map(field => (
//           <Field 
//             key={field.name} 
//             title={field.title} 
//             entries={entries[field.name]} 
//             setEntries={setEntries} 
//             field={field.name} 
//           />
//         ))}
//       </div>
//     </AudioSettingsProvider>
//   );
// }

// export default App;

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import SpeechToText from "./SpeakBox/SpeechToText";
// import { AudioSettingsProvider } from "./SpeakBox/AudioSettingsContext";
// import Field from "./SpeakBox/Field";
// import AudioAdjusters from "./SpeakBox/AudioAdjusters";
// import WordReader from "./SpeakBox/WordReader";
// import TranslationSettings from "./SpeakBox/TranslationSettings";

// function App() {
//   const [entries, setEntries] = useState({
//     recent: [],
//     favorite: [],
//     recycle: [],
//     userGenerated: [],
//     hopper: [],
//   });

//   const [preventEmptyBubbles, setPreventEmptyBubbles] = useState(true);
//   const [showSettings, setShowSettings] = useState(false);
//   const [showVolume, setShowVolume] = useState(true);
//   const [showRate, setShowRate] = useState(true);
//   const [showPitch, setShowPitch] = useState(true);
//   const [wordReaderEnabled, setWordReaderEnabled] = useState(false);
//   const [translationEnabled, setTranslationEnabled] = useState(false);
//   const [targetLanguage, setTargetLanguage] = useState("es"); // Default to Spanish

//   const [voice, setVoice] = useState("Google US English");
//   const [rate, setRate] = useState(1);
//   const [pitch, setPitch] = useState(1);
//   const [volume, setVolume] = useState(1);

//   const onFinalTranscription = async (entry) => {
//     const field = entry.field || "recent";
//     if (translationEnabled) {
//       entry.text = await translateText(entry.text);
//     }
//     entry.voice = voice; // Save the voice used
//     entry.rate = rate; // Save the rate used
//     entry.pitch = pitch; // Save the pitch used
//     setEntries((prev) => ({
//       ...prev,
//       [field]: [entry, ...(prev[field] || [])],
//     }));
//   };

//   const translateText = async (text) => {
//     try {
//       const response = await fetch(`https://libretranslate.com/translate`, {
//         method: 'POST',
//         body: JSON.stringify({
//           q: text,
//           source: 'en',
//           target: targetLanguage,
//           format: 'text'
//         }),
//         headers: { 'Content-Type': 'application/json' },
//       });
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(`Translation error: ${response.statusText} - ${errorData.error}`);
//       }
//       const data = await response.json();
//       return data.translatedText;
//     } catch (error) {
//       console.error(error);
//       return text; // Fallback to the original text if translation fails
//     }
//   };

//   const fields = [
//     { title: 'Recent', name: 'recent' },
//     { title: 'Favorite', name: 'favorite' },
//     { title: 'Recycle', name: 'recycle' },
//     { title: 'User Generated', name: 'userGenerated' },
//     { title: 'Hopper', name: 'hopper' },
//   ];

//   return (
//     <AudioSettingsProvider>
//       <div className='app'>
//         <h1>Gypsy</h1>

//         <SpeechToText 
//           onFinalTranscription={onFinalTranscription} 
//           preventEmptyBubbles={preventEmptyBubbles} 
//         />
//         <AudioAdjusters 
//           showVolume={showVolume} 
//           showRate={showRate} 
//           showPitch={showPitch}
//           setVoice={setVoice}
//           setRate={setRate}
//           setPitch={setPitch}
//           setVolume={setVolume}
//         />
//         {wordReaderEnabled && (
//           <WordReader 
//             voice={voice} 
//             rate={rate} 
//             pitch={pitch} 
//             volume={volume} 
//             translationEnabled={translationEnabled}
//             targetLanguage={targetLanguage}
//           />
//         )}

//         {/* <TranslationSettings 
//           translationEnabled={translationEnabled}
//           setTranslationEnabled={setTranslationEnabled}
//           targetLanguage={targetLanguage}
//           setTargetLanguage={setTargetLanguage}
//         /> */}

//         <div>
//           <button onClick={() => setShowSettings(!showSettings)}>
//             {showSettings ? "Hide Settings" : "Show Settings"}
//           </button>
//           {showSettings && (
//             <div className="settings-menu">
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={preventEmptyBubbles}
//                   onChange={() => setPreventEmptyBubbles(!preventEmptyBubbles)}
//                 /> <> </>
//                 Prevent Empty Bubbles
//               </label>
//               <>  </>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={showVolume}
//                   onChange={() => setShowVolume(!showVolume)}
//                 /> <> </>
//                 Show Volume
//               </label>
//               <> </>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={showRate}
//                   onChange={() => setShowRate(!showRate)}
//                 /> <> </>
//                 Show Rate
//               </label>
//               <> </>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={showPitch}
//                   onChange={() => setShowPitch(!showPitch)}
//                 /> <> </>
//                 Show Pitch
//               </label>
//               <> </>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={wordReaderEnabled}
//                   onChange={() => setWordReaderEnabled(!wordReaderEnabled)}
//                 /> <> </>
//                 Enable Word Reader
//               </label>
//             </div>
//           )}
//         </div>
        
//         {fields.map(field => (
//           <Field 
//             key={field.name} 
//             title={field.title} 
//             entries={entries[field.name]} 
//             setEntries={setEntries} 
//             field={field.name} 
//             mainVoice={voice}
//             mainRate={rate}
//             mainPitch={pitch}
//           />
//         ))}
//       </div>
//     </AudioSettingsProvider>
//   );
// }

// export default App;

import React, { useState } from "react";
import SpeechToText from "./SpeakBox/SpeechToText";
import { AudioSettingsProvider } from "./SpeakBox/AudioSettingsContext";
import Field from "./SpeakBox/Field";
import AudioAdjusters from "./SpeakBox/AudioAdjusters";
import WordReader from "./SpeakBox/WordReader";

function App() {
  const [entries, setEntries] = useState({
    recent: [],
    favorite: [],
    recycle: [],
    userGenerated: [],
    hopper: [],
  });

  const [preventEmptyBubbles, setPreventEmptyBubbles] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [showVolume, setShowVolume] = useState(true);
  const [showRate, setShowRate] = useState(true);
  const [showPitch, setShowPitch] = useState(true);
  const [wordReaderEnabled, setWordReaderEnabled] = useState(false);

  const [voice, setVoice] = useState("Google US English");
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [volume, setVolume] = useState(1);

  const onFinalTranscription = (entry) => {
    const field = entry.field || "recent";
    entry.voice = voice; // Save the voice used
    entry.rate = rate; // Save the rate used
    entry.pitch = pitch; // Save the pitch used
    setEntries((prev) => ({
      ...prev,
      [field]: [entry, ...(prev[field] || [])],
    }));
  };

  const fields = [
    { title: 'Recent', name: 'recent' },
    { title: 'Favorite', name: 'favorite' },
    { title: 'Recycle', name: 'recycle' },
    { title: 'User Generated', name: 'userGenerated' },
    { title: 'Hopper', name: 'hopper' },
  ];

  return (
    <AudioSettingsProvider>
      <div className='app'>
        <h1>Gypsy</h1>

        <SpeechToText 
          onFinalTranscription={onFinalTranscription} 
          preventEmptyBubbles={preventEmptyBubbles} 
        />
        <AudioAdjusters 
          showVolume={showVolume} 
          showRate={showRate} 
          showPitch={showPitch}
          setVoice={setVoice}
          setRate={setRate}
          setPitch={setPitch}
          setVolume={setVolume}
        />
        {wordReaderEnabled && (
          <WordReader 
            voice={voice} 
            rate={rate} 
            pitch={pitch} 
            volume={volume} 
          />
        )}

        <div>
          <button onClick={() => setShowSettings(!showSettings)}>
            {showSettings ? "Hide Settings" : "Show Settings"}
          </button>
          {showSettings && (
            <div className="settings-menu">
              <label>
                <input
                  type="checkbox"
                  checked={preventEmptyBubbles}
                  onChange={() => setPreventEmptyBubbles(!preventEmptyBubbles)}
                /> <> </>
                Prevent Empty Bubbles
              </label>
              <>  </>
              <label>
                <input
                  type="checkbox"
                  checked={showVolume}
                  onChange={() => setShowVolume(!showVolume)}
                /> <> </>
                Show Volume
              </label>
              <> </>
              <label>
                <input
                  type="checkbox"
                  checked={showRate}
                  onChange={() => setShowRate(!showRate)}
                /> <> </>
                Show Rate
              </label>
              <> </>
              <label>
                <input
                  type="checkbox"
                  checked={showPitch}
                  onChange={() => setShowPitch(!showPitch)}
                /> <> </>
                Show Pitch
              </label>
              <> </>
              <label>
                <input
                  type="checkbox"
                  checked={wordReaderEnabled}
                  onChange={() => setWordReaderEnabled(!wordReaderEnabled)}
                /> <> </>
                Enable Word Reader
              </label>
            </div>
          )}
        </div>
        
        {fields.map(field => (
          <Field 
            key={field.name} 
            title={field.title} 
            entries={entries[field.name]} 
            setEntries={setEntries} 
            field={field.name} 
            mainVoice={voice}
            mainRate={rate}
            mainPitch={pitch}
          />
        ))}
      </div>
    </AudioSettingsProvider>
  );
}

export default App;