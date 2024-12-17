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
  setEditingBlog
}) {
  const [loading, setLoading] = useState(false);

  // const handleSave = async (updatedBlog) => {
  //   setLoading(true);
  //   try {

  //     if (editingBlog) {
  //       const updatedData = await updateBlog(editingBlog.id, updatedBlog); // Assuming updateBlog handles the update
  //       onSave(updatedData);
  //     } else {
  //       const newBlog = createBlog(updatedBlog, setLoading);
  //       onSave(newBlog);
  //     }
  //   } catch (error) {
  //     console.error("Failed to save blog:", error);
  //     alert("Failed to save blog. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleSave = async (updatedBlog) => {
  //   try {
  //     if (editingBlog) {
  //       const updatedData = await updateBlog(editingBlog.id, updatedBlog);
  //       onSave(updatedData);
  //     } else {
  //       const newBlog = await createBlog(updatedBlog); // Pass setLoading here
  //       onSave(newBlog); // You may need to modify this depending on the response
  //     }
  //   } catch (error) {
  //     console.error("Failed to save blog:", error);
  //     alert("Failed to save blog. Please try again.");
  //   }
  // };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={(val) => { setIsOpen(val); if (val == false) { setEditingBlog(null) } }}>
        <DialogTrigger className="bg-black text-white rounded-lg p-2">
          Add New Blog
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-4xl font-bold text-center my-8">
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
