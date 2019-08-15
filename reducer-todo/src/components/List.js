import React from 'react';


const List = (props) => {

    console.log('Props:', props)

    return (
        <div>
            {props.todoList.map((item)=> {
                console.log(item);
               return <div key={item.id}
                    className={ item.completed ? "completed": "" }
                    onClick={ () => props.toggleItem(item.id) }
                >
                {item.item}
                </div>
            })}
            <button onClick={ () => props.clearCompleted()} > Clear Completed </button>
        </div>
    )
};

export default List;
