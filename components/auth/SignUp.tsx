"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { signIn } from "next-auth/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { createUser } from "@/actions/createUser"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { ArrowLeft, LoaderCircle } from "lucide-react"
import { useRouter } from "next/navigation";
import { useState } from "react"

const formSchema = z.object({
    name: z.string().min(2, { message: "Username must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    password: z.string().min(6, { message: "Password must be at least 6 characters." })
})

export default function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  })
  
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const response = await createUser(values);
      if (response.success) {
        toast.success("Account Created ! Please Log In");
        router.push("/sign-in");
      } else {
        toast.error( "There was an error creating your account.");
      }
    } catch (error) {
      console.error("Sign up error:", error);
      toast.error("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  }

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    signIn("google");
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden shadow-[0_80px_250px_100px_#081A19] items-center bg-[#000E0F] text-secondary border-0">
        <CardContent className="grid p-0 w-[80%]">
          <div className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-3xl font-light">Sign Up</h1>
                <p className="text-balance text-muted-foreground">
                  Create an account to get started
                </p>
              </div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-light">Name</FormLabel>
                        <FormControl>
                          <Input 
                            id="name" 
                            type="text" 
                            className="border-0 bg-[#172224]" 
                            placeholder="Full Name" 
                            disabled={isLoading}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-light">Email</FormLabel>
                        <FormControl>
                          <Input 
                            id="email" 
                            type="email" 
                            className="border-0 bg-[#172224]" 
                            placeholder="abc@example.com" 
                            disabled={isLoading}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-light">Password</FormLabel>
                        <FormControl>
                          <Input 
                            id="password" 
                            className="border-0 bg-[#172224]" 
                            type="password" 
                            disabled={isLoading}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-[50%] bg-[#99FFCC] self-center text-foreground"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <LoaderCircle className="h-4 w-4 animate-spin mr-2" />
                    ) : (
                      "Create Account"
                    )}
                  </Button>
                </form>
              </Form>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-[#000E0F] px-2 text-secondary">
                  or continue with
                </span>
              </div>
              <div className="flex flex-col items-center w-full">
                <Button  
                  className="w-[50%] cursor-pointer bg-[#99FFCC]" 
                  onClick={handleGoogleSignIn}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <LoaderCircle className="h-4 w-4 animate-spin mr-2" />
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                          d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                          fill="black"
                        />
                      </svg>
                      <span className="sr-only">Login with Google</span>
                    </>
                  )}
                </Button>
            </div>
          </div>
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our Terms of Service{" "}
        and Privacy Policy.
      </div>
    </div>
  );
}
