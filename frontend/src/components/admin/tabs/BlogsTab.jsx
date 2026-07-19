import React, { useState, useEffect } from 'react';
import { FiPlus, FiFolder, FiHome, FiEdit2, FiTrash2, FiSearch, FiGrid, FiList, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import BlogModal from './../BlogModal';

const BlogsTab = () => {
  const [blogs, setBlogs] = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [errorBlogs, setErrorBlogs] = useState('');
  const [blogSearchTerm, setBlogSearchTerm] = useState('');
  const [blogCurrentPage, setBlogCurrentPage] = useState(1);
  const [blogViewMode, setBlogViewMode] = useState('list');
  const blogsPerPage = 10;

  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const fetchBlogs = async () => {
    try {
      setLoadingBlogs(true);
      const res = await fetch('/api/blogs');
      const data = await res.json();
      if (res.ok) setBlogs(data.data);
      else setErrorBlogs(data.error);
    } catch (err) {
      setErrorBlogs('Gagal memuat artikel blog.');
    } finally {
      setLoadingBlogs(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const openAddBlogModal = () => {
    setSelectedBlog(null);
    setIsBlogModalOpen(true);
  };

  const openEditBlogModal = (blog) => {
    setSelectedBlog(blog);
    setIsBlogModalOpen(true);
  };

  const handleDeleteBlog = async (id) => {
    if (!window.confirm('Yakin ingin menghapus artikel ini?')) return;
    try {
      const res = await fetch(`/api/admin/blogs/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      if (res.ok) {
        setBlogs(prev => prev.filter(p => p.id !== id));
      } else {
        alert('Gagal menghapus artikel');
      }
    } catch (err) {
      alert('Gagal menghubungi server');
    }
  };

  const filteredBlogs = blogs.filter(p => p.title.toLowerCase().includes(blogSearchTerm.toLowerCase()));
  const totalBlogPages = Math.ceil(filteredBlogs.length / blogsPerPage) || 1;
  const paginatedBlogs = filteredBlogs.slice((blogCurrentPage - 1) * blogsPerPage, blogCurrentPage * blogsPerPage);

  return (
    <div className="animate-fade-in">
      <header className="mb-8 flex flex-col lg:flex-row justify-between lg:items-end gap-6">
        <div>
          <h2 className="text-3xl font-headline-md text-primary">Artikel / Blog</h2>
          <p className="text-secondary mt-2">Kelola tulisan dan studi kasus portofolio Anda.</p>
        </div>
        <button 
          onClick={openAddBlogModal}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl font-label-md hover:bg-neutral-800 transition-colors shrink-0"
        >
          <FiPlus /> Tambah Artikel
        </button>
      </header>

      {loadingBlogs ? (
        <div className="text-center py-20 text-secondary"><div className="inline-block w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-4"></div><p>Memuat artikel...</p></div>
      ) : errorBlogs ? (
        <div className="p-6 bg-red-500/10 text-red-500 rounded-2xl border border-red-500/20">{errorBlogs}</div>
      ) : (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="relative w-full max-w-md">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" />
              <input
                type="text"
                placeholder="Cari artikel berdasarkan judul..."
                value={blogSearchTerm}
                onChange={(e) => {
                  setBlogSearchTerm(e.target.value);
                  setBlogCurrentPage(1);
                }}
                className="w-full pl-11 pr-4 py-3 bg-surface border border-outline-variant rounded-2xl focus:outline-none focus:border-blue-500 transition-colors text-primary"
              />
            </div>
          </div>

          <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead className="bg-surface-container text-secondary text-sm">
                <tr>
                  <th className="py-4 px-6 font-medium">Cover</th>
                  <th className="py-4 px-6 font-medium">Judul</th>
                  <th className="py-4 px-6 font-medium hidden md:table-cell">Slug</th>
                  <th className="py-4 px-6 font-medium text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant text-sm text-primary">
                {paginatedBlogs.map(blog => (
                  <tr key={blog.id} className="hover:bg-surface-container/50 transition-colors">
                    <td className="py-3 px-6">
                      <div className="w-16 h-12 bg-surface-container rounded-lg overflow-hidden relative">
                        {blog.image ? (
                          <img src={blog.image.startsWith('http') ? blog.image : `/api/uploads/${blog.image}`} alt={blog.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-secondary/50">
                            <FiFolder />
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-6 font-medium line-clamp-2">{blog.title}</td>
                    <td className="py-3 px-6 hidden md:table-cell text-secondary max-w-[200px] truncate">{blog.slug}</td>
                    <td className="py-3 px-6 text-right">
                      <div className="flex justify-end gap-2">
                        <button onClick={() => openEditBlogModal(blog)} className="p-2 text-blue-500 hover:bg-blue-500/10 rounded-xl transition-colors"><FiEdit2 /></button>
                        <button onClick={() => handleDeleteBlog(blog.id)} className="p-2 text-red-500 hover:bg-red-500/10 rounded-xl transition-colors"><FiTrash2 /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {paginatedBlogs.length === 0 && (
              <div className="p-8 text-center text-secondary">Belum ada artikel.</div>
            )}
          </div>
          
          {totalBlogPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8 border-t border-outline-variant pt-6">
              <button 
                onClick={() => setBlogCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={blogCurrentPage === 1}
                className="p-2 rounded-xl border border-outline-variant text-secondary hover:bg-surface-container hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiChevronLeft />
              </button>
              <span className="text-sm font-medium text-secondary">
                Halaman {blogCurrentPage} dari {totalBlogPages}
              </span>
              <button 
                onClick={() => setBlogCurrentPage(prev => Math.min(prev + 1, totalBlogPages))}
                disabled={blogCurrentPage === totalBlogPages}
                className="p-2 rounded-xl border border-outline-variant text-secondary hover:bg-surface-container hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiChevronRight />
              </button>
            </div>
          )}
        </div>
      )}

      <BlogModal 
        isOpen={isBlogModalOpen} 
        onClose={() => setIsBlogModalOpen(false)} 
        blog={selectedBlog} 
        onSave={() => {
          setIsBlogModalOpen(false);
          fetchBlogs();
        }} 
      />
    </div>
  );
};

export default BlogsTab;
