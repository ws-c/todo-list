import { todos } from '@/type'
import TodoItem from './TodoItem'

type TodoListProps = {
  todos: todos[] // 类型断言
  deleteTodo: (id: number) => void
  toggleTodo: (id: number) => void
}
export default function TodoList({
  todos,
  deleteTodo,
  toggleTodo,
}: TodoListProps) {
  return (
    <ul className='h-96 overflow-y-auto'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        ></TodoItem>
      ))}
    </ul>
  )
}
