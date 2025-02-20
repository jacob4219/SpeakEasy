// import React, { useState } from "react";
// import { DndContext, closestCenter } from "@dnd-kit/core";
// import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
// import Button from "./Button";
// import Bubble from "./Bubble"; // Assuming a Bubble component exists
// import { generateUniqueID } from "./utils/idGenerator";

// const Hopper = () => {
//   const [hopperQueue, setHopperQueue] = useState([]);
//   const [silenceOptions, setSilenceOptions] = useState([1, 2, 3, 4, 5]); // Silent bubble durations stored in state

//   // Function to handle adding bubbles to the hopper
//   const addToHopper = (bubble) => {
//     setHopperQueue((prevQueue) => [...prevQueue, { ...bubble, id: generateUniqueID() }]);
//   };

//   // Function to add a silent pause bubble
//   const addSilence = (seconds) => {
//     setHopperQueue((prevQueue) => [...prevQueue, { id: generateUniqueID(), content: `Silence (${seconds}s)`, silence: seconds }]);
//   };

//   // Function to play the bubbles in sequence using a queue approach
//   const playQueue = async () => {
//     for (const bubble of hopperQueue) {
//       if (bubble.silence) {
//         await new Promise((resolve) => setTimeout(() => resolve(), bubble.silence * 1000));
//       } else {
//         speakText(bubble.content, bubble.voice);
//       }
//     }
//   };

//   return (
//     <div className="p-4 border rounded-lg bg-gray-100">
//       <h2 className="text-xl font-bold mb-2">Hopper Queue</h2>
//       <DndContext collisionDetection={closestCenter}>
//         <SortableContext items={hopperQueue} strategy={verticalListSortingStrategy}>
//           {hopperQueue.map((bubble) => (
//             <Bubble key={bubble.id} bubble={bubble} />
//           ))}
//         </SortableContext>
//       </DndContext>
//       <div className="mt-4 flex gap-2">
//         {silenceOptions.map((sec) => (
//           <Button key={sec} onClick={() => addSilence(sec)}>{sec}s Silence</Button>
//         ))}
//       </div>
//       <Button className="mt-4" onClick={playQueue}>Play Hopper</Button>
//     </div>
//   );
// };

// export default Hopper;

//////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import { DndContext, closestCenter, useDroppable } from "@dnd-kit/core";
// import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
// import { arrayMove } from "@dnd-kit/sortable";
// import Button from "./Button"; // Ensure Button is correctly imported
// import SortableItem from "../SpeakBox/SortableItem"; // Correct import
// import { generateUniqueID } from "./utils/idGenerator"; // Ensure correct path

// const Hopper = () => {
//   const [hopperQueue, setHopperQueue] = useState([]);
//   const silenceOptions = [1, 2, 3, 4, 5];

//   // Droppable area for external text items
//   const { setNodeRef } = useDroppable({
//     id: "hopper",
//     data: { accepts: ["text"] }, // Ensure it only accepts text items
//   });

//   // Function to add a new item to the queue
//   const addToHopper = (content, isSilence = false) => {
//     setHopperQueue((prevQueue) => [
//       ...prevQueue,
//       {
//         id: generateUniqueID(),
//         content: isSilence ? `Silence (${content}s)` : content,
//         silence: isSilence ? content : null,
//       },
//     ]);
//   };

//   // Handle drag end - supports internal reordering and external drops
//   const handleDragEnd = (event) => {
//     const { active, over } = event;
//     if (!over || active.id === over.id) return; // Prevent errors

//     // If the item is from SpeechToText (external source)
//     if (active.data.current?.text) {
//       addToHopper(active.data.current.text);
//       return;
//     }

//     // Handle reordering within Hopper
//     setHopperQueue((items) => {
//       const oldIndex = items.findIndex((item) => item.id === active.id);
//       const newIndex = items.findIndex((item) => item.id === over.id);
//       return arrayMove(items, oldIndex, newIndex);
//     });
//   };

//   return (
//     <div ref={setNodeRef} className="p-4 border rounded-lg bg-gray-100">
//       <h2 className="text-xl font-bold mb-2">Hopper Queue</h2>

//       {/* Drag and Drop Context */}
//       <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
//         <SortableContext items={hopperQueue.map((item) => item.id)} strategy={verticalListSortingStrategy}>
//           {hopperQueue.map((bubble) => (
//             <SortableItem key={bubble.id} id={bubble.id} content={bubble.content} />
//           ))}
//         </SortableContext>
//       </DndContext>

//       {/* Silence Button Options */}
//       <div className="mt-4 flex gap-2">
//         {silenceOptions.map((sec) => (
//           <Button key={sec} onClick={() => addToHopper(sec, true)}>
//             {sec}s Silence
//           </Button>
//         ))}
//       </div>

//       {/* Play Button */}
//       <Button className="mt-4" onClick={() => console.log("Play Queue")}>
//         Play Hopper
//       </Button>
//     </div>
//   );
// };

// export default Hopper;

