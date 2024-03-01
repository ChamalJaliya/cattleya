import { TodoRepository } from '../../application/repositories/todo-repository';
import { Todo } from '../../domain/entities/todo';
import prisma from '../db/prisma';

export class PrismaTodoRepository implements TodoRepository {
  async create(todo: Todo): Promise<Todo> {
    return await prisma.todo.create({ data: todo });
  }
  // ... Implement other repository methods
}