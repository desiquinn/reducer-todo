import React from 'react';

const List = (props) => {

    console.log('Props:', props)

    return (
        <div>
            {props.todoList.map((item)=> (
                <div key={item.id}
                    className={`item${item.completed ? ' completed' : ''}`}
                    onClick={ () => props.toggleItem(item) }
                >
                {item.item}
                </div>
            ))}
            <button onClick={ () => props.clearCompleted} > Clear Completed </button>
        </div>
    )
};

export default List;
