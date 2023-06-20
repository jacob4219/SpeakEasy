// import React from 'react';
// import { Dropdown } from 'react-bootstrap';

// const CustomDropdown = ({ title, children }) => {
//   return (
//     <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         {title}
//       </Dropdown.Toggle>
//       <Dropdown.Menu>
//         {children}
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// };

// export default CustomDropdown;

// Newest working code above, New new new!!!~~~
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from 'react';
import { Dropdown } from 'react-bootstrap';

const CustomDropdown = ({ title, children }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {title}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {children}
      </Dropdown.Menu>
    </Dropdown>
  );
};

CustomDropdown.Item = Dropdown.Item; // define Item here

export default CustomDropdown;


