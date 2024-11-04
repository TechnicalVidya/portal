"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import DOMPurify from "dompurify";
import { fetchBlogById } from "@/utils/blog";

export default function BlogDetailsPage() {
  const { id } = useParams(); // useParams to access the dynamic route parameter
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogData = async () => {
      if (id) {
        setLoading(true); 
        try {
          await fetchBlogById(id, setBlog, setLoading);
        } catch (error) {
          console.error("Error fetching blog:", error);
          setError("Blog not found"); 
        } finally {
          setLoading(false); 
        }
      }
    };
    loadBlogData(); 
  }, [id]);
  
  // Sanitize the blog content before rendering
  const sanitizedContent = DOMPurify.sanitize(blog.content);

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="my-4 shadow-lg bg-white text-black">
        <CardHeader className="text-2xl font-bold">{blog.title}</CardHeader>
        <CardContent>
          <div className="text-sm text-gray-500 mb-2">{new Date(blog.date).toLocaleDateString()}</div>
          <p className="text-lg mb-4" dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
          {blog.file && (
            <a
              href={blog.file}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              View Attached File
            </a>
          )}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap space-x-2 mt-4">
              {blog.tags.map((tag, index) => (
                <span key={index} className="text-sm text-gray-400">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
