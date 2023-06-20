// import React from 'react';
// import { Button } from 'react-bootstrap';

// const ToggleButton = ({ toggled, onToggle }) => {
//   return (
//     <Button variant={toggled ? "success" : "secondary"} onClick={onToggle}>
//       {toggled ? "Unlock" : "Lock"}
//     </Button>
//   );
// };

// export default ToggleButton;

// Newest working code above, New new new!!!~~~
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { Button } from 'react-bootstrap';

const ToggleButton = ({ toggled, onToggle }) => {
  return (
    <Button variant={toggled ? "success" : "secondary"} onClick={onToggle}>
      {toggled ? "Unlock" : "Lock"}
    </Button>
  );
};

export default ToggleButton;

