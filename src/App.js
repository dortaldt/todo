import React, { useState } from 'react';
import './App.css';
import { tsPropertySignature } from '@babel/types';

function App(props) {

  const [task, setTask] = useState('New task')
  const [taskList, setTaskList] = useState([{name:'task_1', content:'This is task 1!'},{name:'task_2', content:'This is task 2!'}])

  return (
    <div className="App">
      <header className="App-header">
        <TodoList tasks={taskList} />
        <AddTask setTaskList={setTaskList} taskList={taskList}/>
      </header>
    </div>
  );
}

function TodoList(props) {
  const tasks = props.tasks
  return (
  <div className = 'todo-cont'>
    {tasks.map((task, i) => {
      return <Task name={tasks[i].name} content={tasks[i].content} key={i} />
    })}
  </div>
  )
}

function Task(props) {

  const name = props.name
  const content = props.content
  const effort = 0
  const impact = 0

  return(
    <div className = 'task-cont'>
      <div>{name}</div>
      <div>{content}</div>
      <div>{effort + impact}</div>
    </div>
  )
}

function AddTask(props) {
  const currentList = props.taskList
  const newList = [{name:'task_3', content:'This is task 3!'},{name:'task_4', content:'This is task 4!'}]
  newList.concat(currentList)
  console.log(newList)
  return (
    <button onClick={() => {
      props.setTaskList(newList)}
    }>Update</button>
  )
}
export default App;
