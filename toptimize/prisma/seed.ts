import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create Users
  const alice = await prisma.user.create({
    data: {
      email: 'alice@example.com',
      name: 'Alice Johnson',
    },
  })

  const bob = await prisma.user.create({
    data: {
      email: 'bob@example.com',
      name: 'Bob Smith',
    },
  })

  const carol = await prisma.user.create({
    data: {
      email: 'carol@example.com',
      name: 'Carol Williams',
    },
  })

  const david = await prisma.user.create({
    data: {
      email: 'david@example.com',
      name: 'David Brown',
    },
  })

  const emma = await prisma.user.create({
    data: {
      email: 'emma@example.com',
      name: 'Emma Davis',
    },
  })

  // Create Posts
  await prisma.post.createMany({
    data: [
      {
        title: 'Getting Started with Prisma',
        content: 'This is a comprehensive guide to Prisma ORM...',
        published: true,
        authorId: alice.id,
      },
      {
        title: 'Database Optimization Tips',
        content: 'Learn how to optimize your database queries...',
        published: true,
        authorId: alice.id,
      },
      {
        title: 'TypeScript Best Practices',
        content: 'Essential TypeScript patterns and practices...',
        published: false,
        authorId: bob.id,
      },
      {
        title: 'Modern Web Development',
        content: 'Exploring modern web development techniques...',
        published: true,
        authorId: carol.id,
      },
      {
        title: 'API Design Patterns',
        content: 'Understanding REST and GraphQL patterns...',
        published: true,
        authorId: bob.id,
      },
      {
        title: 'Database Security',
        content: 'Important database security considerations...',
        published: false,
        authorId: david.id,
      },
      {
        title: 'Performance Tuning',
        content: 'Advanced database performance techniques...',
        published: true,
        authorId: alice.id,
      },
      {
        title: 'Cloud Deployment',
        content: 'Step-by-step guide to cloud deployment...',
        published: false,
        authorId: emma.id,
      },
      {
        title: 'Testing Strategies',
        content: 'Effective testing approaches for databases...',
        published: true,
        authorId: carol.id,
      },
      {
        title: 'Data Modeling',
        content: 'Best practices in data modeling...',
        published: true,
        authorId: david.id,
      },
    ],
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
