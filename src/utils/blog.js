import axios from "axios";
import { toast } from "sonner";

// Set up the base URL for axios requests
// const API_BASE_URL = process.env.REACT_APP_API_URL + "/api/blog";

// Fetch all blogs
export const fetchAllBlogs = async (setCardData, setLoading) => {
  try {
    const { data } = await axios.get(`/api/blog/getAll`);
    if (data.success) {
      const resData = data.data;
      const blogs = resData.map((blog) => ({
        id: blog._id,
        title: blog.title,
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
    }
  } catch (error) {
    toast.error(error.message);
    console.log(error);
  } finally {
    setLoading(false);
  }
};

// Fetch a specific blog by ID
export const fetchBlogById = async (blogId, setBlogData, setLoading) => {
  try {
    const { data } = await axios.get(`/api/blog/get/${blogId}`);
    if (data.success) {
      const blog = data.data;
      setBlogData({
        id: blog._id,
        title: blog.title,
        content: blog.content,
        category: blog.category,
        tags: blog.tags || [],
        urgent: blog.urgent,
        files: blog.files.map((file) => ({
          url: file.url,
          type: file.type,
        })),
      });
    }
  } catch (error) {
    toast.error(error.message);
  } finally {
    setLoading(false);
  }
};

// Create a new blog
export const createBlog = async (blogData, setLoading) => {
  try {
    const { data } = await axios.post(`/api/blog/create`, blogData);
    if (data.success) {
      toast.success("Blog created successfully!");
    } else {
      toast.error("Failed to create the blog. Please try again.");
    }
  } catch (error) {
    toast.error(error.response?.data?.message || error.message);
  } finally {
    setLoading(false);
  }
};

// Update an existing blog
export const updateBlog = async (blogId, blogData, setLoading) => {
  try {
    const { data } = await axios.post(`/api/blog/update/${blogId}`, blogData);
    if (data.success) {
      toast.success("Blog updated successfully!");
    } else {
      toast.error("Failed to update the blog. Please try again.");
    }
  } catch (error) {
    toast.error(error.response?.data?.message || error.message);
  } finally {
    setLoading(false);
  }
};

// Delete a blog
export const deleteBlog = async (blogId, setLoading) => {
  try {
    const { data } = await axios.delete(`/api/blog/delete/${blogId}`);
    if (data.success) {
      toast.success("Blog deleted successfully!");
    } else {
      toast.error("Failed to delete the blog. Please try again.");
    }
  } catch (error) {
    toast.error(error.response?.data?.message || error.message);
  } finally {
    setLoading(false);
  }
};
