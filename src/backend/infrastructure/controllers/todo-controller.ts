import { CreateTodoUseCase } from '../../domain/usecases/create-todo';
import { PrismaTodoRepository } from '../repositories/prisma-todo-repository'; 

// ... (Inside your API route handler)
// const todoRepository = new PrismaTodoRepository();
// const createTodoUseCase = new CreateTodoUseCase(todoRepository); 

// const newTodo = await createTodoUseCase.execute(req.body);
// res.status(201).json(newTodo);
