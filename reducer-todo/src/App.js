import React, {useReducer} from 'react';
import {initialState, TodoReducer} from './reducers/ToDoReducer.js'
import List from './components/List.js';
import Form from './components/Form.js';

import './App.css';

function App() {

  const [state, dispatch] = useReducer(TodoReducer, initialState);
  // the order of the arguments matter
  console.log('State:', state)

  const addToDo = item => {
   dispatch({type: 'ADD_TODO', payload: item});
  };

  const toggleItem = item => {
    dispatch({type: 'TOGGLE_ITEM'})
  }

  const clearCompleted = item => {
    dispatch({type: 'CLEAR_COMPLETED'})
  }

  return (
    <div className="App">
      <h1>Desiree's Reducer ToDo List</h1>
      <Form addToDo={addToDo}/>
      <List todoList={state.todoList} toggleItem={toggleItem} clearCompleted={clearCompleted}/>
    </div>
  );
}

export default App;
