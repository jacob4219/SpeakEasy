// import React from 'react';
// import Entry from './Entry';

// const Field = ({ title, entries, setEntries, field }) => {
//   return (
//     <div>
//       <h2>{title}</h2>
//       {entries.length > 0 ? (
//         entries.map(entry => 
//           <Entry key={entry.id} entry={entry} setEntries={setEntries} field={field} />
//         )
//       ) : (
//         <p>No entries.</p>
//       )}
//     </div>
//   );
// };

// export default Field;

/////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState, useEffect } from 'react';
// import Entry from './Entry';

// const Field = ({ title, entries, setEntries, field }) => {
//   const [isCollapsed, setIsCollapsed] = useState(entries.length === 0);
//   const [isExpanded, setIsExpanded] = useState(false);

//   useEffect(() => {
//     if (entries.length === 1) {
//       setIsCollapsed(false);
//     }
//   }, [entries.length]);

//   useEffect(() => {
//     if (entries.length === 0) {
//       setIsCollapsed(true);
//     }
//   }, [entries.length]);

//   const handleToggleCollapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const handleToggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const handleRecycle = () => {
//     const confirmRecycle = window.confirm(`Are you sure you want to move all entries to the recycle field?`);
//     if (confirmRecycle) {
//       setEntries((prevEntries) => ({
//         ...prevEntries,
//         recycle: [...prevEntries.recycle, ...entries],
//         [field]: [],
//       }));
//     }
//   };

//   const handleDeleteAll = () => {
//     const confirmDelete = window.confirm(`Are you sure you want to delete all entries?`);
//     if (confirmDelete) {
//       setEntries((prevEntries) => ({
//         ...prevEntries,
//         recycle: [],
//       }));
//     }
//   };

//   const getDefaultView = () => {
//     switch (field) {
//       case 'recent':
//         return 3;
//       case 'favorite':
//         return 5;
//       case 'userGenerated':
//         return 5;
//       case 'hopper':
//         return 15;
//       default:
//         return entries.length;
//     }
//   };

//   const getMaxView = () => {
//     switch (field) {
//       case 'recent':
//         return 10;
//       case 'favorite':
//         return 20;
//       default:
//         return entries.length;
//     }
//   };

//   const displayedEntries = isCollapsed
//     ? []
//     : isExpanded
//     ? entries.slice(0, getMaxView())
//     : entries.slice(0, getDefaultView());

//   return (
//     <div>
//       <h2>{title}</h2>
//       <button onClick={handleToggleCollapse}>
//         {isCollapsed ? 'Expand' : 'Collapse'}
//       </button>
//       {field !== 'recycle' && (
//         <button onClick={handleRecycle}>
//           Recycle All
//         </button>
//       )}
//       {field === 'recycle' && (
//         <button onClick={handleDeleteAll}>
//           Delete All
//         </button>
//       )}
//       {!isCollapsed && (
//         <>
//           {displayedEntries.length > 0 ? (
//             displayedEntries.map((entry) => (
//               <Entry key={entry.id} entry={entry} setEntries={setEntries} field={field} />
//             ))
//           ) : (
//             <p>No entries.</p>
//           )}
//           {field !== 'recycle' && entries.length > getDefaultView() && (
//             <button onClick={handleToggleExpand}>
//               {isExpanded ? 'Show Less' : 'Show More'}
//             </button>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Field;

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import Entry from './Entry';

// const Field = ({ title, entries, setEntries, field }) => {
//   const [isCollapsed, setIsCollapsed] = useState(entries.length === 0);
//   const [isExpanded, setIsExpanded] = useState(false);

//   useEffect(() => {
//     if (entries.length === 1) {
//       setIsCollapsed(false);
//     }
//   }, [entries.length]);

//   useEffect(() => {
//     if (entries.length === 0) {
//       setIsCollapsed(true);
//     }
//   }, [entries.length]);

//   const handleToggleCollapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const handleToggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const handleRecycle = () => {
//     if (entries.length === 0) {
//       return; // No entries, no action needed
//     }

