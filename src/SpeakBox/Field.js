// import React from 'react';
// import Entry from './Entry';

// const Field = ({ title, entries, setEntries, field }) => {
//   return (
//     <div>
//       <h2>{title}</h2>
//       {entries.map(entry => 
//         <Entry key={entry.id} entry={entry} setEntries={setEntries} field={field} />
//       )}
//     </div>
//   );
// };

// export default Field;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Working Code ^^^/////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from 'react';
import Entry from './Entry';

const Field = ({ title, entries, setEntries, field }) => {
  return (
    <div>
      <h2>{title}</h2>
      {entries.length > 0 ? (
        entries.map(entry => 
          <Entry key={entry.id} entry={entry} setEntries={setEntries} field={field} />
        )
      ) : (
        <p>No entries available.</p>
      )}
    </div>
  );
};

export default Field;
