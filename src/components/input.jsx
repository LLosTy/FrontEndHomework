import React from 'react';

const Input = () => {
    return (
        <div class="input-group mb-3">
             <input type="text" class="form-control" aria-label="Add Item" aria-describedby="button-addon2"></input>
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add Item</button>
        </div>
    )
}
export default Input;