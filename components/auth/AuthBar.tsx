import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Routes } from "@/routes/Routes";
import { UserProfile } from "../shared/UserProfile";
export default function AuthBar() {
  const session = useSession();
  return (
    <div>
      {session?.status=="authenticated"? (
        <div className="flex gap-2">
          <UserProfile />
          <button
            onClick={() => signOut()}
            className="bg-[#99FFCC] backdrop-blur-md rounded-full px-6 py-2 text-black text-sm font-light hover:bg-[#1a1b20]/50 hover:text-white transition-colors"
          >
            Logout
          </button>
          </div>
      ) : (
        // If user is not logged in, show Sign Up & Log In
        <>
          <Link
            href={Routes.signup}
            className="bg-[#1a1b20]/30 backdrop-blur-md rounded-full px-6 py-2 text-white text-sm font-light hover:bg-[#1a1b20]/50 transition-colors"
          >
            Sign Up
          </Link>
          <Link
            href={Routes.signin}
            className="bg-[#99FFCC] backdrop-blur-md rounded-full px-6 py-2 text-black text-sm font-light hover:bg-[#1a1b20]/50 hover:text-white transition-colors"
          >
            Log In
          </Link>
        </>
      )}
    </div>
  );
}
