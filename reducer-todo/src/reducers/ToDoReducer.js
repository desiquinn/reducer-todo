
// exporting intial state which needs to be an object, but we want to add items
// so it needs to be an array inside the object, with an object for each item
// initial state has to be an object so that it can contain all of the shared state
// that our application needs to funtion.  It's easier to just add another key, than
// adding to an array. Its able to represent different types of data.  State is an object.


//ADD_TODO
// TOGGLE_TODO
//CLEAR_COMPLETED


export const initialState = {
    todoList: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
};

export const TodoReducer = (state, action) => {
    console.log('Action:', action)
    switch (action.type){
        case 'ADD_TODO':
            return {
                ...state, 
                todoList: [...state.todoList, {
                    item: action.payload,
                    completed: false, 
                    id: Date.now(),
                }]
            };
        
        case 'TOGGLE_ITEM':
            return{
                ...state,
                todoList: state.todoList.map(item => {
                    if(item.id === action.payload){
                        return {
                        ...item,
                        completed: !item.completed,
                        }
                    } else {
                        return item;
                    }
                })
            };
        
        case 'CLEAR_COMPLETED':
            return{
                ...state, 
                todoList: state.todoList.filter(item => !item.completed)
            }
            
        default:
            return state;
    }
};