////////////////////////////////////////////////////////////////////////////////////////

// import React from "react";
// import { DndContext, closestCenter, useDroppable } from "@dnd-kit/core";
// import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
// import { arrayMove } from "@dnd-kit/sortable";
// import Button from "./Button"; 
// import SortableItem from "../SpeakBox/SortableItem"; 
// import { generateUniqueID } from "./utils/idGenerator"; 
// import { useDragAndDrop } from "./DragAndDropProvider"; // ✅ Fix: Ensure entries come from here

// const Hopper = () => {
//   const { entries, setEntries } = useDragAndDrop();
//   const hopperQueue = entries.hopper || []; // ✅ Fix: Ensure it’s an array

//   const { setNodeRef } = useDroppable({
//     id: "hopper",
//     data: { accepts: ["text"] }, 
//   });

//   // Add item to Hopper
//   const addToHopper = (content, isSilence = false) => {
//     setEntries((prevEntries) => ({
//       ...prevEntries,
//       hopper: [
//         ...prevEntries.hopper,
//         {
//           id: generateUniqueID(),
//           content: isSilence ? `Silence (${content}s)` : content,
//           silence: isSilence ? content : null,
//         },
//       ],
//     }));
//   };

//   // Handle Drag End
//   const handleDragEnd = (event) => {
//     const { active, over } = event;
//     if (!over || active.id === over.id) return; 

//     if (active.data.current?.text) {
//       addToHopper(active.data.current.text);
//       return;
//     }

//     setEntries((prevEntries) => ({
//       ...prevEntries,
//       hopper: arrayMove(prevEntries.hopper, prevEntries.hopper.findIndex((item) => item.id === active.id), prevEntries.hopper.findIndex((item) => item.id === over.id)),
//     }));
//   };

//   return (
//     <div ref={setNodeRef} className="p-4 border rounded-lg bg-gray-100">
//       <h2 className="text-xl font-bold mb-2">Hopper Queue</h2>

//       <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
//         <SortableContext items={hopperQueue.map((item) => item.id)} strategy={verticalListSortingStrategy}>
//           {hopperQueue.map((bubble) => (
//             <SortableItem key={bubble.id} id={bubble.id} content={bubble.content} />
//           ))}
//         </SortableContext>
//       </DndContext>

//       <div className="mt-4 flex gap-2">
//         {[1, 2, 3, 4, 5].map((sec) => (
//           <Button key={sec} onClick={() => addToHopper(sec, true)}>
//             {sec}s Silence
//           </Button>
//         ))}
//       </div>

//       <Button className="mt-4" onClick={() => console.log("Play Queue")}>
//         Play Hopper
//       </Button>
//     </div>
//   );
// };

// export default Hopper;


//////////////////////////////

import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Button from "./Button";
import SortableItem from "./SortableItem"; // Ensure correct import
import { generateUniqueID } from "./utils/idGenerator";
import { useAudioSettings } from "./AudioSettingsContext";

const Hopper = () => {
  const [hopperQueue, setHopperQueue] = useState([]);
  const { voices, audioSettings } = useAudioSettings();
  const silenceOptions = [1, 2, 3, 4, 5]; // Predefined silence durations

  // Function to add an item to the hopper queue
  const addToHopper = (content, isSilence = false) => {
    setHopperQueue((prevQueue) => [
      ...prevQueue,
      {
        id: generateUniqueID(),
        content: isSilence ? `Silence (${content}s)` : content,
        silence: isSilence ? content : null,
      },
    ]);
  };

  // Function to play the queue in sequence
  const speakText = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = voices.find((v) => v.name === audioSettings.selectedVoice) || null;
    utterance.voice = voice;
    utterance.volume = audioSettings.volume;
    utterance.rate = audioSettings.rate;
    utterance.pitch = audioSettings.pitch;
    synth.speak(utterance);
  };

  const playQueue = async () => {
    for (const bubble of hopperQueue) {
      if (bubble.silence) {
        await new Promise((resolve) => setTimeout(resolve, bubble.silence * 1000));
      } else {
        speakText(bubble.content);
      }
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-gray-100">
      <h2 className="text-xl font-bold mb-2">Hopper Queue</h2>

      {/* Drag and Drop Context */}
      <DndContext collisionDetection={closestCenter}>
        <SortableContext items={hopperQueue.map((item) => item.id)} strategy={verticalListSortingStrategy}>
          {hopperQueue.map((bubble) => (
            <SortableItem key={bubble.id} id={bubble.id} content={bubble.content} />
          ))}
        </SortableContext>
      </DndContext>

      {/* Silence Buttons */}
      <div className="mt-4 flex gap-2">
        {silenceOptions.map((sec) => (
          <Button key={sec} onClick={() => addToHopper(sec, true)}>
            {sec}s Silence
          </Button>
        ))}
      </div>

      {/* Play Button */}
      <Button className="mt-4" onClick={playQueue}>
        Play Hopper
      </Button>
    </div>
  );
};

export default Hopper;