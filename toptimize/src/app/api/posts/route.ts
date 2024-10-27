import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// GET all posts
export async function GET() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  })
  return Response.json(posts)
}

// POST new post
export async function POST(request: Request) {
  const body = await request.json()
  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      published: body.published,
      authorId: body.authorId,
    },
  })
  return Response.json(post)
}
