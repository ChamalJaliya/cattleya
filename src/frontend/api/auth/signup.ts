import prisma from '@/backend/infrastructure/db/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, password, role } = req.body;

   // ... Input validation

    try {
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password, // Assuming you securely hash the password elsewhere
          role: 'user', // Consider 'user' as the default role if not specified
        },
      }); 
      res.status(201).json(newUser);
    } catch (error) {
      // ... Handle errors 
    }
  } else {
    // ... Handle other methods 
  }
}
