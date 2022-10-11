import React , {useState} from 'react'
import { icons } from 'react-icons'
import Todo from './Todo'
import {TodoForm} from './TodoForm'


function Todolist() {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
        return
    }

    const newTodos = [todo, ...todos]
    setTodos(newTodos)
    console.log(...todos)
  }

  const completeTodo = complete => {
    let updatedTodos = todos.map(todo => {
        if (todo.id === complete) {
            todo.isComplete = !todo.isComplete
        }
        return todo
    })
    setTodos(updatedTodos)
  }
  return (
    <div>
      <TodoForm onSubmit={addTodo}/>
      <Todo todos={todos} completeTodo={completeTodo}/>
    </div>

  )
}

export default Todolist
