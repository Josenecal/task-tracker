import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const tasks = [
    {
      name: "Finish this mockup",
      details: "per react guidelines, we're going to build a static model first, then add the functionality. This task is for finishing the static model itself.",
      completed_at: null,
      created_at: Date()
    },
    {
      name: "Wash The Dishes",
      details: "You know it needs to happen. Come on.",
      completed_at: null,
      created_at: Date()
    },
    {
      name: "Take Out the Trash",
      details: "Trash and recycling",
      completed_at: null,
      created_at: Date()
    },
  ];

  const currentTask = 1;

  function Task({ task }) {
    return (
      <div style={{border: "3px solid white"}} >
        <h2>{ task.name }</h2>
        <p>{ task.details.slice(0, 100) }</p>
      </div>
    );
  };

  function TaskList() {

    return (
      <div>
        {tasks.map((task, index) => (
          <Task 
            task={task} />
        ))}
      </div>
    );
  };

  function TaskDetails() {
    if (!currentTask) {
      return(<h2>No Task Selected</h2>);
    } else {
      const task = tasks[currentTask]
      return(
        <>
          <h2>{ task.name }</h2>
          <p>{ task.details }</p>
        </>
      );
    }
  }

  return (
    <>
      <div>
        <h1>Your Tasks</h1>
        <TaskList />
      </div>
      <div>
        <h1>Details</h1>
        <TaskDetails />
      </div>
    </>
  )
}

export default App
