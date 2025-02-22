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

import React, { useState } from "react";
import SpeechToText from "./SpeakBox/SpeechToText";
import { AudioSettingsProvider } from "./SpeakBox/AudioSettingsContext";
import Field from "./SpeakBox/Field";
import AudioAdjusters from "./SpeakBox/AudioAdjusters";

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

  const onFinalTranscription = (entry) => {
    const field = entry.field || "recent";
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
        <AudioAdjusters showVolume={showVolume} showRate={showRate} showPitch={showPitch} />

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
                /><> </>
                Prevent Empty Bubbles
              </label>
              <>  </>
              <label>
                <input
                  type="checkbox"
                  checked={showVolume}
                  onChange={() => setShowVolume(!showVolume)}
                /><> </>
                Show Volume
              </label>
              <> </>
              <label>
                <input
                  type="checkbox"
                  checked={showRate}
                  onChange={() => setShowRate(!showRate)}
                /><> </>
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
          />
        ))}
      </div>
    </AudioSettingsProvider>
  );
}

export default App;