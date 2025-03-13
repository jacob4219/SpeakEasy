import React from "react";
import { useDrag, useDrop } from 'react-dnd';
import { useDragAndDrop } from "./DragAndDropProvider";
import Entry from "./Entry";

const Bubble = ({ id, entry, field, setEntries, index, moveEntry }) => {
  const { moveItem } = useDragAndDrop();

  // Use react-dnd useDrag hook
  const [{ isDragging }, drag] = useDrag({
    type: 'ENTRY',
    item: { id, field, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  // Use react-dnd useDrop hook
  const [, drop] = useDrop({
    accept: 'ENTRY',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveEntry(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
    drop: (item) => {
      if (item.field !== field) {
        moveItem(item, item.field, field);
      }
    },
  });

  const style = {
    padding: "8px",
    margin: "4px 0",
    backgroundColor: "#fff",
    borderRadius: "4px",
    cursor: "grab",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
    opacity: isDragging ? 0.5 : 1, // Adjust opacity when dragging
  };

  return (
    <div ref={node => drag(drop(node))} style={style}>
      <Entry entry={entry} setEntries={setEntries} field={field} />
    </div>
  );
};

export default Bubble;