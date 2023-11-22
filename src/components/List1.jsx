import React, { useState } from 'react';
import Modal from './modal';


// TODO : 
// Maybe add a button to the list name directly to show rename box
// Make sure list is not empty
// move is owner toggle to the right of the screen, maybe do it like Is Owner: True/False
// List Name - make bigger, when in editing mode make the box less wide
// New Item - make less wide
// Align Remove and Resolve buttons to the right
// Unresolved items - padding/maragin, make it more visually separate
// Resolved items - padding/maragin, make it more visually separate
// Members items - padding/maragin, make it more visually separate
// Add member - make less wide
// Navbar - Remove the unnecesarry buttons
// Error 404 - cleanup

const List1 = () => {
  const [items, setItems] = useState([
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ]);

  const [members, setMembers] = useState([
    "User1",
    "User2",
  ])

  const [newMember, setNewMember] = useState('');

  const handleAddNewMember = () => {
    if (newMember.trim() !== '') {
      setMembers([...members, newMember]);
      setNewMember('');
    }
  }

  const handleRemoveMember = (index) => {
    const updatedMembers = [...members];
    updatedMembers.splice(index, 1);
    setMembers(updatedMembers)
  }
  
  const [isOwner, setIsOwner] = useState(true);

  const handleSetOwner = () => {
    setIsOwner(!isOwner);
  }
  

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
      <div class="form-check form-switch d-flex justify-content-end p-2 ">
        <input class="form-check-input me-2" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={isOwner}  onChange={handleSetOwner}></input>
        <label class="form-check-label" for="flexSwitchCheckDefault">Is Owner: {isOwner ? "True" : "False"}</label>
      </div>
      
      <div class={`input-group row  ${(isOwner)? 'justify-content-end' : 'justify-content-center'}`}>
      {/* <div className="input-group row justify-content-end"> */}
        
        {/* List name + list name editor + buttons */}

          {isInputVisible ? (
            // List Name
            <div className='col-4 text-center mb-1'>
              <h2>{listName}</h2>
            </div>
          ) : (
            <>
            {/* List Name Text Edit Box */}
              <div className='col-4 mb-2'>
                <input
                  type="text"
                  className="form-control"
                  id="listNameInput"
                  placeholder={listName}
                  aria-label="List Name"
                  onChange={(e) => setListName(e.target.value)}
                  />
              </div>
            </>
          )}
          {/* Shows the edit button if the user is owner */}
          {isOwner ? 
          <>
            <div className='col-4 mb-2'>
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handleToggleInput}
              >
                {isInputVisible ? 'Edit' : 'Save'}
              </button>
          </div>
          </>:
          <div></div>
          }
      </div>
      

      <div class="d-flex justify-content-center p-2">
       <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class={`btn btn-primary ${(isResolvedVisible && isUnresolvedVisible) === true ? 'active' : ''}`} onClick={handleToggleAll}>All</button>
          {/* for some reason the logic is flipped or im just stupid lol */}
          {/* Fix the resolved and unresolved filter (is flipped in the rendering below) */}
          <button type="button" class={`btn btn-primary ${(isResolvedVisible  === true && isUnresolvedVisible === false)? 'active' : ''}`} onClick={handleToggleResolved}>Unresolved</button> 
          <button type="button" class={`btn btn-primary ${(isUnresolvedVisible === true && isResolvedVisible === false)? 'active' : ''}`} onClick={handleToggleUnresolved}>Resolved</button>
        </div>
      </div>

      {/* Add new item input field */}
      <div className="input-group input-group p-2 pe-3 ps-3">
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
      <h2 className='p-2 m-2'>Unresolved Items</h2>
      <ul className="list-group">
        {items.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex me-3 ms-3"
            >
              <div className='flex-grow-1 p-2'>
                {item}
              </div>
              <button
                type="button"
                className="btn btn-primary btn-sm m-1"
                onClick={() => handleAddToResolved(index)}
              >
                Resolved
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm m-1"
                onClick={() => handleRemoveItem(index)}
              >
                Remove
              </button>
            </li>
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
              <h2 className='p-2 m-2'>Resolved Items</h2>
              <ul className="list-group">
                {resolvedItems.map((item, index) => (
                  <li key={index} className="list-group-item d-flex me-3 ms-3">
                    <div className='flex-grow-1 p-2'>
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
           : 
            // Render Nothing
            <div></div>
        }


      {/* Member Render */}
        
      <h2 className='p-2 m-2'>Members</h2>  
        {isOwner ? <>
        <div class="input-group pe-3 ps-3 mb-2">
          <div class="input-group-text" id="btnGroupAddon">@</div>
          <input type="text" class="form-control" placeholder="Member Username" aria-label="Add New Member" value={newMember} onChange={(e) => setNewMember(e.target.value)}></input>
          <button type="button" class="btn btn-success" onClick={handleAddNewMember}>Add Member</button>
        </div>
          </> : <div></div>}
        <ul className="list-group">
        {members.map((memberItem, memberIndex) => (
            <li
              key={memberIndex}
              className="list-group-item d-flex me-3 ms-3"
            >
              <div className='flex-grow-1 p-2'>
                {memberItem}
              </div>
              {isOwner ? <>
             <button
                type="button"
                className="btn btn-danger btn-sm m-1"
                // onClick={() => handleRemoveItem(index)}
                onClick={() => handleRemoveMember(memberIndex)}
              >
                Remove
              </button>
              </> : <div></div>}
            </li>
        ))}
      </ul>
        {isOwner ?  <div></div> : 
        <>
          <div class="d-flex justify-content-center mt-5 m-2 p-2">
            <Modal></Modal>
          </div>
        </>
} 

    </div>
  );
};

export default List1;
