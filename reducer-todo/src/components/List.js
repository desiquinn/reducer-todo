import React from 'react';

const List = (props) => {

    console.log('Props:', props)

    return (
        <div>
            <p>This is where my ToDo List Items will Go!</p>
            {props.todoList.map((item)=> {
                return <p key={item.id}>{item.item}</p>
            })}
        </div>
    )
};

export default List;
