// import React from "react";
// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";

// const SortableItem = ({ id, content }) => {
//   const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//     padding: "8px",
//     margin: "4px 0",
//     backgroundColor: "#fff",
//     borderRadius: "4px",
//     cursor: "grab",
//     boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
//   };

//   return (
//     <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
//       {content}
//     </div>
//   );
// };

// export default SortableItem;


//////////////////////////////////////////////////////////////////////////////////////

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableItem = ({ id, content }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id,
    data: { id },
  });

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
    </div>
  );
};

export default SortableItem;