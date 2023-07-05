// import React from 'react';
// import Entries from './Entries';

// const Fields = ({ entries, setEntries }) => {
//   return (
//     <div>
//       <Entries field="recent" entries={entries.recent} setEntries={setEntries} />
//       <Entries field="favorite" entries={entries.favorite} setEntries={setEntries} />
//       <Entries field="recycle" entries={entries.recycle} setEntries={setEntries} />
//       <Entries field="userGenerated" entries={entries.userGenerated} setEntries={setEntries} />
//     </div>
//   );
// };

// export default Fields;

////////////////////////////////////Original Working Code above //////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import FavoriteField from './FavoriteField';
// import RecentField from './RecentField';
// import RecycleField from './RecycleField';
// import UserGeneratedField from './UserGeneratedField';

// const fieldComponentMapping = {
//   favorite: FavoriteField,
//   recent: RecentField,
//   recycle: RecycleField,
//   userGenerated: UserGeneratedField,
// };

// const Fields = ({ entries, setEntries }) => {
//   return (
//     <div>
//       {Object.keys(entries).map(field => {
//         const Component = fieldComponentMapping[field];
//         return <Component key={field} entries={entries[field]} setEntries={setEntries} />;
//       })}
//     </div>
//   );
// };

// export default Fields;

/// No longer used