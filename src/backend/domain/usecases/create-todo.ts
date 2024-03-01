  // src/domain/usecases/create-todo.ts
  import { Todo } from '../entities/todo';
  
  export interface CreateTodoInput {
    task: string;
  }
  
  export interface TodoRepository { // Abstract interface for data operations
    create(todo: Todo): Promise<Todo>;
    // ... other repository methods
  }
  
  export class CreateTodoUseCase {
    constructor(private todoRepository: TodoRepository) {}
  
    async execute(input: CreateTodoInput): Promise<Todo> {
      const newTodo = new Todo(Date.now(), input.task, false); 
      return this.todoRepository.create(newTodo);
    }
  }
  