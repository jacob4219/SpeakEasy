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


import React from "react";
import Field from "./SpeakBox/Field";
import SpeechToText from "./SpeakBox/SpeechToText";
import Hopper from "./SpeakBox/Hopper";
import { AudioSettingsProvider } from "./SpeakBox/AudioSettingsContext";
import { DragAndDropProvider, useDragAndDrop } from "./SpeakBox/DragAndDropProvider"; // Import DragAndDropProvider

const AppContent = () => {
  const { entries, setEntries } = useDragAndDrop(); // Use context inside a sub-component

  const onFinalTranscription = (entry) => {
    const field = entry.field || "recent"; // Default to 'recent' if no field is specified
    setEntries((prev) => ({
      ...prev,
      [field]: [entry, ...(prev[field] || [])], // Ensure array exists before spreading
    }));
  };

  const fields = [
    { title: "Recent", name: "recent" },
    { title: "Favorite", name: "favorite" },
    { title: "Recycle", name: "recycle" },
    { title: "User Generated", name: "userGenerated" },
  ];

  return (
    <div className="app">
      <h1>Gypsy</h1>
      <SpeechToText onFinalTranscription={onFinalTranscription} />
      {fields.map((field) => (
        <Field
          key={field.name}
          title={field.title}
          entries={entries[field.name] || []} // Ensure array exists
          setEntries={setEntries}
          field={field.name}
        />
      ))}
      <Hopper />
    </div>
  );
};

const App = () => {
  return (
    <AudioSettingsProvider>
      <DragAndDropProvider>
        <AppContent />
      </DragAndDropProvider>
    </AudioSettingsProvider>
  );
};

export default App;
