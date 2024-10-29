import axios from "axios";
import { toast } from "sonner";

// Fetch all blogs
export const fetchAllBlogs = async (setCardData, setLoading) => {
  setLoading(true); // Set loading to true before making the API call
  try {
    const { data } = await axios.get('/api/blog/getAll');
    if (data.success) {
      const blogs = data.data.map((blog) => ({
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
    } else {
      toast.error("Failed to fetch blogs.");
    }
  } catch (error) {
    toast.error(
      "Error fetching blogs: " +
      (error.response?.data?.message || error.message)
    );
    console.error("Fetch all blogs error:", error);
  } finally {
    setLoading(false);
  }
};

// Fetch a specific blog by ID
export const fetchBlogById = async (blogId, setBlogData, setLoading) => {
  setLoading(true); // Set loading to true before making the API call
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

// // Create a new blog
// export const createBlog = async (blogData, setLoading) => {
//   setLoading(true); // Set loading to true before making the API call
//   try {
//     const { data } = await axios.post(
//       `${API_BASE_URL}/api/blog/create`,
//       blogData
//     );
//     if (data.success) {
//       toast.success("Blog created successfully!");
//     } else {
//       toast.error("Failed to create the blog. Please try again.");
//     }
//   } catch (error) {
//     toast.error(
//       "Error creating blog: " + (error.response?.data?.message || error.message)
//     );
//     console.error("Create blog error:", error);
//   } finally {
//     setLoading(false); // Set loading to false after the API call completes
//   }
// };

export const createBlog = async (blogData, setLoading) => {
  setLoading(true);

  try {
    const formData = new FormData();

    for (const key in blogData) {
      if (Object.hasOwnProperty.call(blogData, key)) {
        formData.append(key, blogData[key]);
      }
    }

    console.log("Sending blog data:", [...formData]);

    const { data } = await axios.post(
      `/api/blog/create`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (data.success) {
      toast.success("Blog created successfully!");
    } else {
      toast.error("Failed to create the blog. Please try again.");
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    toast.error("Error creating blog: " + errorMessage);
    console.error("Create blog error:", error);
  } finally {
    setLoading(false);
  }
};

// export const createBlog = async (blogData, setLoading) => {
//   setLoading(true); // Set loading to true before making the API call
//   try {
//     console.log("Sending blog data:", blogData); // Debug log
//     const { data } = await axios.post(
//       `${API_URL}/api/v1/blog/create`,
//       blogData
//     );
//     if (data.success) {
//       toast.success("Blog created successfully!");
//     } else {
//       toast.error("Failed to create the blog. Please try again.");
//     }
//   } catch (error) {
//     const errorMessage = error.response?.data?.message || error.message;
//     toast.error("Error creating blog: " + errorMessage);
//     console.error("Create blog error:", error);
//   } finally {
//     setLoading(false); // Set loading to false after the API call completes
//   }
// };

// Update an existing blog
export const updateBlog = async (blogId, blogData, setLoading) => {
  setLoading(true); // Set loading to true before making the API call
  try {
    const { data } = await axios.post(
      `/api/blog/update/${blogId}`,
      blogData
    );
    if (data.success) {
      toast.success("Blog updated successfully!");
    } else {
      toast.error("Failed to update the blog. Please try again.");
    }
  } catch (error) {
    toast.error(
      "Error updating blog: " + (error.response?.data?.message || error.message)
    );
    console.error("Update blog error:", error);
  } finally {
    setLoading(false); // Set loading to false after the API call completes
  }
};

// Delete a blog
export const deleteBlog = async (blogId, setLoading) => {
  setLoading(true); // Set loading to true before making the API call
  try {
    const { data } = await axios.delete(
      `/api/blog/delete/${blogId}`
    );
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
