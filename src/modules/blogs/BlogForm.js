import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/select";
import { TagInput } from "@/components/TagInput";
import RichTextEditor from "./RichTextEditor";
import { createBlog, updateBlog } from "@/utils/blog";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";


// const FormSchema = z.object({
//   title: z.string().min(2, {
//     message: "Title cannot be empty.",
//   }),
//   content: z.string().min(2, {
//     message: "Content cannot be empty.",
//   }),
//   category: z.string().min(1, {
//     message: "Category selection is required.",
//   }),
//   tags: z.string().min(1, {
//     message: "tags are required.",
//   }),
//   files: z.string().min(1, {
//     message: "files are required.",
//   }),
// });

const BlogForm = ({ blogData = null, onSuccess }) => {
  const { control, handleSubmit, reset } = useForm({
    // resolver: zodResolver(FormSchema),
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

  const onSubmit = async (data) => {
    if (!data.content || data.content.trim() === "") {
      toast.error("Content cannot be empty. Please add some content.");
      return;
    }

    setLoading(true);
    try {
      if (blogData) {
        await updateBlog(blogData.id, data, setLoading);
      } else {
        await createBlog(data, setLoading);
      }
      toast.success(`Blog ${blogData ? "updated" : "created"} successfully!`);
      onSuccess({ ...data, id: blogData ? blogData.id : Date.now() });
      reset()
    } catch (error) {
      console.error("Error storing data:", error);
      toast.error(
        `Failed to ${blogData ? "update" : "create"} blog: ${error.response?.data?.message || "An error occurred."
        }`
      );
    } finally {
      setLoading(false);
    }
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
      <Controller
        name="files"
        control={control}
        render={({ field }) => (
          <Input
            type="file"
            multiple
            onChange={(event) => {
              field.onChange(Array.from(event.target.files)); // Pass to form data
            }}
          />
        )}
      />
      <Button type="submit" loading={loading}>
        {blogData ? "Update Blog" : "Create Blog"}
      </Button>
    </form>
  );
};

export default BlogForm;
