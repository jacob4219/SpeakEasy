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


const Entry = ({ entry, setEntries, field }) => {
  const deleteEntry = () => {
    setEntries(prevEntries => ({
      ...prevEntries,
      recycle: [...prevEntries.recycle, entry], // Add the entry to the Recycle field
      [field]: prevEntries[field].filter(e => e.id !== entry.id) // Remove the entry from the current field
    }));
  };

  const moveEntry = (targetField) => {
    setEntries(prevEntries => ({
      ...prevEntries,
      [targetField]: [...prevEntries[targetField], entry], // Add the entry to the target field
      [field]: prevEntries[field].filter(e => e.id !== entry.id) // Remove the entry from the current field
    }));
  };

  return (
    <div className='entry'>
      <h3>{entry.text}</h3>
      <button onClick={deleteEntry}>Delete</button>
      <button onClick={() => moveEntry('favorite')}>Move to Favorite</button>
      <button onClick={() => moveEntry('recycle')}>Move to Recycle</button>
      <button onClick={() => moveEntry('userGenerated')}>Move to User Generated</button>
    </div>
  );
};

export default Entry;







