import React from 'react';
import TaskForm from './TaskForm';
import DisplayTasks from './DisplayTasks';


function TaskContainer({category, tasks, handlePost}) {
  


 
  return (
    <div>
      <TaskForm category={category} handlePost={handlePost} />
      <DisplayTasks tasks={tasks} category={category} />
    </div>
  )
}

export default TaskContainer