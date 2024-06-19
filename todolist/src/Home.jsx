import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Create from './Create'
import { BsCircleFill, BsFillCheckCircleFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";



function Home() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err))
    }, [])

    const handelEdit = (id) => {
        axios.put('http://localhost:3001/update/' + id)
            .then(result => {
                location.reload()
            })
            .catch(err => console.log(err))
    }

    const handelDelete = (id) => {
        axios.delete('http://localhost:3001/delete/' + id)
            .then(result => {
                location.reload()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='home'>
            <img src="https://shanture.com/wp-content/uploads/2024/06/cropped-2.png" alt="shanture" className='shantureimg' />
            "
            <h1>Todo List</h1>
            <Create />
            {
                todos.length === 0 ? <div>No Records </div> :
                    todos.map(todo => (
                        <div className='task'>
                            <div className='Checkbox' onClick={() => handelEdit(todo._id)}>

                                {todo.done ? <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill> : <BsCircleFill className='icon' />}

                                <p className={todo.done ? 'ischeckedtodo' : 'todotext'}>{todo.task}</p>
                            </div>
                            <div>
                                <span><BsFillTrashFill className='icon'
                                    onClick={() => handelDelete(todo._id)} /></span>
                            </div>
                        </div>
                    ))
            }

        </div >
    )
}

export default Home