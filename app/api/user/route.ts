import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  try {
    // Fetch complete user details using Prisma
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      // Select all fields you want to return
      select: {
        id: true,
        name: true,
        email: true,
        age: true,
        workplace: true,
        speciality: true,
        isOnboarded: true,
        image: true,
        // Add any other fields you need
      }
    });
    
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    
    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: "Failed to fetch user data" }, { status: 500 });
  }
}
