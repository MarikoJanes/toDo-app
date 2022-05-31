import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";


function EditTask({category, handlePatch}) {
    const [taskEdit, setTaskEdit] = useState({
        task: "",
        category_id: "",
        due_date: ""
    })

    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:9292/tasks/${id}`)
        .then(res => res.json())
        .then(data => setTaskEdit(data))
    }, [id]);


    function handleChange(e) {
        const {name, value} = e.target;
        setTaskEdit({...taskEdit, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskEdit)
        })
        .then(res => res.json())
        .then(data => {
            handlePatch(data);
            history.push("/todo");
        })

    }

  return (
    <form onSubmit={handleSubmit}>
        <h3>Edit Project</h3>
        <select onChange={handleChange} name="category_id" value={taskEdit.category_id}>
        <option  defaultValue>select a category</option>
            {category.map(c => {
                return <option key={c.id} value={c.id}>{c.name}</option>
            })}
        </select>
        <input type="text" name="task" value={taskEdit.task} onChange={handleChange} />
        <input type="date" name="due_date" value={taskEdit.due_date} onChange={handleChange} />
        <input type="submit" value="update" />
    </form>
  )
}

export default EditTask