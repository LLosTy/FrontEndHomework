import React, { useState} from "react";


// Add a card with the title of the list
// the lists should be stored inside an array
// the button should navigate to "/#name of list#" 
// the list will be iterated through a for loop
// the index will be used for the destination of the button
// adding a list
//              ===TODO===
// deleting a list (only owner -- just do this by toggle)
// archiving a list (just add into archived array(the same as items in a list))
// filtering (archived/not archived)
// toggle between owner and not owner
// LETS NOT DO ROUTING RN CAUSE IT PROLLY WONT WORK --- THE MAIN GOAL IS TO JUST DISPLAY THEM


const TileView1 = () => {
    const [lists, setList] = useState([
        "List1",
        "List2",
        "List3"
      ]);

  const [newList, setNewList] = useState('');


      const handleAddList = () => {
        if (newList.trim() !== '') {
          setList([...lists, newList]);
          setNewList('');
        }
      };

      const handleRemoveList = (index) => {
        const updatedLists = [...lists];
        updatedLists.splice(index, 1);
        setList(updatedLists)
      }

      //       const [resolvedItems, setResolvedItems] = useState([]);
      const[archivedLists, setArchivedList] = useState([]);

      const handleAddToArchived = (index) => {
            const archivedList = lists[index];
            setArchivedList([...archivedLists, archivedList]);
        
            // Remove the resolved item from the original items list
            const updatedLists = [...lists];
            updatedLists.splice(index, 1);
            setList(updatedLists);
          };


    //   const handleAddToResolved = (index) => {
    //     const resolvedItem = items[index];
    //     setResolvedItems([...resolvedItems, resolvedItem]);
    
    //     // Remove the resolved item from the original items list
    //     const updatedItems = [...items];
    //     updatedItems.splice(index, 1);
    //     setItems(updatedItems);
    //   };

    


    return(
        <div>
            <h1>Active Lists</h1>
            {lists.map((list,index) => (
                <div class="card mb-3">
                    <div class="card-body">
                            {/* <a class ="btn"href={`/${list}`}> */}
                                <h5 class="card-title">
                                    {list}
                                </h5>
                            {/* </a> */}
                        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                        <a class="btn btn-primary" href={`/${list}`}>Go somewhere</a>
                        <a class="btn btn-warning" onClick={() => handleAddToArchived(index)}>Archive list</a>
                        <a class="btn btn-danger" onClick={() => handleRemoveList(index)}>Delete list</a>
                    </div>
                </div>
            ))
        }
            <h1>Archived Lists</h1>
            {archivedLists.map((listArchived,index) => (
                <div class="card mb-3">
                    <div class="card-body">
                            {/* <a class ="btn"href={`/${list}`}> */}
                                <h5 class="card-title">
                                    {listArchived}
                                </h5>
                            {/* </a> */}
                        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                        <a class="btn btn-primary" href={`/${listArchived}`}>Go somewhere</a>
                        <a class="btn btn-warning" onClick={() => handleAddToArchived(index)}>Archive list</a>
                        <a class="btn btn-danger" onClick={() => handleRemoveList(index)}>Delete list</a>
                    </div>
                </div>
            ))
        }
            {/* {archivedLists} */}
            <h1>hello</h1>
            {/* <!-- Button trigger modal --> */}
                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add List
                </button>

                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Add new list</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h6>New List name:</h6>
                        <input class="form-control" type="text" placeholder="Default input" aria-label="default input example" value={newList} onChange={(e) => setNewList(e.target.value)}></input>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button 
                        type="button" 
                        class="btn btn-primary"
                        onClick={handleAddList}
                        >Add new list</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>

    );
};
export default TileView1;