
// exporting intial state which needs to be an object, but we want to add items
// so it needs to be an array inside the object, with an object for each item
// initial state has to be an object so that it can contain all of the shared state
// that our application needs to funtion.  It's easier to just add another key, than
// adding to an array. Its able to represent different types of data.  State is an object.


//ADD_TODO
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
    switch (action.type){
        default:
        return state;
    }
};