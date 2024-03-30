import { useState } from 'react'

type AddTodoProps = {
  addTodo: (todo: string) => void
}
export default function AddTodo({ addTodo }: AddTodoProps) {
  const [text, setText] = useState('')
  const onAddTodo = () => {
    addTodo(text)
    setText('')
  }
  return (
    <div className="flex justify-between h-10">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            onAddTodo()
          }
        }}
        placeholder="请输入待办事项"
        className="w-4/5 bg-gray-50 rounded border-solid border-2"
      />
      <button
        onClick={onAddTodo}
        className="w-1/5 border-solid border-black border-2 rounded bg-lime-500"
      >
        添加
      </button>
    </div>
  )
}
