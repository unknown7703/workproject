"use client";

import { User } from "lucide-react";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";
import { Routes } from "@/routes/Routes";

export function UserProfile() {
  const { data: session } = useSession();
  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <User className="h-5 w-5" />
          <span className="sr-only">User profile</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className={cn(
          "w-60 border-zinc-800",
          "bg-zinc-900 text-zinc-100"
        )} 
        align="end"
      >
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">
            {session?.user?.email || "user@example.com"}
          </p>
          <Button  asChild className="border-zinc-700 hover:bg-zinc-800 hover:text-zinc-100">
            <a href={Routes.dashboard}>Update Profile</a>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
