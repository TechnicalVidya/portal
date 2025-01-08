"use client";

import { useSelector } from "react-redux";
import BlogForm from "./BlogForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
export default function BlogList({
  editingBlog,
  onSave,
  onCancel,
  isOpen,
  setIsOpen,
  setEditingBlog,
}) {
  const { user } = useSelector((state) => state.user);
  const hasPermission = user && user.erpID === "111111";
  //const hasPermission = user && user.erpID === "220600077";

  if(!hasPermission){
    return null;
  }
  return (
    <div>
      <Dialog
        open={isOpen}
        onOpenChange={(val) => {
          setIsOpen(val);
          if (val == false) {
            setEditingBlog(null);
          }
        }}
      >
        <DialogTrigger className="bg-black text-white rounded-lg p-2">
          Add New Blog
        </DialogTrigger>
        <DialogContent className="mr-5">
          <DialogHeader>
            <DialogTitle className="text-4xl font-bold text-center my-8 ">
              ADMIN DASHBOARD
            </DialogTitle>
            <DialogDescription>
              <BlogForm
                blogData={editingBlog}
                onCancel={onCancel}
                onSave={onSave}
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
