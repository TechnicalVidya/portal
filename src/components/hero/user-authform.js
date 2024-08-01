"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { handleLogin } from "@/utils/login";
import UserSignup from "./user-signup";
import Link from "next/link";

export function UserAuthForm({ className, isLogin, ...props }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({
    erpID: 111111,
    erpPassword: "111111",
  });
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const loginStatus = await handleLogin(formData, dispatch);
    setIsLoading(false);
    if (loginStatus) router.push("/");
  }

  return (
    <>
      {
        !isLogin ? (
          <div className={cn("grid gap-6", className)} {...props} >
            <UserSignup />
          </div>
        )
          : (

            <div className={cn("grid gap-6", className)} {...props} >
              <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <Label className="sr-only" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      id="erpID"
                      placeholder="000000"
                      value={formData.erpID}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          erpID: parseInt(e.target.value) || 0,
                        })
                      }
                      type="text"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      disabled={isLoading}
                    />
                  </div >

                  <div className="grid gap-1">
                    <Label className="sr-only" htmlFor="email">
                      Password
                    </Label>
                    <Input
                      id="password"
                      placeholder="******"
                      value={formData.erpPassword}
                      onChange={(e) =>
                        setFormData({ ...formData, erpPassword: e.target.value })
                      }
                      type="password"
                      autoCapitalize="none"
                      autoComplete="password"
                      autoCorrect="off"
                      disabled={isLoading}
                    />
                  </div>
                  <Button disabled={isLoading} type="submit">
                    {isLoading && (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Sign In 
                  </Button>
                </div >
              </form >
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or
                  </span>
                </div>
              </div>
              <Button variant="outline" type="button" disabled={isLoading}>
                {/* {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "} */}
                <Link href='/signup'>
                  Sign Up
                </Link>
              </Button>
            </div >
          )
      }
    </>
  )
}
