import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
  const passwordSabin = await bcrypt.hash('password-sabin', roundsOfHashing);
  const passwordAlex = await bcrypt.hash('password-alex', roundsOfHashing);

  // users
  const user1 = await prisma.user.upsert({
    where: { email: 'sabin@adams.com' },
    update: {},
    create: {
      email: 'sabin@adams.com',
      name: 'Sabin Adams',
      password: passwordSabin,
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'alex@ruheni.com' },
    update: {},
    create: {
      email: 'alex@ruheni.com',
      name: 'Alex Ruheni',
      password: passwordAlex,
    },
  });

  //vacancies
  const vancancy1 = await prisma.vacancy.upsert({
    where: { id: '8e9a6c43-75fb-403f-897e-b32e4ee50342' },
    update: {},
    create: {
      id: '8e9a6c43-75fb-403f-897e-b32e4ee50342',
      title: 'Prisma Adds Support for MongoDB',
      body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
      published: true,
      userId: user1.id,
    },
  });

  const vancancy2 = await prisma.vacancy.upsert({
    where: { id: 'e7698992-bc89-4b57-aafc-11e305ae7ff0' },
    update: {},
    create: {
      id: 'e7698992-bc89-4b57-aafc-11e305ae7ff0',
      title: 'Vacancy 2',
      body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
      published: false,
      userId: user2.id,
    },
  });

  console.log({ vancancy1, vancancy2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
