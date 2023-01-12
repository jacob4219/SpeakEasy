import React, { useState, useEffect } from 'react';

const TextInputField = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    // some logic here that uses the text variable
  }, [text]);

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
};

export default TextInputField;
