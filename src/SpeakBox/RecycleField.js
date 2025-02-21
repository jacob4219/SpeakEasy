import React from "react";
import { DndContext, closestCenter, useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { useDragAndDrop } from "./DragAndDropProvider";
import SortableItem from "./SortableItem";

const RecycleField = () => {
  const { entries, moveItem, setEntries } = useDragAndDrop();
  const field = 'recycle';
  const { setNodeRef } = useDroppable({ id: field });

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const fromField = active.data.current?.field;
    const toField = over.data.current?.field || field;

    if (!fromField || !toField) return;

    if (fromField === toField) {
      // Reorder inside the same field
      setEntries((prevEntries) => {
        const updatedItems = arrayMove(prevEntries[fromField], 
          prevEntries[fromField].findIndex((item) => item.id === active.id), 
          prevEntries[fromField].findIndex((item) => item.id === over.id)
        );
        return { ...prevEntries, [fromField]: updatedItems };
      });
    } else {
      // Move across different fields
      const draggedItem = entries[fromField].find((item) => item.id === active.id);
      if (draggedItem) moveItem(draggedItem, fromField, toField);
    }
  };

  return (
    <div ref={setNodeRef} className="p-4 border rounded-lg bg-white shadow-md">
      <h3 className="text-lg font-semibold mb-2">Recycle</h3>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={entries.recycle.map((entry) => entry.id)} strategy={verticalListSortingStrategy}>
          {entries.recycle.length > 0 ? (
            entries.recycle.map((entry) => (
              <SortableItem key={entry.id} id={entry.id} content={entry.text} field={field} />
            ))
          ) : (
            <p className="text-gray-500">No entries available.</p>
          )}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default RecycleField;