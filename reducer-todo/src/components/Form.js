import React, { useState } from 'react';

const Form = (props) => {

    const [item, setItem] = useState('');

    console.log(props)

    const handleChange = (event) => {
        console.log("Whats the name:", event.target.name);
        console.log("Whats the value:", event.target.value);
        setItem(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(props);
        props.addToDo(item);
        setItem("");
    };

 
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='item'
                value={item}
                onChange={handleChange}
            />
            <button type='submit'>Add New Item</button>
        </form>
    )

}

export default Form;