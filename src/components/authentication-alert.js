import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { buttonVariants } from "./ui/button"
import Link from "next/link"
import loginAlert from "@/assets/loginAlert.svg"
import Image from "next/image"

export default function AuthenticationAlert() {
    return (
        <AlertDialog defaultOpen={true} >
            <AlertDialogContent>
                <AlertDialogHeader>
                    <Image src={loginAlert}/>
                    <AlertDialogTitle className=" text-center">Please log in to access more features and information. </AlertDialogTitle>
                    <AlertDialogDescription>
                    <div className="flex justify-center mt-3">
        <div className="flex gap-4">
          <Link href="/login" className={buttonVariants()}>
            Login
          </Link>
            <Link
              href="/signup"
              className={buttonVariants({ variant: "outline" })}>
              Sign Up
            </Link>
        </div>
      </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    )
}
