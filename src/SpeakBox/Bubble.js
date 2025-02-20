// import React from "react";

// const Bubble = ({ bubble }) => {
//   return (
//     <div>
//       <p>{bubble.content}</p>
//     </div>
//   );
// };

// export default Bubble;

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useDragAndDrop } from "./DragAndDropProvider";

const Bubble = ({ id, content, fromComponent }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const { moveItem } = useDragAndDrop();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "8px",
    margin: "4px 0",
    backgroundColor: "#fff",
    borderRadius: "4px",
    cursor: "grab",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {content}
      <button onClick={() => moveItem({ id, content }, fromComponent, fromComponent === "bubbles" ? "hopper" : "bubbles")}>
        Move
      </button>
    </div>
  );
};

export default Bubble;
