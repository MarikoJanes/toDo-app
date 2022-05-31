import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";

function DisplayTaskItem({category, t}) {

    const {id, task, category_id, due} = t
    
    function handelDelete(e) {
        console.log(id)
    }
 
  return (
    <ul style={{"listStyle": "none"}}>
        <li key={id} style={{"textAlign": 'center'}}>
             <span style={{"paddingRight": "50px"}}>
             {due < 3 && due >= 0 ? "‼️" : null}
             {due < 0 ? "⚠️" : null}
             </span>
             {task}  
             <span style={{"paddingLeft": "50px"}}>{
                category[category_id-1].name
             }</span>
             <Link  style={{"marginLeft": "50px"}} to={`/todo/${id}/edit`}>
             <button>
                 <FaPencilAlt size={13} />
             </button>
             </Link>
             <button onClick={handelDelete}>
             X
                 {/* <FaTrash size={13} /> */}
             </button>
        </li>
    </ul>
  )
}

export default DisplayTaskItem