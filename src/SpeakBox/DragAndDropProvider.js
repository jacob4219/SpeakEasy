// import React, { createContext, useState, useContext } from "react";
// import { generateUniqueID } from "./utils/idGenerator"; // Ensure correct path

// const DragAndDropContext = createContext();

// export const DragAndDropProvider = ({ children }) => {
//   const [hopperQueue, setHopperQueue] = useState([]); // Hopper queue
//   const [bubbles, setBubbles] = useState([]); // Main text bubbles list

//   // Function to move an item between components
//   const moveItem = (item, from, to) => {
//     setBubbles((prev) => (from === "bubbles" ? prev.filter((b) => b.id !== item.id) : prev));
//     setHopperQueue((prev) => (from === "hopper" ? prev.filter((h) => h.id !== item.id) : prev));

//     const newItem = { ...item, id: generateUniqueID() }; // Ensure uniqueness
//     if (to === "bubbles") setBubbles((prev) => [...prev, newItem]);
//     if (to === "hopper") setHopperQueue((prev) => [...prev, newItem]);
//   };

//   return (
//     <DragAndDropContext.Provider value={{ hopperQueue, setHopperQueue, bubbles, setBubbles, moveItem }}>
//       {children}
//     </DragAndDropContext.Provider>
//   );
// };

// export const useDragAndDrop = () => useContext(DragAndDropContext);

////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { createContext, useState, useContext } from "react";
// import { generateUniqueID } from "./utils/idGenerator";

// const DragAndDropContext = createContext();

// export const DragAndDropProvider = ({ children }) => {
//   const [entries, setEntries] = useState({
//     recent: [],
//     favorite: [],
//     recycle: [],
//     userGenerated: [],
//     hopper: [],
//   });

//   // Move item between fields
//   const moveItem = (item, from, to) => {
//     setEntries((prevEntries) => {
//       const updatedFrom = prevEntries[from]?.filter((entry) => entry.id !== item.id) || [];
//       const updatedTo = [...prevEntries[to], { ...item, id: generateUniqueID() }];

//       return {
//         ...prevEntries,
//         [from]: updatedFrom,
//         [to]: updatedTo,
//       };
//     });
//   };

//   return (
//     <DragAndDropContext.Provider value={{ entries, setEntries, moveItem }}>
//       {children}
//     </DragAndDropContext.Provider>
//   );
// };

// export const useDragAndDrop = () => useContext(DragAndDropContext);



///////////////////////////////////////////////////////


import React, { createContext, useState, useContext } from "react";
import { generateUniqueID } from "./utils/idGenerator";

const DragAndDropContext = createContext();

export const DragAndDropProvider = ({ children }) => {
  const [entries, setEntries] = useState({
    recent: [],
    favorite: [],
    recycle: [],
    userGenerated: [],
    hopper: [],
  });

  // Move item between fields
  const moveItem = (item, from, to) => {
    setEntries((prevEntries) => {
      // Ensure fields exist
      const updatedFrom = prevEntries[from]?.filter((entry) => entry.id !== item.id) || [];
      const updatedTo = [...(prevEntries[to] || []), { ...item, field: to }]; // Preserve ID

      return {
        ...prevEntries,
        [from]: updatedFrom,
        [to]: updatedTo,
      };
    });
  };

  return (
    <DragAndDropContext.Provider value={{ entries, setEntries, moveItem }}>
      {children}
    </DragAndDropContext.Provider>
  );
};

export const useDragAndDrop = () => useContext(DragAndDropContext);
