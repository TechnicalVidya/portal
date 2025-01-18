
"use client"
import * as React from "react";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function ResetPasswordForm({ className, token, ...props }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();

 
    if (!formData.newPassword || formData.newPassword.trim() === "") {
      toast.error("Please enter a valid password.");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(`/api/auth/reset-password?token=${token}`, {
        newPassword: formData.newPassword,
      });

      if (response.data.success) {
        toast("Password reset successfully.");
        router.push("/login");
      } else {
        toast.error(response.data.message || "Failed to reset password.");
      }
    } catch (error) {
      console.error("Error resetting password:", error);

      if (error.response) {
        if (error.response.status === 400) {
          toast.error(error.response.data.message || "Invalid or expired token.");
        } else if (error.response.status === 404) {
          toast.error("User not found.");
        } else if (error.response.status === 500) {
          toast.error("An internal server error occurred.");
        } else {
          toast.error("An error occurred while resetting password.");
        }
      } else {
        toast.error("Network error or server is down.");
      }
    }
    setIsLoading(false);
  }
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit} className="border rounded-md p-4 w-full md:w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Reset Password</h2> 
        <div className="grid gap-4"> 
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="newPassword">
              New Password
            </Label>
            <Input
              id="newPassword"
              placeholder="Enter your new password"
              value={formData.newPassword}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  newPassword: e.target.value,
                })
              }
              type="password"
              autoCapitalize="none"
              autoComplete="new-password"  
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="confirmPassword">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              placeholder="Confirm your new password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  confirmPassword: e.target.value,
                })
              }
              type="password"
              autoCapitalize="none"
              autoComplete="new-password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading} type="submit">
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Reset Password
          </Button>
        </div>
      </form>
    </div>
  );
}