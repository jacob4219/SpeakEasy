// import React, { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';

// const Entries = ({ onNewEntry }) => {
//   const [fields, setFields] = useState({ recent: [] });

//   useEffect(() => {
//     const storedFields = localStorage.getItem('fields');
//     if (storedFields) setFields(JSON.parse(storedFields));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('fields', JSON.stringify(fields));
//   }, [fields]);

//   const addEntry = (field, entry) => {
//     setFields((prevFields) => ({
//       ...prevFields,
//       [field]: [{ ...entry, id: uuidv4() }, ...(prevFields[field] || [])]
//     }));
//   };

//   useEffect(() => {
//     if (onNewEntry) {
//       onNewEntry(addEntry);
//     }
//   }, [addEntry, onNewEntry]);

//   return (
//     <div>
//       {Object.entries(fields).map(([fieldName, fieldEntries]) => (
//         <div key={fieldName}>
//           <h2>{fieldName}</h2>
//           {fieldEntries.map((entry) => (
//             <p key={entry.id}>{entry.text}</p>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Entries;


// Working Code Above //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from 'react';

const Entry = ({ entry, setEntries, field }) => {
  const deleteEntry = () => {
    setEntries(prevEntries => ({
      ...prevEntries,
      [field]: prevEntries[field].filter(e => e.id !== entry.id),
      recycle: [...prevEntries.recycle, entry],
    }));
  };

  const favoriteEntry = () => {
    if (field === 'recent') {
      setEntries(prevEntries => ({
        ...prevEntries,
        [field]: prevEntries[field].filter(e => e.id !== entry.id),
        favorite: [...prevEntries.favorite, entry],
      }));
    }
  };

  return (
    <div>
      <p>{entry.text}</p>
      <button onClick={deleteEntry}>Delete</button>
      {field === 'recent' && <button onClick={favoriteEntry}>Favorite</button>}
    </div>
  );
};

export default Entry;

