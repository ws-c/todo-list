import { useState } from "react"

interface TodoFilterProps {
  setState: (state :string)=> void
}
export default function TodoFilter({setState}: TodoFilterProps) {
  const [activeFilter, setActiveFilter] = useState('all')
  const handleClick = (filter: string) => {
    setState(filter);
    setActiveFilter(filter);
  };
  return (
    <div className="flex justify-start gap-2">
      <button className={activeFilter === 'all' ? 'bg-zinc-200' : ''} onClick={() => handleClick('all')}>全部</button>
      <button className={activeFilter === 'completed' ? 'bg-zinc-200' : ''} onClick={() => handleClick('completed')}>已完成</button>
      <button className={activeFilter === 'uncompleted' ? 'bg-slate-200' : ''} onClick={() => handleClick('uncompleted')}>未完成</button>
    </div>
  )
}