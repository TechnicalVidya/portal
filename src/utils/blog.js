import axios from "axios";
import { toast } from "sonner";

// Fetch all blogs
export const fetchAllBlogs = async (setCardData, setLoading) => {
  setLoading(true);
  try {
    const { data } = await axios.get("/api/blog/getAll");
    if (data.success) {
      const blogs = data.data.map((blog) => ({
        id: blog._id,
        title: blog.title,
        date: blog.createdAt,
        content: blog.content,
        category: blog.category,
        tags: blog.tags || [],
        urgent: blog.urgent,
        files: blog.files.map((file) => ({
          url: file.url,
          type: file.type,
        })),
      }));
      setCardData(blogs);
    } else {
      toast.error("Failed to fetch blogs.");
    }
  } catch (error) {
    if (error.status != 404) {

      toast.error(
        "Error fetching blogs: " +
        (error.response?.data?.message || error.message)
      );
      console.error("Fetch all blogs error:", error);
    }
  } finally {
    setLoading(false);
  }
};

// Fetch a specific blog by ID
export const fetchBlogById = async (blogId, setBlogData, setLoading) => {
  setLoading(true);
  try {
    const { data } = await axios.get(`/api/blog/get/${blogId}`);
    if (data.success) {
      const blog = data.data;
      setBlogData({
        id: blog._id,
        title: blog.title,
        date: blog.createdAt,
        content: blog.content,
        category: blog.category,
        tags: blog.tags || [],
        urgent: blog.urgent,
        files: blog.files.map((file) => ({
          url: file.url,
          type: file.type,
        })),
      });
    } else {
      toast.error("Failed to fetch the blog.");
    }
  } catch (error) {
    toast.error(
      "Error fetching blog: " + (error.response?.data?.message || error.message)
    );
    console.error("Fetch blog by ID error:", error);
  } finally {
    setLoading(false);
  }
};

export const createBlog = async (blogData) => {
  try {
    const response = await axios.post(`/api/blog/create`, blogData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response?.success) {
      return response?.blog;
    } else {
      throw new Error("Create failed: Success flag not set");
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error("Create blog error:", error);
    return errorMessage
  }
};

export const updateBlog = async (blogId, blogData) => {
  try {
    const { data } = await axios.post(`/api/blog/update/${blogId}`, blogData,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (data.success) {
      return data;
    } else {
      throw new Error("Update failed");
    }
  } catch (error) {
    console.error("Update blog error:", error);
    return (error.response?.data?.message || error.message)
  }
};
// Delete a blog
export const deleteBlog = async (blogId, setLoading) => {
  setLoading(true); // Set loading to true before making the API call
  try {
    const { data } = await axios.delete(`/api/blog/delete/${blogId}`);
    if (data.success) {
      toast.success("Blog deleted successfully!");
    } else {
      toast.error("Failed to delete the blog. Please try again.");
    }
  } catch (error) {
    toast.error(
      "Error deleting blog: " + (error.response?.data?.message || error.message)
    );
    console.error("Delete blog error:", error);
  } finally {
    setLoading(false); // Set loading to false after the API call completes
  }
};
