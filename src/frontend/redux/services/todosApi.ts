import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/todos' }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({  // Specify return type & input type
      query: () => '', 
    }),
    addTodo: builder.mutation<Todo, Todo>({ // Input type & return type
      query: (newTodo) => ({ url: '', method: 'POST', body: newTodo }),
      invalidatesTags: ['Todos'],
    }),
    updateTodo: builder.mutation<Todo, { id: number; task: string; completed: boolean }>({ 
      query: (todoUpdate) => ({ 
        url: `/${todoUpdate.id}`, // Assuming your update endpoint needs the ID
        method: 'PUT', 
        body: todoUpdate, 
      }),
      invalidatesTags: ['Todos'],
    }),
    deleteTodo: builder.mutation<void, number>({ // Specify input type
      query: (todoId) => ({ url: `/${todoId}`, method: 'DELETE' }),
      invalidatesTags: ['Todos'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todosApi; 
