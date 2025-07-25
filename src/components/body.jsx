import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Body() {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editPostId, setEditPostId] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all posts on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs/");
        setPosts(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const openAddModal = () => {
    setEditPostId(null);
    setForm({ title: "", description: "", image: "" });
    setIsModalOpen(true);
  };

  const openEditModal = (postId) => {
    const post = posts.find((p) => p._id === postId);
    if (!post) return;

    setEditPostId(postId);
    setForm({
      title: post.title,
      description: post.description,
      image: post.image,
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (postId) => {
    if (window.confirm(`Are you sure you want to delete this post?`)) {
      try {
        await axios.delete(`http://localhost:5000/api/blogs/${postId}`);
        setPosts(posts.filter((post) => post._id !== postId));
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editPostId !== null) {
        // Edit existing post
        const response = await axios.put(
          `http://localhost:5000/api/blogs/${editPostId}`,
          form
        );

        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post._id === editPostId ? response.data : post
          )
        );
      } else {
        // Add new post
        const response = await axios.post(
          "http://localhost:5000/api/blogs/",
          form
        );
        setPosts((prevPosts) => [...prevPosts, response.data]);
      }

      // Reset form and close modal
      setIsModalOpen(false);
      setForm({ title: "", description: "", image: "" });
      setEditPostId(null); // Clear edit state
    } catch (err) {
      setError(err.message);
    }
  };


  if (isLoading) {
    return (
      <section className="bg-white py-16 px-6" id="latest-posts">
        <div className="max-w-6xl mx-auto text-center">Loading...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-white py-16 px-6" id="latest-posts">
        <div className="max-w-6xl mx-auto text-center text-red-500">
          Error: {error}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 px-6" id="latest-posts">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-800">Latest Posts</h2>
          <button
            onClick={openAddModal}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Add New Post
          </button>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 flex-grow">{post.description}</p>
                <div className="mt-4 flex justify-end gap-3">
                  <button
                    onClick={() => openEditModal(post._id)}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm px-3 py-1 border border-blue-600 rounded transition"
                    aria-label={`Edit ${post.title}`}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="text-red-600 hover:text-red-800 font-semibold text-sm px-3 py-1 border border-red-600 rounded transition"
                    aria-label={`Delete ${post.title}`}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">
              {editPostId !== null ? "Edit Blog" : "Add New Blog"} {/* ✅ FIXED */}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-600"
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-600"
                required
              ></textarea>
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={form.image}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-600"
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                >
                  {editPostId !== null ? "Save Changes" : "Add Blog"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
