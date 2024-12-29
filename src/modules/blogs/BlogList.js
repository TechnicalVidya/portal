"use client";

import { useState } from "react";
import BlogForm from "./BlogForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { createBlog, updateBlog } from "@/utils/blog";
export default function BlogList({
  editingBlog,
  onSave,
  onCancel,
  isOpen,
  setIsOpen,
  setEditingBlog,
}) {
  const [loading, setLoading] = useState(false);

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
