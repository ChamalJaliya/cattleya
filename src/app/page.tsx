'use client'
import { useAddTodoMutation, useGetTodosQuery } from "@/frontend/redux/services/todosApi";


export default function Home() {
  const { data: todos, isLoading } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation(); 
  
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
    
   {/* <p>{todos[0].task}</p> */}
    
   
    </main>
  );
}