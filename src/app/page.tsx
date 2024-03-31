'use client'
import AddTodo from '@/components/AddTodo'
import TodoFilter from '@/components/TodoFilter'
import TodoList from '@/components/TodoList'
import { todos } from '@/type'
import { useEffect, useState } from 'react'

export default function Home() {
  const [todos, setTodos] = useState<todos[]>([])
  const [state, setState] = useState('all')
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos') || '[]'))
  }, [])
  const addTodo = (text: string) => {
    if (text.trim() === '') return alert('Please enter a valid todo')
    const todo = {
      id: Date.now(),
      title: text,
      completed: false,
    }
    setTodos([...todos, todo])
    localStorage.setItem('todos', JSON.stringify([...todos, todo]))
  }
  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }
  const toggleTodo = (id: number) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed
      }
      return item
    })
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }
  const filterTodo = () => {
    switch (state) {
      case 'completed':
        return todos.filter((item) => item.completed === true)
      case 'uncompleted':
        return todos.filter((item) => item.completed === false)
      default:
        return todos
    }
  }
  return (
    <div>
      <header>
        <h1 className="text-black-600/100 text-4xl font-bold text-center">
          TodoList
        </h1>
      </header>
      <div className="flex flex-col h-96 w-96 bg-gray-50 shadow-md px-3 py-3 ">
        <AddTodo addTodo={addTodo}></AddTodo>
        <TodoList
          todos={filterTodo()}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        ></TodoList>
        <TodoFilter setState={setState}></TodoFilter>
      </div>
    </div>
  )
}
