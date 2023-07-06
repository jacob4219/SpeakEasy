import React, { useState } from 'react';
import Field from './SpeakBox/Field';
import SpeechToText from './SpeakBox/SpeechToText';
import { AudioSettingsProvider } from './SpeakBox/AudioSettingsContext'; // import the provider

function App() {
  const [entries, setEntries] = useState({
    recent: [],
    favorite: [],
    recycle: [],
    userGenerated: [],
  });

  const onFinalTranscription = (entry) => {
    setEntries(prev => ({
      ...prev,
      recent: [entry, ...prev.recent],
    }));
  };

  const fields = [
    { title: 'Recent', name: 'recent' },
    { title: 'Favorite', name: 'favorite' },
    { title: 'Recycle', name: 'recycle' },
    { title: 'User Generated', name: 'userGenerated' },
  ];

  return (
    <AudioSettingsProvider> {/* wrap your application with the provider */}
      <div className='app'>
        <h1>Gypsy</h1>
        <SpeechToText onFinalTranscription={onFinalTranscription} />
        {fields.map(field => 
          <Field key={field.name} title={field.title} entries={entries[field.name]} setEntries={setEntries} field={field.name} />
        )}
      </div>
    </AudioSettingsProvider>
  );
}

export default App;

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

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