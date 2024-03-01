import { Todo } from '../../domain/entities/todo';

export interface TodoRepository { 
  create(todo: Todo): Promise<Todo>;

}


