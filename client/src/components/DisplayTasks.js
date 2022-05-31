import React from 'react'
import DisplayTaskItem from "./DisplayTaskItem";

function DisplayTasks({tasks, category}) {


const taskItems = tasks.map(t => {
    return <DisplayTaskItem key={t.id} t={t} category={category} />
})
    

   

  return (
    <div>
        {taskItems}
    </div>
   
  )
}

export default DisplayTasks