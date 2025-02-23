import React from 'react';
import Entry from './Entry';

const Field = ({ title, entries, setEntries, field }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{title}</h3>
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

/////////////////////////////////////////////////////////////////////////////////////////////////

// import React from "react";
// import { DndContext, closestCenter } from "@dnd-kit/core";
// import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
// import { useDragAndDrop } from "./DragAndDropProvider"; // Drag and drop context
// import SortableItem from "./SortableItem"; // Drag-and-drop enabled bubble

// const Field = ({ title, entries, field }) => {
//   const { moveItem, entries: allEntries, setEntries } = useDragAndDrop(); // Access global state

//   const handleDragEnd = (event) => {
//     const { active, over } = event;
//     if (!over || active.id === over.id) return;

//     const fromField = active.data.current?.field;
//     const toField = over.data.current?.field || field;

//     if (!fromField || !toField) return;

//     if (fromField === toField) {
//       // Reorder inside the same field
//       setEntries((prevEntries) => {
//         const updatedItems = arrayMove(prevEntries[fromField], 
//           prevEntries[fromField].findIndex((item) => item.id === active.id), 
//           prevEntries[fromField].findIndex((item) => item.id === over.id)
//         );
//         return { ...prevEntries, [fromField]: updatedItems };
//       });
//     } else {
//       // Move across different fields
//       const draggedItem = allEntries[fromField].find((item) => item.id === active.id);
//       if (draggedItem) moveItem(draggedItem, fromField, toField);
//     }
//   };

//   return (
//     <div className="p-4 border rounded-lg bg-white shadow-md">
//       <h3 className="text-lg font-semibold mb-2">{title}</h3>

//       <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
//         <SortableContext items={entries.map((entry) => entry.id)} strategy={verticalListSortingStrategy}>
//           {entries.length > 0 ? (
//             entries.map((entry) => (
//               <SortableItem key={entry.id} id={entry.id} content={entry.text} field={field} />
//             ))
//           ) : (
//             <p className="text-gray-500">No entries available.</p>
//           )}
//         </SortableContext>
//       </DndContext>
//     </div>
//   );
// };

// export default Field;