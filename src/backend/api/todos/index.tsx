
import { getAllTodos } from '@/backend/infrastructure/db/prisma';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req:any, res:any) => {
  switch (req.method) {
    case 'GET':
      const todos = await getAllTodos();
      res.status(200).json(todos);
      break;
    case 'POST':
      const newTodo = await prisma.todo.create({ data: req.body });
      res.status(201).json(newTodo);
      break;
    // ... Add similar logic with prisma calls for other methods
  }
};


