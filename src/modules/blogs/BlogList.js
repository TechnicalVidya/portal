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

export default function BlogList({ editingBlog, onSave, onCancel , isOpen , setIsOpen }) {
  const [loading, setLoading] = useState(false);

  const handleSave = async (updatedBlog) => {
    setLoading(true);
    try {
      if (editingBlog) {
        const updatedData = await updateBlog(editingBlog.id, updatedBlog);
        onSave(updatedData);
      } else {
        const newBlog = await createBlog(updatedBlog, setLoading);
        onSave(newBlog);
      }
    } catch (error) {
      console.error("Failed to save blog:", error);
      alert("Failed to save blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={(val) => setIsOpen(val)}>
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
                onSuccess={handleSave}
                onCancel={onCancel}
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
