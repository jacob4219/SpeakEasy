import React, { useState } from 'react';
import Field from './SpeakBox/Field';
import SpeechToText from './SpeakBox/SpeechToText';

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
    <div className='app'>
      <h1>Gypsy</h1>
      <SpeechToText onFinalTranscription={onFinalTranscription} />
      {fields.map(field => 
        <Field key={field.name} title={field.title} entries={entries[field.name]} setEntries={setEntries} field={field.name} />
      )}
    </div>
  );
}

export default App;