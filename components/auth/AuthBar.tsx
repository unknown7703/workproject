import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function AuthBar() {
  const session = useSession();
    console.log(session.status)
  return (
    <div>
      {session?.status=="authenticated"? (
        // If user is logged in, show Logout button
        
          <button
            onClick={() => signOut()}
            className="bg-[#99FFCC] backdrop-blur-md rounded-full px-6 py-2 text-black text-sm font-light hover:bg-[#1a1b20]/50 hover:text-white transition-colors"
          >
            Logout
          </button>
        
      ) : (
        // If user is not logged in, show Sign Up & Log In
        <>
          <Link
            href="/sign-up"
            className="bg-[#1a1b20]/30 backdrop-blur-md rounded-full px-6 py-2 text-white text-sm font-light hover:bg-[#1a1b20]/50 transition-colors"
          >
            Sign Up
          </Link>
          <Link
            href="/sign-in"
            className="bg-[#99FFCC] backdrop-blur-md rounded-full px-6 py-2 text-black text-sm font-light hover:bg-[#1a1b20]/50 hover:text-white transition-colors"
          >
            Log In
          </Link>
        </>
      )}
    </div>
  );
}
