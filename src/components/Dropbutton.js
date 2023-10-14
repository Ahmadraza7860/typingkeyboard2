import React, { useState } from 'react';

const DropdownButton = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="option1">Darken-Black</option>
        <option value="option2">Darken-Grey</option>
        <option value="option3">Blue</option>
        <option value="option4">Green</option>
        <option value="option4">Orange</option>
      </select>
     
    </div>
  );
};

export default DropdownButton;
