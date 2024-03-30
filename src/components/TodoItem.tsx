import type { todos } from '@/type'
import dayjs from 'dayjs'
type TodoItemProps = {
  todo: todos
  deleteTodo: (id: number) => void
  toggleTodo: (id: number) => void
}
export default function TodoItem({
  todo,
  deleteTodo,
  toggleTodo,
}: TodoItemProps) {
  return (
    <li className='flex items-center justify-between p-2 border-b hover:bg-sky-100'>
      <div className='flex items-center space-x-2'>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className='w-4 h-4 rounded border-gray-300'
        />
        <span>{todo.title}</span>
        <span className='text-sm '>{dayjs(todo.id).format('YYYY年MM月DD日HH:mm')}</span>
      </div>
      <div className='flex items-center space-x-2'>
        <button onClick={() => toggleTodo(todo.id)}>切换</button>
        <button onClick={() => deleteTodo(todo.id)}>删除</button>
      </div>
    </li>
  )
}
