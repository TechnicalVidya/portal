import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/select";
import { TagInput } from "@/components/TagInput";
import RichTextEditor from "./RichTextEditor";
import { createBlog, updateBlog } from "@/utils/blog";
import DOMPurify from "dompurify";
const BlogForm = ({ blogData = null, onSave }) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: blogData || {
      title: "",
      content: "",
      category: "",
      tags: [],
      urgent: false,
      files: [],
    },
  });

  console.log(blogData)
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    if (!data.content || data.content.trim() === "") {
      toast.error("Content cannot be empty. Please add some content.");
      return;
    }

    const sanitizedContent = DOMPurify.sanitize(data.content);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", sanitizedContent);
    formData.append("category", data.category);

    data.tags.forEach((tag) => {
      formData.append("tags", tag);
    });

    formData.append("urgent", data.urgent);

    if (data.files.length > 0) {
      data.files.forEach((file) => {
        formData.append("files", file);
      });
    }

    setLoading(true);
    try {
      if (blogData) {
        await updateBlog(blogData.id, formData);
      } else {
        await createBlog(formData);
      }
      toast.success(`Blog ${blogData ? "updated" : "created"} successfully!`);
      // onSuccess({ ...data, id: blogData ? blogData.id : Date.now() });
      onSave(blogData)
      reset();
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-h-[60vh] overflow-y-auto p-3 custom-scroll"
    >
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <Input
            label="Title"
            placeholder="Enter blog title"
            required
            {...field}
            name={field.name}
          />
        )}
      />
      <Controller
        name="content"
        control={control}
        render={({ field }) => (
          <RichTextEditor value={field.value || ""} onChange={field.onChange} />
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
            name={field.name}
          />
        )}
      />
      <Controller
        name="tags"
        control={control}
        render={({ field }) => (
          <TagInput
            name={field.name}
            label="Tags"
            placeholder="Add tags"
            {...field}
          />
        )}
      />
      <Controller
        name="urgent"
        control={control}
        render={({ field }) => (
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
              id="urgent"
              name={field.name}
            />
            <label htmlFor="urgent" className="ml-2">
              Urgent
            </label>{" "}
          </div>
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
              field.onChange(Array.from(event.target.files));
            }}
            name={field.name}
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
