import React, {useReducer} from 'react';
import {initialState, TodoReducer} from './reducers/ToDoReducer.js'

import './App.css';

function App() {

  const [state, dispatch] = useReducer(TodoReducer, initialState);
  // the order of the arguments matter
  console.log('State:', state)
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