//     if (entries.length === 1) {
//       // Only one entry, recycle without prompt
//       const recycledEntry = entries[0];
//       setEntries((prevEntries) => ({
//         ...prevEntries,
//         recycle: [recycledEntry, ...prevEntries.recycle],
//         [field]: [],
//       }));
//       return;
//     }

//     const confirmRecycle = window.confirm(`Are you sure you want to move all entries to the recycle field?`);
//     if (confirmRecycle) {
//       setEntries((prevEntries) => ({
//         ...prevEntries,
//         recycle: [...prevEntries.recycle, ...entries],
//         [field]: [],
//       }));
//     }
//   };

//   const handleDeleteAll = () => {
//     if (entries.length === 0) {
//       return; // No entries, no action needed
//     }

//     if (entries.length === 1) {
//       // Only one entry, delete without prompt
//       setEntries((prevEntries) => ({
//         ...prevEntries,
//         [field]: [],
//       }));
//       return;
//     }

//     const confirmDelete = window.confirm(`Are you sure you want to delete all entries?`);
//     if (confirmDelete) {
//       setEntries((prevEntries) => ({
//         ...prevEntries,
//         [field]: [],
//       }));
//     }
//   };

//   const getDefaultView = () => {
//     switch (field) {
//       case 'recent':
//         return 3;
//       case 'favorite':
//         return 5;
//       case 'userGenerated':
//         return 5;
//       case 'hopper':
//         return 15;
//       default:
//         return entries.length;
//     }
//   };

//   const getMaxView = () => {
//     switch (field) {
//       case 'recent':
//         return 10;
//       case 'favorite':
//         return 20;
//       default:
//         return entries.length;
//     }
//   };

//   const displayedEntries = isCollapsed
//     ? []
//     : isExpanded
//     ? entries.slice(0, getMaxView())
//     : entries.slice(0, getDefaultView());

//   return (
//     <div>
//       <h2>{title}</h2>
//       <button onClick={handleToggleCollapse}>
//         {isCollapsed ? 'Expand' : 'Collapse'}
//       </button>
//       {field !== 'recycle' && (
//         <button onClick={handleRecycle}>
//           Recycle All
//         </button>
//       )}
//       {field === 'recycle' && (
//         <button onClick={handleDeleteAll}>
//           Delete All
//         </button>
//       )}
//       {!isCollapsed && (
//         <>
//           {displayedEntries.length > 0 ? (
//             displayedEntries.map((entry) => (
//               <Entry key={entry.id} entry={entry} setEntries={setEntries} field={field} />
//             ))
//           ) : (
//             <p>No entries.</p>
//           )}
//           {field !== 'recycle' && entries.length > getDefaultView() && (
//             <button onClick={handleToggleExpand}>
//               {isExpanded ? 'Show Less' : 'Show More'}
//             </button>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Field;

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import Entry from './Entry';

// const Field = ({ title, entries, setEntries, field }) => {
//   const [isCollapsed, setIsCollapsed] = useState(entries.length === 0);
//   const [isExpanded, setIsExpanded] = useState(false);

//   useEffect(() => {
//     if (entries.length === 1) {
//       setIsCollapsed(false);
//     }
//   }, [entries.length]);

//   useEffect(() => {
//     if (entries.length === 0) {
//       setIsCollapsed(true);
//     }
//   }, [entries.length]);

//   const handleToggleCollapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const handleToggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const handleRecycle = () => {
//     if (entries.length === 0) {
//       return; // No entries, no action needed
//     }

//     if (entries.length === 1) {
//       // Only one entry, recycle without prompt
//       const recycledEntry = entries[0];
//       setEntries((prevEntries) => ({
//         ...prevEntries,
//         recycle: [recycledEntry, ...prevEntries.recycle],
//         [field]: [],
//       }));
//       return;
//     }

