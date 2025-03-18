
import SignUpForm from "@/components/auth/SignUp";

import { auth } from "@/lib/auth"
import { redirect } from "next/navigation";
export default async function SignUpPage() {
  const session = await auth();
  console.log(session)
  if (session?.user) {
    redirect("/")
  }
  return (
    <div className="flex min-h-svh flex-col items-center bg-[#000E0F] justify-center  p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <SignUpForm  />
      </div>
    </div>
  )
}
