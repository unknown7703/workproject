"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import { LoaderCircle } from 'lucide-react';
import { useFormStatus } from 'react-dom';
function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <Button
      type="submit"
      className="w-[50%] bg-[#99FFCC] self-center text-foreground"
      disabled={pending}
    >
      {pending ? (
        <LoaderCircle className="h-4 w-4 animate-spin mr-2" />
      ) : (
        "Login"
      )}
    </Button>
  );
}
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const credentialsAction = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if(response?.status === 200){
      toast("You have logged in successfully")
    }else{
      toast("Error logging in")
    }
    redirect("/");
  };

  //console.log(session);
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden shadow-[0_80px_250px_100px_#081A19]  items-center bg-[#000E0F] text-secondary border-0">
        <CardContent className="grid p-0 w-[80%]">
          <div className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-3xl font-light">Welcome back</h1>
                <p className="text-balance text-muted-foreground">
                  Login to your account
                </p>
              </div>
              <form className="flex flex-col gap-6" action={credentialsAction}>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="font-light">
                    Email
                  </Label>
                  <Input
                    id="credentials-email"
                    name="email"
                    type="email"
                    className="border-0 bg-[#172224]"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password" className="font-light">
                      Password
                    </Label>
                    {/* <Link
                    href={Routes.forgotPassword}
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </Link> */}
                  </div>
                  <Input
                    id="credentials-password"
                    name="password"
                    type="password"
                    className="border-0 bg-[#172224]"
                    required
                  />
                </div>
                {/* <Button
                  type="submit"
                  className="w-[50%] bg-[#99FFCC] self-center text-foreground"
                >
                  {isLoading ? (
                    <LoaderCircle className="h-4 w-4 animate-spin mr-2" />
                  ) : (
                    "Login"
                  )}
                </Button> */}
                <SubmitButton/>
              </form>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-[#000E0F] px-2 text-secondary">
                  Or continue with
                </span>
              </div>
              <div className="flex flex-col items-center w-full">
                <Button
                  variant="outline"
                  className="w-[50%] cursor-pointer bg-[#99FFCC] "
                  onClick={() => signIn("google")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="black"
                    />
                  </svg>
                  <span className="sr-only">Login with Google</span>
                </Button>
              </div>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link
                  href={"/auth/sign-up"}
                  className="underline underline-offset-4"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our Terms of Service and Privacy
        Policy.
      </div>
    </div>
  );
}
