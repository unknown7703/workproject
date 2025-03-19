"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";

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
        "Complete Profile"
      )}
    </Button>
  );
}

export function OnboardingForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { data: session, update } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: session?.user?.name || "",
    age: "",
    workplace: "",
    speciality: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onboardingAction = async (formData: FormData) => {
    const data = {
      name: formData.get("name") as string,
      age: formData.get("age") as string,
      workplace: formData.get("workplace") as string,
      speciality: formData.get("speciality") as string,
    };

    try {
      const response = await fetch("/api/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          isOnboarded: true,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to complete onboarding");
      }

      // Update session to reflect onboarding completion
      await update({ isOnboarded: true });
      toast.success("Profile completed successfully!");
      router.push("/dashboard");
    } catch (error) {
      console.error("Onboarding error:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to complete onboarding"
      );
    }
  };

  return (
    <div className={cn("flex flex-col gap-6 w-[90%] md:w-[60%]", className)} {...props}>
      <Card className="overflow-hidden shadow-[0_80px_250px_100px_#081A19] items-center bg-[#000E0F] text-secondary border-0">
        <CardContent className="grid p-0 w-[80%]">
          <div className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-3xl font-light">Complete Your Profile</h1>
                <p className="text-balance text-muted-foreground">
                  Tell us a bit about yourself
                </p>
              </div>
              <form className="flex flex-col gap-6" action={onboardingAction}>
                <div className="grid gap-2">
                  <Label htmlFor="name" className="font-light">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    className="border-0 bg-[#172224]"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="age" className="font-light">
                    Age
                  </Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    className="border-0 bg-[#172224]"
                    placeholder="25"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="workplace" className="font-light">
                    Workplace
                  </Label>
                  <Input
                    id="workplace"
                    name="workplace"
                    type="text"
                    className="border-0 bg-[#172224]"
                    placeholder="Company or Institution"
                    value={formData.workplace}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="speciality" className="font-light">
                    Speciality
                  </Label>
                  <Input
                    id="speciality"
                    name="speciality"
                    type="text"
                    className="border-0 bg-[#172224]"
                    placeholder="Your field of expertise"
                    value={formData.speciality}
                    onChange={handleChange}
                  />
                </div>
                <SubmitButton />
              </form>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-[#000E0F] px-2 text-secondary">
                  This information helps us personalize your experience
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By completing your profile, you agree to our Terms of Service and Privacy
        Policy.
      </div>
    </div>
  );
}
