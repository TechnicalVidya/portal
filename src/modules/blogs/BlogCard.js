import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DOMPurify from "dompurify";

const isAdmin = true;

export default function BlogCard({ blog, onViewMore, onEdit }) {
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
  const sanitizedContent = DOMPurify.sanitize(blog.content)
  console.log(blog.content);
  return (
    <Card className="my-4 shadow-lg bg-white text-black">
      <CardHeader className="text-2xl font-bold">{blog.title}</CardHeader>
      <CardContent className="text-slate-600">
        <div className="text-sm mb-2">{blog.date.split("T")[0]}</div>
        <div
          className="truncate"
        >
          {extractTextContent(sanitizedContent)}
        </div>{" "}
        {/* Render sanitized content */}
        {blog.file && (
          <a
            href={blog.file}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            View Attached File
          </a>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex space-x-2">
          {blog.tags.map((tag, index) => (
            <span key={index} className="text-sm text-gray-400">
              {tag}
            </span>
          ))}
        </div>
        <div className="space-x-2">
          <Button
            variant="link"
            onClick={() => onViewMore(blog)}
            className="text-black"
          >
            View More
          </Button>
          {isAdmin && (
            <Button
              variant="link"
              onClick={() => onEdit(blog)}
              className="text-black"
            >
              Edit Blog
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
