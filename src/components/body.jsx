import React, { useState } from "react";

const initialPosts = [
  {
    title: "Top 5 Electric Cars in 2025",
    description:
      "Explore the most innovative and efficient electric vehicles dominating the market this year.",
    image:
      "https://freerangestock.com/sample/149266/young-female-mechanic-on-a-creeper-under-a-car.jpg",
  },
  {
    title: "Classic Cars That Never Die",
    description:
      "A look at timeless designs and engineering that still turn heads decades later.",
    image:
      "https://www.autotrainingcentre.com/wp-content/uploads/2024/07/auto-mechanic.jpg",
  },
  {
    title: "How to Maintain Your Car Like a Pro",
    description:
      "Simple maintenance tips that can extend your vehicle's life and performance.",
    image: "https://www.baker.edu/wp-content/uploads/female-mechanic.jpg",
  },
];

export default function Body() {
  const [posts, setPosts] = useState(initialPosts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // null means adding new
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
  });

  const openAddModal = () => {
    setEditIndex(null);
    setForm({ title: "", description: "", image: "" });
    setIsModalOpen(true);
  };

  const openEditModal = (index) => {
    setEditIndex(index);
    setForm({
      title: posts[index].title,
      description: posts[index].description,
      image: posts[index].image,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (index) => {
    if (
      window.confirm(`Are you sure you want to delete "${posts[index].title}"?`)
    ) {
      setPosts(posts.filter((_, i) => i !== index));
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Edit existing post
      const updatedPosts = [...posts];
      updatedPosts[editIndex] = {
        title: form.title,
        description: form.description,
        image: form.image,
      };
      setPosts(updatedPosts);
    } else {
      // Add new post
      setPosts([...posts, form]);
    }
    setIsModalOpen(false);
    setForm({ title: "", description: "", image: "" });
  };

  return (
    <section className="bg-white py-16 px-6" id="latest-posts">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Latest Posts
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div
              key={index}
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
                    onClick={() => openEditModal(index)}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm px-3 py-1 border border-blue-600 rounded transition"
                    aria-label={`Edit ${post.title}`}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
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
              {editIndex !== null ? "Edit Blog" : "Add New Blog"}
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
                  {editIndex !== null ? "Save Changes" : "Add Blog"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
