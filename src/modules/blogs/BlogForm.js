import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/select";
import { TagInput } from "@/components/TagInput";
import RichTextEditor from "./RichTextEditor";
import { createBlog, updateBlog } from "@/utils/blog";

const BlogForm = ({ blogData = null, onSuccess }) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: blogData || {
      title: "",
      content: "",
      category: "",
      tags: [],
      files: [],
      createdAt: new Date().toISOString(),
    },
  });
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);

  const onSubmit = async (data) => {
    if (!data.content || data.content.trim() === "") {
      toast.error("Content cannot be empty. Please add some content.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("category", data.category);

    data.tags.forEach((tag) => formData.append("tags[]", tag));

    if (files.length === 0) {
      toast.error("At least one file is required.");
      setLoading(false);
      return;
    }

    files.forEach((file) => formData.append("files", file));

    try {
      if (blogData) {
        await updateBlog(blogData.id, formData, setLoading);
      } else {
        await createBlog(formData, setLoading);
      }
      toast.success(`Blog ${blogData ? "updated" : "created"} successfully!`);
      onSuccess({ ...data, id: blogData ? blogData.id : Date.now() });
      reset();
      setFiles([]);
    } catch (error) {
      console.error("Error storing data:", error);
      toast.error(
        `Failed to ${blogData ? "update" : "create"} blog: ${
          error.response?.data?.message || "An error occurred."
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    setFiles([...event.target.files]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <Input
            label="Title"
            placeholder="Enter blog title"
            required
            {...field}
          />
        )}
      />
      <Controller
        name="content"
        control={control}
        render={({ field }) => (
          <RichTextEditor value={field.value} onChange={field.onChange} />
        )}
      />
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <Select
            label="Category"
            placeholder="Select category"
            options={["Results", "Notices", "Events", "General"]}
            {...field}
          />
        )}
      />
      <Controller
        name="tags"
        control={control}
        render={({ field }) => (
          <TagInput label="Tags" placeholder="Add tags" {...field} />
        )}
      />
      <div>
        <label className="block text-sm font-medium">Upload Files</label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="mt-1"
        />
      </div>
      <Button type="submit" loading={loading}>
        {blogData ? "Update Blog" : "Create Blog"}
      </Button>
    </form>
  );
};

export default BlogForm;
