import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, ExternalLink } from "lucide-react";
import DOMPurify from "dompurify";


//const isAdmin = true;

export default function BlogCard({ blog, onViewMore, onEdit }) {
  const decodeHtmlEntities = (htmlString) => {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = htmlString;
    return textarea.value;
  };

  const extractTextContent = (htmlString) => {
    const decodedHtml = decodeHtmlEntities(htmlString);
    const parser = new DOMParser();
    const doc = parser.parseFromString(decodedHtml, 'text/html');
    return doc.body.textContent || '';
  };

  const sanitizedContent = DOMPurify.sanitize(blog.content);
  const truncatedContent = extractTextContent(sanitizedContent).slice(0, 150) + '...';

  return (
    <Card className="my-4 hover:shadow-xl transition-shadow duration-300 ">
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold hover:text-gray-600 transition-colors duration-200">
            {blog.title}
          </h2>
        </div>
        {blog.date && (
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            {blog.date.split("T")[0]}
          </div>
        )}
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="leading-relaxed line-clamp-3">
          {truncatedContent}
        </p>
        
        {blog.file && (
          <a
            href={blog.file}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-200"
          >
            <FileText className="w-4 h-4 mr-2" />
            <span>View Attached File</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        )}
      </CardContent>

      <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 pt-4 border-t">
        <div className="flex flex-wrap gap-2">
          {blog.tags?.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors duration-200"
            >
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-2">
          <Button
            variant="outline"
            onClick={() => onViewMore(blog)}
          >
            Read More
          </Button>
          {/* {isAdmin && ( */}
            <Button
              variant="outline"
              onClick={() => onEdit(blog)}
            >
              Edit
            </Button>
          {/* )} */}
        </div>
      </CardFooter>
    </Card>
  );
}