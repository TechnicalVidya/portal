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
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { CommandContainer } from "./command";

export function NavAlert() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="text-muted-foreground text-xs flex gap-10"
        >
          Search Events...{" "}
          <div className="text-sm">
            ⌘<span className="text-xs">K</span>
          </div>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-none bg-transparent">
        <CommandContainer />
        {/* <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter> */}
      </AlertDialogContent>
    </AlertDialog>
  );
}
