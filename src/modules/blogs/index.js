"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import heroImg from "@/assets/EveHero.png";
import { fetchAllBlogs, updateBlog } from "@/utils/blog"; // Import updateBlog
import Heading from "@/components/ui/heading";
import Image from "next/image";
import BlogList from "./BlogList";
import BlogCard from "./BlogCard";
import { Badge } from "@/components/ui/badge";

export default function BlogPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null); // Manage editingBlog state here
  const router = useRouter();

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
    router.push(`/blogs/${blog.id}`);
  };

  const handleEdit = (blog) => {
    setIsOpen(true);
    setEditingBlog(blog);
  };

  const handleSave = async (updatedBlog) => {
    try {
      if (editingBlog) {
        const updatedBlogs = blogs.map((b) =>
          b.id === updatedBlog.id ? updatedBlog : b
        );
        setBlogs(updatedBlogs);
        setIsOpen(false);
        setEditingBlog(null);
      } else {
        setBlogs((prev) => [...prev, updatedBlog]);
        setIsOpen(false);
      }
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };
  const handleCancelEdit = () => {
    setEditingBlog(null);
  };

  return (
    <>
      <section className=" bg-contain pt-5 md:py-10 px-4">
        <div className="flex flex-col pt-8">
          <main className="flex-grow flex flex-col items-center justify-center">
            <div className="flex items-center justify-center mb-4">
              <Badge
                className={
                  "bg-secondary hover:bg-muted text-sm flex justify-between gap-3 text-muted-foreground"
                }
              >
                <p>🎉</p>
                <p>Blogs !</p>
              </Badge>
            </div>

            <div className="flex flex-col items-center gap-4 p-4">
              <h1 className="scroll-m-20 text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight text-center">
              Stay Ahead: Notices, Research, Updates!
              </h1>
            </div>
            <div className='flex flex-row gap-5 pt-5'>
              <BlogList
                setEditingBlog={setEditingBlog}
                editingBlog={editingBlog}
                onSave={handleSave}
                onCancel={handleCancelEdit}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            </div>
          </main>
        </div>
      </section>
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <div className="grid items-center justify-center">
          <Heading heading={"Recent Blogs"} />
        </div>
      </section>
      <div className="container mx-auto px-6">
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {blogs.length > 0 ? (
                blogs.map((blog) =>
                  blog ? (
                    <BlogCard
                      key={blog.id}
                      blog={blog}
                      onViewMore={() => handleViewMore(blog)}
                      onEdit={() => handleEdit(blog)}
                    />
                  ) : null
                )
              ) : (
                <p>No blogs available.</p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
