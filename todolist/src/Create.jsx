import React, { useState } from "react"
import axios from 'axios'



function Create() {

    const [task, setTask] = useState()

    const handleAdd = () => {
        axios.post('http://localhost:3001/add', { task: task })
            .then(result => {
                location.reload()
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <input type='text' className='create_forms_input' onChange={(e) => setTask(e.target.value)} placeholder="Enter Task" />
            <button type='button' className='create_forms_button' onClick={handleAdd}>Add Todo</button>
        </div >
    )
}

export default Create;