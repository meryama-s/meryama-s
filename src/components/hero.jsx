<<<<<<< HEAD
const Hero=() =>{
    return (
        <>
        Hero
        </>
    )
}

export default Hero;
=======
import React, { useState } from "react";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    content: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Blog Submitted:", form);
    setIsModalOpen(false);
    setForm({ title: "", content: "", image: "" });
  };

  return (
    <section className="bg-white text-gray-800 py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to <span className="text-blue-600">AutoSouk</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Your ultimate destination for car reviews, news, and auto lifestyle tips. Whether you're a classic car lover or an EV enthusiast, AutoSouk fuels your passion.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="#latest-posts"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Explore Posts
          </a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="border border-blue-600 text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition duration-300"
          >
            Add Blog
          </button>
        </div>
      </div>

      {/* Simple Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Add New Blog</h2>
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
                name="content"
                placeholder="Content"
                value={form.content}
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
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
>>>>>>> origin/sarah
