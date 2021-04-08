import React, { useState } from 'react'
import shortid from 'shortid'
import Form from './Form'
import List from './List'

const App = () => {
    const [todos, setTodos] =　useState ([
        {
            content: '課題をする'
        },
        {
            content: '洗濯をする'
        },
        {
            content: '電話をする'
        },
        {
            content: '料理をする'
        }
    ])

    const addTodo=(content)=> {
        setTodos ([
            ...todos,
            {
                content: content,
                id: shortid.generate()
            }
        ])
    }

// 演習2
    // const IsDone=(content)=> {
    //     <input type = 'checkbox' onChange = { () => {
    //         setIsDone(!isDone)
    //     } } />
    // }

// 演習1
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <>
            <h1>Todo App</h1>
            <Form addTodo={addTodo} />
            {/* <Form todos={todos} setTodos={setTodos} /> */}
            <List todos={todos} />
            <List deleteTodo={deleteTodo} />
        </>
    ) 
}

export default App