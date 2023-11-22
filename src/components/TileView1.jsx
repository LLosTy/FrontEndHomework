import React, { useState} from "react";


// Add a card with the title of the list
// the lists should be stored inside an array
// the button should navigate to "/#name of list#" 
// the list will be iterated through a for loop
// the index will be used for the destination of the button
// toggle between owner and not owner
// filtering (archived/not archived)
// adding a list
// deleting a list (only owner -- just do this by toggle)
// archiving a list (just add into archived array(the same as items in a list))
// LETS NOT DO ROUTING RN CAUSE IT PROLLY WONT WORK --- THE MAIN GOAL IS TO JUST DISPLAY THEM


const TileView1 = () => {
    const [lists, setList] = useState([
        "List1",
        "List2",
        "List3"
      ]);


    return(
        <div>
            {lists.map((list,index) => (
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">{list}</h5>
                        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                        <a class="btn btn-primary" href={`/${list}`}>Go somewhere</a>
                    </div>
                </div>
            ))
            }
            <h1>hello</h1>
        </div>

    );
};
export default TileView1;