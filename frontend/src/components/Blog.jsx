import React, { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blogs')
      .then(r => r.json())
      .then(d => { 
        if (d && d.data && Array.isArray(d.data)) setBlogs(d.data);
        else if (Array.isArray(d)) setBlogs(d);
        else setBlogs([]);
      })
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading || blogs.length === 0) return null;

  return (
    <section id="blog" className="py-24 border-t border-outline-variant bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-surface-container text-brand-600 text-sm font-semibold tracking-wider mb-4 border border-outline-variant">ARTIKEL & STUDI KASUS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Blog</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, 3).map((blog, idx) => (
            <div key={blog.id} className="group bg-surface border border-outline-variant rounded-3xl overflow-hidden hover:border-brand-500 hover:shadow-lg hover:shadow-brand-500/10 transition-all reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <div className="aspect-[16/9] w-full bg-surface-container overflow-hidden">
                {blog.image ? (
                  <img 
                    src={blog.image.startsWith('http') ? blog.image : `/api/uploads/${blog.image}`} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-surface-container-high text-secondary">
                    <span className="text-4xl font-bold opacity-20">{blog.title.charAt(0)}</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <p className="text-xs text-secondary mb-3">{new Date(blog.created_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-brand-600 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-secondary line-clamp-3 mb-6 text-sm">
                  {blog.content}
                </p>
                <div className="flex items-center text-brand-600 font-medium text-sm group-hover:gap-2 transition-all">
                  <span>Baca selengkapnya</span>
                  <FiArrowRight className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