//     const confirmRecycle = window.confirm(`Are you sure you want to move all entries to the recycle field?`);
//     if (confirmRecycle) {
//       setEntries((prevEntries) => ({
//         ...prevEntries,
//         recycle: [...prevEntries.recycle, ...entries],
//         [field]: [],
//       }));
//     }
//   };

//   const handleDeleteAll = () => {
//     if (entries.length === 0) {
//       return; // No entries, no action needed
//     }

//     if (entries.length === 1) {
//       // Only one entry, delete without prompt
//       setEntries((prevEntries) => ({
//         ...prevEntries,
//         [field]: [],
//       }));
//       return;
//     }

//     const confirmDelete = window.confirm(`Are you sure you want to delete all entries?`);
//     if (confirmDelete) {
//       setEntries((prevEntries) => ({
//         ...prevEntries,
//         [field]: [],
//       }));
//     }
//   };

//   const moveEntryUp = (index) => {
//     if (index > 0) {
//       const newEntries = [...entries];
//       [newEntries[index], newEntries[index - 1]] = [newEntries[index - 1], newEntries[index]];
//       setEntries((prevEntries) => ({
//         ...prevEntries,
//         [field]: newEntries,
//       }));
//     }
//   };

//   const moveEntryDown = (index) => {
//     if (index < entries.length - 1) {
//       const newEntries = [...entries];
//       [newEntries[index], newEntries[index + 1]] = [newEntries[index + 1], newEntries[index]];
//       setEntries((prevEntries) => ({
//         ...prevEntries,
//         [field]: newEntries,
//       }));
//     }
//   };

//   const getDefaultView = () => {
//     switch (field) {
//       case 'recent':
//         return 3;
//       case 'favorite':
//         return 5;
//       case 'userGenerated':
//         return 5;
//       case 'hopper':
//         return 15;
//       default:
//         return entries.length;
//     }
//   };

//   const getMaxView = () => {
//     switch (field) {
//       case 'recent':
//         return 10;
//       case 'favorite':
//         return 20;
//       default:
//         return entries.length;
//     }
//   };

//   const displayedEntries = isCollapsed
//     ? []
//     : isExpanded
//     ? entries.slice(0, getMaxView())
//     : entries.slice(0, getDefaultView());

//   return (
//     <div>
//       <h2>{title}</h2>
//       <button onClick={handleToggleCollapse}>
//         {isCollapsed ? 'Expand' : 'Collapse'}
//       </button>
//       {field !== 'recycle' && (
//         <button onClick={handleRecycle}>
//           Recycle All
//         </button>
//       )}
//       {field === 'recycle' && (
//         <button onClick={handleDeleteAll}>
//           Delete All
//         </button>
//       )}
//       {!isCollapsed && (
//         <>
//           {displayedEntries.length > 0 ? (
//             displayedEntries.map((entry, index) => (
//               <div key={entry.id} className='entry'>
//                 <Entry entry={entry} setEntries={setEntries} field={field} />
//                 {field === 'hopper' && (
//                   <div className='entry-controls'>
//                     <button onClick={() => moveEntryUp(index)}>Up</button>
//                     <button onClick={() => moveEntryDown(index)}>Down</button>
//                   </div>
//                 )}
//               </div>
//             ))
//           ) : (
//             <p>No entries.</p>
//           )}
//           {field !== 'recycle' && entries.length > getDefaultView() && (
//             <button onClick={handleToggleExpand}>
//               {isExpanded ? 'Show Less' : 'Show More'}
//             </button>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Field;

///////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect, useRef } from 'react';
import Entry from './Entry';

