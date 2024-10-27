"use client";

// import { useState, useEffect } from "react";
// import BlogCard from "./BlogCard";
// import BlogForm from "./BlogForm";

// export default function BlogList() {
//   const [blogs, setBlogs] = useState([]);
//   const [editingBlog, setEditingBlog] = useState(null);
//   const isAdmin = true; // Replace with actual admin check logic

//   // Sample data (replace with your real data source or API)
//   useEffect(() => {
//     const sampleBlogs = [
//       // Sample blog data for illustration
//       {
//         id: 1,
//         title: "Sample Blog",
//         date: "2023-10-10",
//         content: "Sample content here...",
//         tags: ["Tag1", "Tag2"],
//         file: "",
//       },
//     ];
//     setBlogs(sampleBlogs);
//   }, []);

//   const handleViewMore = (blog) => {
//     // Display full blog content logic
//     alert(`Viewing full content for: ${blog.title}`);
//   };

//   const handleEdit = (blog) => {
//     if (isAdmin) setEditingBlog(blog);
//     else alert("Only admin can edit blog");
//   };

//   const handleSave = (updatedBlog) => {
//     if (editingBlog) {
//       setBlogs(blogs.map((b) => (b.id === updatedBlog.id ? updatedBlog : b)));
//     } else {
//       setBlogs([updatedBlog, ...blogs]);
//     }
//     setEditingBlog(null);
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Blogs</h2>
//       <BlogForm blogData={editingBlog} onSuccess={handleSave} />
//       {blogs.map((blog) => (
//         <BlogCard
//           key={blog.id}
//           blog={blog}
//           onViewMore={handleViewMore}
//           onEdit={handleEdit}
//         />
//       ))}
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import BlogForm from "./BlogForm";
import { fetchAllBlogs, createBlog, updateBlog } from "@/utils/blog";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const isAdmin = true; // Replace with actual admin check logic

  useEffect(() => {
    const loadBlogs = async () => {
      setLoading(true);
      await fetchAllBlogs(setBlogs, setLoading);
    };
    loadBlogs();
  }, []);

  const handleViewMore = (blog) => {
    alert(`Viewing full content for: ${blog.title}`);
  };

  const handleEdit = (blog) => {
    if (isAdmin) setEditingBlog(blog);
    else alert("Only admin can edit blog");
  };

  const handleSave = async (updatedBlog) => {
    setLoading(true);
    try {
      if (editingBlog) {
        // Update existing blog in the backend
        const updatedData = await updateBlog(editingBlog.id, updatedBlog);
        setBlogs(blogs.map((b) => (b.id === editingBlog.id ? updatedData : b)));
      } else {
        // Create new blog in the backend
        const newBlog = await createBlog(updatedBlog);
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
      <h2 className="text-2xl font-bold mb-4">Blogs</h2>
      <BlogForm blogData={editingBlog} onSuccess={handleSave} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            onViewMore={handleViewMore}
            onEdit={handleEdit}
          />
        ))
      )}
    </div>
  );
}
