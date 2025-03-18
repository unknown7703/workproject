import { DefaultSession } from "next-auth"
import "next-auth/jwt"

declare module "next-auth" {
  
  interface Session {
    user: {
      id: string
      isOnboarded: boolean
    } & DefaultSession["user"]
  }

  interface User {
    isOnboarded?: boolean
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId: string
    isOnboarded: boolean
  }
}
