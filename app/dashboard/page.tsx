"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import {
  User,
  Building,
  Briefcase,
  Calendar,
  LoaderCircle,
  Save,
  Edit,
  X,
  ArrowLeft,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Routes } from "@/routes/Routes";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session, update } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [userData, setUserData] = useState({
    name: session?.user?.name || "",
    age: "",
    workplace: "",
    speciality: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/user");
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setUserData({
            name: data.user.name || "",
            age: data.user.age?.toString() || "",
            workplace: data.user.workplace || "",
            speciality: data.user.speciality || "",
          });
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update profile");
      }

      // Update session with new user data
      await update();
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Update error:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to update profile"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const cancelEdit = () => {
    // Reset form to original values
    setUserData({
      name: session?.user?.name || "",
      age: "",
      workplace: "",
      speciality: "",
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="container mx-auto py-10 px-4 max-w-6xl">
        <div className="flex flex-row gap-4 items-center mb-8">
          <Link href={Routes.home}>
            <ArrowLeft />
          </Link>
          <div className="text-3xl font-bold">
            Dashboard
          </div>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8 bg-zinc-900">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <div className="grid gap-8 md:grid-cols-2 text-white">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <User className="h-5 w-5 text-white" />
                    Profile Information
                  </CardTitle>
                  <CardDescription>
                    View and manage your personal information
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-white">
                  {!isEditing ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-[1fr_2fr] gap-4 items-center">
                        <span className="text-zinc-400 font-medium">Name:</span>
                        <span>{userData.name || "Not provided"}</span>
                      </div>
                      <Separator className="bg-zinc-800" />

                      <div className="grid grid-cols-[1fr_2fr] gap-4 items-center">
                        <span className="text-zinc-400 font-medium">
                          Email:
                        </span>
                        <span>{session?.user?.email || "Not provided"}</span>
                      </div>
                      <Separator className="bg-zinc-800" />

                      <div className="grid grid-cols-[1fr_2fr] gap-4 items-center">
                        <span className="text-zinc-400 font-medium">Age:</span>
                        <span>{userData.age || "Not provided"}</span>
                      </div>
                      <Separator className="bg-zinc-800" />

                      <div className="grid grid-cols-[1fr_2fr] gap-4 items-center">
                        <span className="text-zinc-400 font-medium">
                          Workplace:
                        </span>
                        <span>{userData.workplace || "Not provided"}</span>
                      </div>
                      <Separator className="bg-zinc-800" />

                      <div className="grid grid-cols-[1fr_2fr] gap-4 items-center">
                        <span className="text-zinc-400 font-medium">
                          Speciality:
                        </span>
                        <span>{userData.speciality || "Not provided"}</span>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleUpdate} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={userData.name}
                          onChange={handleChange}
                          className="bg-zinc-800 border-zinc-700"
                          disabled={isLoading}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input
                          id="age"
                          name="age"
                          type="number"
                          value={userData.age}
                          onChange={handleChange}
                          className="bg-zinc-800 border-zinc-700"
                          disabled={isLoading}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="workplace">Workplace</Label>
                        <Input
                          id="workplace"
                          name="workplace"
                          value={userData.workplace}
                          onChange={handleChange}
                          className="bg-zinc-800 border-zinc-700"
                          disabled={isLoading}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="speciality">Speciality</Label>
                        <Input
                          id="speciality"
                          name="speciality"
                          value={userData.speciality}
                          onChange={handleChange}
                          className="bg-zinc-800 border-zinc-700"
                          disabled={isLoading}
                        />
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="bg-emerald-600 hover:bg-emerald-700"
                        >
                          {isLoading ? (
                            <>
                              <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                              Saving...
                            </>
                          ) : (
                            <>
                              <Save className="mr-2 h-4 w-4" />
                              Save Changes
                            </>
                          )}
                        </Button>

                        <Button
                          type="button"
                          onClick={cancelEdit}
                          disabled={isLoading}
                          className="border-zinc-700 hover:bg-zinc-800"
                        >
                          <X className="mr-2 h-4 w-4" />
                          Cancel
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between border-t border-zinc-800 pt-4">
                  {!isEditing ? (
                    <Button
                      onClick={() => setIsEditing(true)}
                      className="bg-zinc-800 hover:bg-zinc-700"
                    >
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Profile
                    </Button>
                  ) : null}
                </CardFooter>
              </Card>

              <div className="space-y-8">
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Calendar className="h-5 w-5" />
                      Account Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 text-white">
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-400">Account Status</span>
                        <span className="bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded-full text-xs font-medium">
                          Active
                        </span>
                      </div>
                      <Separator className="bg-zinc-800" />

                      <div className="flex items-center justify-between">
                        <span className="text-zinc-400">Member Since</span>
                        <span>March 2025</span>
                      </div>
                      <Separator className="bg-zinc-800" />

                      <div className="flex items-center justify-between">
                        <span className="text-zinc-400">Last Updated</span>
                        <span>Today</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Briefcase className="h-5 w-5" />
                      Professional Info
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 text-white">
                      <div className="flex items-center gap-3">
                        <Building className="h-5 w-5 text-zinc-400" />
                        <div>
                          <p className="font-medium">
                            {userData.workplace || "No workplace set"}
                          </p>
                          <p className="text-sm text-zinc-400">
                            {userData.speciality || "No speciality set"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="bg-zinc-900 border-zinc-800 text-white">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Manage your account preferences and settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Separator className="bg-zinc-800" />

                <div className="space-y-2">
                  <Label>Email Notifications</Label>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      className="border-zinc-700 text-black"
                    >
                      Enable
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-zinc-800 border-zinc-700"
                    >
                      Disable (Current)
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
