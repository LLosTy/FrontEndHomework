import React, { useState } from 'react';

const List1 = () => {
  const [items, setItems] = useState(["An item", "A second item", "A third item", "A fourth item", "And a fifth one"]);

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          {item}
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => handleRemoveItem(index)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List1;
