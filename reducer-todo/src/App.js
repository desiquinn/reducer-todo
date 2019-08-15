import React, {useReducer} from 'react';
import {initialState, TodoReducer} from './reducers/ToDoReducer.js'
import List from './components/List.js';
import Form from './components/Form.js';

import './App.css';

function App() {

  const [state, dispatch] = useReducer(TodoReducer, initialState);
  // the order of the arguments matter
  console.log('State:', state)

  return (
    <div className="App">
      <h1>Desiree's Reducer ToDo List</h1>
      <Form />
      <List todoList={state.todoList} />
    </div>
  );
}

export default App;
