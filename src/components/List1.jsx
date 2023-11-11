import React, { useState } from 'react';

const List1 = () => {
  const [items, setItems] = useState([
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ]);
  const [resolvedItems, setResolvedItems] = useState([]);
  const [listName, setListName] = useState("List1");
  const [isInputVisible, setIsInputVisible] = useState(true);
  const [newItem, setNewItem] = useState('');
  let [isResolvedVisible, setResolvedVisible] = useState(true);
  let [isUnresolvedVisible, setUnresolvedVisible] = useState(true);

  

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleAddToResolved = (index) => {
    const resolvedItem = items[index];
    setResolvedItems([...resolvedItems, resolvedItem]);

    // Remove the resolved item from the original items list
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleToggleInput = () => {
    setIsInputVisible(!isInputVisible);
  };
  
  const handleAddNewItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const handleToggleResolved = () => {
    setResolvedVisible(isResolvedVisible = true);
    setUnresolvedVisible(isUnresolvedVisible = false);
  }

  const handleToggleUnresolved = () => {
    setUnresolvedVisible(isUnresolvedVisible = true);
    setResolvedVisible(isResolvedVisible = false);
  }

  const handleToggleAll = () => {
    setUnresolvedVisible(isUnresolvedVisible = true);
    setResolvedVisible(isResolvedVisible = true);

    // handleToggleResolved()
    // handleToggleUnresolved()
  }

  return (
    // Buttons for filter switching 
    <div>
      <div class="d-flex justify-content-center">
       <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class={`btn btn-primary ${(isResolvedVisible && isUnresolvedVisible) === true ? 'active' : ''}`} onClick={handleToggleAll}>All</button>
          {/* for some reason the logic is flipped or im just stupid lol */}
          <button type="button" class={`btn btn-primary ${(isResolvedVisible  === true && isUnresolvedVisible === false)? 'active' : ''}`} onClick={handleToggleResolved}>Unresolved</button> 
          <button type="button" class={`btn btn-primary ${(isUnresolvedVisible === true && isResolvedVisible === false)? 'active' : ''}`} onClick={handleToggleUnresolved}>Resolved</button>
        </div>
      </div>
      {/* {resolvedItems} */}
      <div className="input-group">
        
      {/* List name + list name editor + buttons */}

        {isInputVisible ? (
          listName
        ) : (
          <>
            <input
              type="text"
              className="form-control"
              id="listNameInput"
              placeholder={listName}
              aria-label="List Name"
              onChange={(e) => setListName(e.target.value)}
            />
          </>
        )}
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleToggleInput}
        >
          {isInputVisible ? 'Edit' : 'Save'}
        </button>
      </div>

      {/* Add new item input field */}
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="New Item"
          aria-label="AddItem"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-success"
          onClick={handleAddNewItem}
        >
          Add New Item
        </button>
      </div>

{/* 
        // all - resolved true, unresolved true
        // show resolved items list only when showResolvedItems variable = true
        // show unresolved items list only when showUnresolvedItems variable = true
        // unresolved items list = items array
        // resolved items list = resolvedItems array
 */}


        {isResolvedVisible ? 
          // render Unresolved Items
          <>
      <h2>Unresolved Items</h2>
      <ul className="list-group">
        {items.map((item, index) => (
          <div className='d-flex'>
            <li
              key={index}
              className="list-group-item flex-grow-1"
            >
              {item}
              <button
                type="button"
                className="btn btn-info btn-sm"
                onClick={() => handleAddToResolved(index)}
              >
                Resolved
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => handleRemoveItem(index)}
              >
                Remove
              </button>
            </li>
          </div>
        ))}
      </ul>
        </>
         : 
          // Render Nothing
         <div></div>
          
        }

      {/* Render Unresolved Items */}
        

        {isUnresolvedVisible ? 
          // render Resolved Items
          <>
            <div>
              <h2>Resolved Items</h2>
              <ul className="list-group">
                {resolvedItems.map((item, index) => (
                  <li key={index} className="list-group-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </>
           : 
            // Render Nothing
            <div></div>
        }


      {/* Render Resolved Items */}
    </div>
  );
};

export default List1;
