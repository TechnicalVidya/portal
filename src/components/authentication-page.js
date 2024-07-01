import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { UserAuthForm } from "./hero/user-authform";

export default function AuthenticationPage() {
  return (
    <>
      <div className="md:hidden">
        {/* <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        /> */}
      </div>
      <div className="container relative mt-20 md:mt-0 h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        {/* <p
          // href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8 invisible md:visible"
          )}
        >
          Sign Up
        </p> */}
        <div className="relative hidden h-full flex-col bg-muted p-10 lg:flex dark:border-r">
          <div className="absolute inset-0 bg-muted" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Ltce Students Portal
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                Unlock endless possibilities with our feature-packed event
                website - streamlined RSVPs, interactive schedules, and seamless
                networking!
              </p>
              <footer className="text-sm">Ansh Varma</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Log In</h1>
              <p className="text-sm text-muted-foreground">
                Enter your ERP-ID below to login in your account
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
  );
}

// import Head from "next/head";
// import LoginForm from "../components/LoginForm";
// import Mesh from "@/assets/mesh-gradient.png";
// import Image from "next/image";
// import { UserAuthForm } from "./hero/user-authform";

// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title>Login Page</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <section className="container flex flex-col md:flex-row">
//         <div className="image-section w-full md:w-1/2 relative">
//           <div className="image-wrapper">
//             <Image src={Mesh} alt="" />
//           </div>
//           <div className="content-container absolute inset-0 flex flex-col justify-center items-center text-center bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm p-8">
//             <h1 className="section-heading text-3xl md:text-5xl font-semibold mb-4">
//               Empowering Minds Through Digital{" "}
//               <span className="text-primary">Education.</span>
//             </h1>
//             <p className="section-paragraph text-gray-700">
//               Unlock endless possibilities with our feature-packed event website
//               - streamlined RSVPs, interactive schedules, and seamless
//               networking! Every step forward is a step towards knowledge.
//               Embrace the journey.
//             </p>
//             <span className="mt-2"> ~ Ansh Varma </span>
//           </div>
//         </div>

//         {/* <LoginForm /> */}
//         <UserAuthForm />
//       </section>
//     </div>
//   );
// }
