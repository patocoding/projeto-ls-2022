import React, { useState } from 'react'

function TodoForm(props) {

    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTodo(input)
        setInput('')
    }

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            <input onChange={(e) => setInput(e.target.value)} 
            className='todo-input' 
            placeholder='Adicione uma tarefa' 
            value={input}
                />
            <button type='submit' className='todo-button'>Adicionar</button>
        </form>
    )
}

export default TodoForm