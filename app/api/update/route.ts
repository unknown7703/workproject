import { auth } from "@/lib/auth";
import { NextResponse,NextRequest } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const session = await auth();
  
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  const data = await request.json();
  
  try {
    await prisma.user.update({
      where: { id: session.user.id },
      data: {
        name: data.name,
        age: data.age ? parseInt(data.age) : undefined,
        workplace: data.workplace,
        speciality: data.speciality,
        isOnboarded: true,
        
      },
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Onboarding error:", error);
    return NextResponse.json({ error: "Failed to complete onboarding" }, { status: 500 });
  }
}
