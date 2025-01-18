
"use client"
import * as React from "react";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import axios from "axios";
import { toast } from "sonner";
import Link from "next/link"; 

export default function ForgetPasswordForm({ className, ...props }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({});

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/auth/forgot-password", formData);
      if (data.success) {
        toast("Reset password link sent to your email.");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error sending reset password link:", error);
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while sending reset password link.");
      }
    }
    setIsLoading(false);
  }


  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit} className="border rounded-md p-4 w-full md:w-96"> 
        <h2 className="text-2xl font-semibold text-center mb-2">Reset Your Password</h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Lost your password? Please enter your email address associated with your account. You will receive a link to create a new password via email.
        </p>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading} type="submit">
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Send Reset Link
          </Button>
        </div>
      </form>
      
      <div className="text-center mt-4">
        <Link href="/login" className="text-sm text-blue-500 hover:underline">
            Return to Login
        </Link>
      </div>
    </div>
  );
}