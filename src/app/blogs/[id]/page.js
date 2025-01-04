"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import DOMPurify from "dompurify";
import { fetchBlogById } from "@/utils/blog";

export default function BlogDetailsPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [pdfUrls, setPdfUrls] = useState({});

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

  useEffect(() => {
    const fetchFile = async (fileUrl, fileName) => {
      try {
        const response = await fetch(fileUrl);
        const arrayBuffer = await response.arrayBuffer();
        const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        setPdfUrls((prevUrls) => ({ ...prevUrls, [fileName]: url }));
      } catch (error) {
        console.error("Error fetching file:", error);
      }
    };
  
    if (blog && blog.files) {
      blog.files.forEach((file) => {
        if (file.type.includes("pdf")) {
          fetchFile(file.url, file.url.split("/").pop());
        }
      });
    }
  }, [blog]);
  const decodeHtmlEntities = (htmlString) => {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = htmlString;
    return textarea.value;
  };

  const extractTextContent = (htmlString) => {
    const decodedHtml = decodeHtmlEntities(htmlString); // Decode HTML entities
    const parser = new DOMParser();
    const doc = parser.parseFromString(decodedHtml, 'text/html');
    return doc.body.textContent || '';
  };

  if (error) return <p className="text-red-500">{error}</p>;
  if (loading) return <p>Loading...</p>;

  const sanitizedContent = DOMPurify.sanitize(blog.content)
  console.log(blog.content, sanitizedContent)

  const renderFileContent = (files) => {
    return files.map((file, index) => {
      const fileExtension = file.type.split("/").pop().toLowerCase();
      if (file.type.includes("image")) {
        return (
          <img
            key={index}
            src={file.url}
            alt="Uploaded content"
            className="mt-4 w-96 h-auto rounded shadow cursor-pointer"
            onClick={() => setSelectedImage(file.url)}
          />
        );
      } else if (fileExtension === "pdf") {
        return (
          <div key={index} className="mt-4 flex flex-col items-start">
            <a
              href={pdfUrls[file.url.split("/").pop()]}
              target="_blank"
              rel="noopener noreferrer"
              download={file.url.split("/").pop()}
              type="application/pdf"
              className="flex items-center flex-col"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center shadow">
                <img src="/PDF-icon.png" alt="PDF Icon" className="w-8 h-8" />
              </div>
              <span className="text-sm text-blue-400 underline mt-2">
                {file.url.split("/").pop()}
              </span>
            </a>
          </div>
        );
      }
      return null;
    });
  };
  
  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center ">
      <Card className="my-4 shadow-lg bg-white text-black min-h-[50vh] min-w-[80vw]  ">
        <CardHeader className="text-2xl font-bold">{blog.title}</CardHeader>
        <CardContent>
          <div className="text-sm text-gray-500 mb-2">
            {new Date(blog.date).toLocaleDateString()}
          </div>
          <div
            className="text-lg mb-4"
          >
            {extractTextContent(sanitizedContent)}
          </div>
          {blog.files && blog.files.length > 0 && renderFileContent(blog.files)}
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

      {/**** Image Preview Modal ****/}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-screen-lg max-h-screen-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged preview"
              className="w-full h-auto rounded-lg shadow-lg"
            />

            <button
              className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