const Field = ({ title, entries, setEntries, field }) => {
  const [isCollapsed, setIsCollapsed] = useState(field === 'recycle' || entries.length === 0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const synth = useRef(window.speechSynthesis);

  useEffect(() => {
    if (field !== 'recycle' && entries.length === 1) {
      setIsCollapsed(false);
    }
  }, [entries.length, field]);

  useEffect(() => {
    if (field !== 'recycle' && entries.length === 0) {
      setIsCollapsed(true);
    }
  }, [entries.length, field]);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleRecycle = () => {
    if (entries.length === 0) {
      return; // No entries, no action needed
    }

    if (entries.length === 1) {
      // Only one entry, recycle without prompt
      const recycledEntry = entries[0];
      setEntries((prevEntries) => ({
        ...prevEntries,
        recycle: [recycledEntry, ...prevEntries.recycle],
        [field]: [],
      }));
      return;
    }

    const confirmRecycle = window.confirm(`Are you sure you want to move all entries to the recycle field?`);
    if (confirmRecycle) {
      setEntries((prevEntries) => ({
        ...prevEntries,
        recycle: [...prevEntries.recycle, ...entries],
        [field]: [],
      }));
    }
  };

  const handleDeleteAll = () => {
    if (entries.length === 0) {
      return; // No entries, no action needed
    }

    if (entries.length === 1) {
      // Only one entry, delete without prompt
      setEntries((prevEntries) => ({
        ...prevEntries,
        [field]: [],
      }));
      return;
    }

    const confirmDelete = window.confirm(`Are you sure you want to delete all entries?`);
    if (confirmDelete) {
      setEntries((prevEntries) => ({
        ...prevEntries,
        [field]: [],
      }));
    }
  };

  const moveEntryUp = (index) => {
    if (index > 0) {
      const newEntries = [...entries];
      [newEntries[index], newEntries[index - 1]] = [newEntries[index - 1], newEntries[index]];
      setEntries((prevEntries) => ({
        ...prevEntries,
        [field]: newEntries,
      }));
    }
  };

  const moveEntryDown = (index) => {
    if (index < entries.length - 1) {
      const newEntries = [...entries];
      [newEntries[index], newEntries[index + 1]] = [newEntries[index + 1], newEntries[index]];
      setEntries((prevEntries) => ({
        ...prevEntries,
        [field]: newEntries,
      }));
    }
  };

  const handlePlay = () => {
    if (isPlaying) {
      synth.current.cancel();
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    playEntries(entries);
  };

  const playEntries = (entries) => {
    if (entries.length === 0) {
      setIsPlaying(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(entries[0].text);
    utterance.onend = () => {
      playEntries(entries.slice(1));
    };
    utterance.onerror = () => {
      setIsPlaying(false);
    };

    synth.current.speak(utterance);
  };

  const getDefaultView = () => {
    switch (field) {
      case 'recent':
        return 3;
      case 'favorite':
        return 5;
      case 'userGenerated':
        return 5;
      case 'hopper':
        return 15;
      default:
        return entries.length;
    }
  };

  const getMaxView = () => {
    switch (field) {
      case 'recent':
        return 10;
      case 'favorite':
        return 20;
      default:
        return entries.length;
    }
  };

  const displayedEntries = isCollapsed
    ? []
    : isExpanded
    ? entries.slice(0, getMaxView())
    : entries.slice(0, getDefaultView());

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={handleToggleCollapse}>
        {isCollapsed ? 'Expand' : 'Collapse'}
      </button>
      {field !== 'recycle' && (
        <button onClick={handleRecycle}>
          Recycle All
        </button>
      )}
      {field === 'recycle' && (
        <button onClick={handleDeleteAll}>
          Delete All
        </button>
      )}
      {field === 'hopper' && (
        <button onClick={handlePlay}>
          {isPlaying ? 'Stop' : 'Play'}
        </button>
      )}
      {!isCollapsed && (
        <>
          {displayedEntries.length > 0 ? (
            displayedEntries.map((entry, index) => (
              <div key={entry.id} className='entry'>
                <Entry entry={entry} setEntries={setEntries} field={field} />
                {field === 'hopper' && (
                  <div className='entry-controls'>
                    <button onClick={() => moveEntryUp(index)}>Up</button>
                    <button onClick={() => moveEntryDown(index)}>Down</button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No entries.</p>
          )}
          {field !== 'recycle' && entries.length > getDefaultView() && (
            <button onClick={handleToggleExpand}>
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Field;