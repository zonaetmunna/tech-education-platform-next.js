import { NextResponse } from "next/server"
import { getUsers, getUserById } from "@/lib/data"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  if (id) {
    const user = getUserById(Number(id))

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Remove sensitive information
    const { email, ...safeUser } = user

    return NextResponse.json(safeUser)
  }

  // Return limited user data for security
  const users = getUsers().map(({ id, name, avatar, role, plan, status, joinedAt }) => ({
    id,
    name,
    avatar,
    role,
    plan,
    status,
    joinedAt,
  }))

  return NextResponse.json(users)
}
