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

export default function AuthenticationAlert() {
    return (
        <AlertDialog defaultOpen={true} >
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Wanna See More?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Try logging in first <a href='/login' className="border-b-2 border-b-gray-400 hover:border-b-blue-400 pb-1 text-blue-700">click here to login</a>
                    </AlertDialogDescription>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    )
}
