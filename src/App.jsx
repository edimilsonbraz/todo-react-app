import React from 'react';
import { useState } from 'react';

import Tasks from './components/Tasks';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true,
    }
      

  ]);

  return (
    <div className="container">
     <h1>Minhas Tarefas</h1>
     <Tasks tasks={tasks}/>
    </div>
  )
}

export default App;
