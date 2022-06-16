import { useState } from 'react';
import './todos.css';
import Form from './form';

function App() {
  const [value, setValue] = useState('');
  return (
    <div class="container">
      <header>
        <h1>Todo List</h1>
        <Form value={setValue}/>
      </header>
      <div id="todos">{value}</div>
    </div>

  );
}

export default App;
