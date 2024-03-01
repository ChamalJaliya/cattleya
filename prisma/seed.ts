import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const password = 'test1234'; 
  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({ 
    data: {
      name: 'test',
      email: 'test@gmail.com',
      password: hashedPassword,
      role: 'admin'
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
