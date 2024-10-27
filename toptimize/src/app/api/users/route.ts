import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// GET all users
export async function GET() {
  const users = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  return Response.json(users)
}

// POST new user
export async function POST(request: Request) {
  const body = await request.json()
  const user = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
    },
  })
  return Response.json(user)
}
