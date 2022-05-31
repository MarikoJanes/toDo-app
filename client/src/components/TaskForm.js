import React, { useState } from 'react'

function TaskForm({category, handlePost}) {
    const [formData, setFromData] = useState({
        task: "",
        category_id: "",
        due_date: ""
    })


    function handleChange(e) {
        const {name, value} = e.target;        
        setFromData({...formData, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => handlePost(data));

        setFromData({
            task: "",
            category_id: "",
            due_date: ""
        })
    }

  return (
    <form onSubmit={handleSubmit} >
        <select onChange={handleChange} name="category_id">
        <option  defaultValue>select a category</option>
            {category.map(c => {
                return <option key={c.id} value={c.id}>{c.name}</option>
            })}
        </select>
        <input type="text" name="task" value={formData.task} onChange={handleChange} />
        <input type="date" name="due_date" value={formData.due_date} onChange={handleChange} />
        <input type="submit" value=" + " /> 
    </form>
  )
}

export default TaskForm