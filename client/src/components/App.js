import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EditTask from './EditTask';
import ShowDate from './ShowDate';
import TaskContainer from "./TaskContainer";

function App() {
  const [category, setCategory] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/categories")
    .then(res => res.json())
    .then(data => setCategory(data))
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/tasks")
    .then(res => res.json())
    .then(data => setTasks(data))
  }, []);

  function handlePost(data) {
    console.log(data);
    setTasks(tasks => [...tasks, data]);
  }

  function handlePatch(data) {
    const newTasks = tasks.map(t => {
      if (t.id === data.id) {
        return data;
      } else {
        return t;
      }
      })
      setTasks(newTasks);
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/todo" >
          <ShowDate />
          <TaskContainer category={category} handlePost={handlePost} tasks={tasks}/>
        </Route>
        <Route exact path="/todo/:id/edit">
          <EditTask category={category} handlePatch={handlePatch} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
