import { prisma } from '@/db'
import Link  from 'next/link'
import TodoItem from '@/components/TodoItem';

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"


  await prisma.todo.update({ where: {id}, data: { complete }})
  console.log(id, complete)
}

export default async function Home() {
  
  
  const todos = await getTodos(); //instead of await prisma.todo.findMany() here
 
  return (
    <>
      <header className='flex justify-between mb-4 items-center'>
        <h1 className='text-2xl'>Todos</h1>
        <Link href="/new" className='border border-slate-300 text-slate-300
        px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
        >
          New
        </Link>
      </header>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}/> // or <TodoItem key={todo.id} id={todo.id} title={todo.title} complete={todo.complete}/>
))}
      </ul>
    </>
  )
}