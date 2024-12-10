//"use client";
/*
import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import BlogForm from "./BlogForm";
import { fetchAllBlogs, createBlog, updateBlog } from "@/utils/blog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSave = async (updatedBlog) => {
    setLoading(true);
    try {
      if (editingBlog) {
        const updatedData = await updateBlog(editingBlog.id, updatedBlog);

        setBlogs(blogs.map((b) => (b.id === editingBlog.id ? updatedData : b)));
      } else {
        // Create new blog in the backend
        const newBlog = await createBlog(updatedBlog, setLoading);
        setBlogs([newBlog, ...blogs]);
      }

      setEditingBlog(null);
    } catch (error) {
      console.error("Failed to save blog:", error);
      alert("Failed to save blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger className="bg-black text-white rounded-lg p-2">
          Add New Blog
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-4xl font-bold text-center my-8">
              ADMIN DASHBOARD
            </DialogTitle>
            <DialogDescription>
              <BlogForm blogData={editingBlog} onSuccess={handleSave} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}*/

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

export default function BlogList({ editingBlog, onSave, onCancel }) {
  const [loading, setLoading] = useState(false);

  const handleSave = async (updatedBlog) => {
    setLoading(true);
    try {
      if (editingBlog) {
        const updatedData = await updateBlog(editingBlog.id, updatedBlog); // Assuming updateBlog handles the update
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
      <Dialog>
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
