"use client";

// import { useState, useEffect } from "react";
// import BlogCard from "./BlogCard";
// import BlogForm from "./BlogForm";

// export default function BlogList() {
//   const [blogs, setBlogs] = useState([]);
//   const [editingBlog, setEditingBlog] = useState(null);
//   const isAdmin = true; // Replace with actual admin check logic

//   // Load blogs from localStorage on component mount
//   useEffect(() => {
//     const savedBlogs = localStorage.getItem("blogs");
//     if (savedBlogs) {
//       setBlogs(JSON.parse(savedBlogs));
//     } else {
//       // Sample data (replace with your real data source or API)
//       const sampleBlogs = [
//         {
//           id: 1,
//           title: "Sample Blog",
//           date: "2023-10-10",
//           content: "Sample content here...",
//           tags: ["Tag1", "Tag2"],
//           file: "",
//         },
//       ];
//       setBlogs(sampleBlogs);
//       localStorage.setItem("blogs", JSON.stringify(sampleBlogs));
//     }
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
//       const updatedBlogs = blogs.map((b) =>
//         b.id === updatedBlog.id ? updatedBlog : b
//       );
//       setBlogs(updatedBlogs);
//       localStorage.setItem("blogs", JSON.stringify(updatedBlogs)); // Save to localStorage
//     } else {
//       const newBlogs = [updatedBlog, ...blogs];
//       setBlogs(newBlogs);
//       localStorage.setItem("blogs", JSON.stringify(newBlogs)); // Save to localStorage
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
      try {
        await fetchAllBlogs(setBlogs, setLoading);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        alert("Failed to load blogs. Please try again.");
      } finally {
        setLoading(false);
      }
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
      <h2 className="text-2xl font-bold mb-4">Blogs</h2>
      <BlogForm blogData={editingBlog} onSuccess={handleSave} />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {blogs.length > 0 ? (
            blogs.map((blog) =>
              blog ? (
                <BlogCard
                  key={blog.id} // Safe access to id
                  blog={blog}
                  onViewMore={handleViewMore}
                  onEdit={handleEdit}
                />
              ) : null
            )
          ) : (
            <p>No blogs available.</p>
          )}
        </>
      )}
    </div>
  );
}
