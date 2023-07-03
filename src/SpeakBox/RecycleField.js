// import React, { useState } from 'react';

// const RecycleField = ({ recycleEntries = [], restoreEntry }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <h3 onClick={() => setIsOpen(!isOpen)}>Recycle Bin {isOpen ? '-' : '+'}</h3>
//       {isOpen && (
//         <ul>
//           {recycleEntries.map((entry, index) => (
//             <li key={index}>
//               {entry.text}
//               <button onClick={() => restoreEntry(index)}>Restore</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default RecycleField;

// Newest working code above, New new new!!!~~~
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';

// const RecycleField = ({ recycledEntries = [], restoreEntry }) => {
//  const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <h3 onClick={() => setIsOpen(!isOpen)}>Recycle Bin {isOpen ? '-' : '+'}</h3>
//       {isOpen && (
//         <ul>
//           {recycledEntries.map((entry) => (
//             <li key={entry.id}>
//               {entry.text}
//                 <button onClick={() => restoreEntry(entry.id)}>Restore</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default RecycleField;

////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React from 'react';
// import Entry from './Entry';

// const RecycleField = ({ entries, setEntries }) => {
//   return (
//     <div>
//       <h2>Recycle</h2>
//       {entries.map(entry => 
//         <Entry key={entry.id} entry={entry} setEntries={setEntries} field="recycle" />
//       )}
//     </div>
//   );
// };

// export default RecycleField;

import React from 'react';
import Entry from './Entry';

const RecycleField = ({ entries, setEntries }) => {
  return (
    <div>
      <h2>Recycle</h2>
      {entries.map(entry => 
        <Entry key={entry.id} entry={entry} setEntries={setEntries} field="recycle" />
      )}
    </div>
  );
};

export default RecycleField;
