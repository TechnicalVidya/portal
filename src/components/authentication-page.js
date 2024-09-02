import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { UserAuthForm } from "./hero/user-authform";
import loginImg from '@/assets/loginHero.png'

export default function AuthenticationPage({ isLogin }) {
  return (
    <>
      {
        !isLogin ?
          (
            <>
              <div className="container relative mt-20 md:mt-0 max-h-auto flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="relative hidden flex-col p-10 lg:flex dark:border-r">
                  <Image src={loginImg} className="rounded-xl"/>
                </div>
                <div className="lg:p-8">
                  <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                      <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
                      <p className="text-sm text-muted-foreground">
                        Enter Student Details
                      </p>
                    </div>
                    <UserAuthForm />
                    <p className="px-8 text-center text-sm text-muted-foreground">
                      By clicking continue, you agree to our{" "}
                      <Link
                        href="/terms"
                        className="underline underline-offset-4 hover:text-primary"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="underline underline-offset-4 hover:text-primary"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </>
          )
          :
          (
            <>
              <div className="md:hidden">
              </div>
              <div className="container relative mt-20 md:mt-0 h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="relative flex-col p-10 lg:flex dark:border-r">
                  <Image src={loginImg} className="rounded-xl"/>
                </div>
                <div className="lg:p-8">
                  <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                      <h1 className="text-2xl font-semibold tracking-tight">Log In</h1>
                      <p className="text-sm text-muted-foreground">
                        Enter your ERP-ID below to login in your account
                      </p>
                    </div>
                    <UserAuthForm isLogin={isLogin} />
                    <p className="px-8 text-center text-sm text-muted-foreground">
                      By clicking continue, you agree to our{" "}
                      <Link
                        href="/terms"
                        className="underline underline-offset-4 hover:text-primary"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="underline underline-offset-4 hover:text-primary"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </>
          )
      }
    </>
  )
}
