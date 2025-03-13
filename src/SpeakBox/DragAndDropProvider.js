import React, { createContext, useState, useContext } from "react";

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
      const updatedFrom = prevEntries[from]?.filter((entry) => entry.id !== item.id) || [];
      const updatedTo = [...(prevEntries[to] || []), { ...item, field: to }];

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