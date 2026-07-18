import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut, FiMessageSquare, FiHome, FiClock } from 'react-icons/fi';

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await fetch('http://localhost:8080/api/admin/contacts', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (res.status === 401) {
          localStorage.removeItem('token');
          navigate('/admin/login');
          return;
        }

        const data = await res.json();
        if (res.ok) {
          setContacts(data.data);
        } else {
          setError(data.error);
        }
      } catch (err) {
        setError('Gagal menghubungi server.');
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-surface-container flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-surface border-r border-outline-variant flex flex-col">
        <div className="p-6 border-b border-outline-variant">
          <h1 className="text-xl font-headline-sm text-primary">Superadmin</h1>
          <p className="text-xs text-secondary mt-1">Muhfaizr21 Dashboard</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center gap-3 bg-surface-container-highest text-primary px-4 py-3 rounded-xl font-medium transition-colors">
            <FiMessageSquare />
            Pesan Masuk
          </a>
          <a href="/" target="_blank" className="flex items-center gap-3 text-secondary hover:bg-surface-container-highest hover:text-primary px-4 py-3 rounded-xl font-medium transition-colors">
            <FiHome />
            Lihat Web
          </a>
        </nav>

        <div className="p-4 border-t border-outline-variant">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 text-red-500 hover:bg-red-500/10 w-full px-4 py-3 rounded-xl font-medium transition-colors"
          >
            <FiLogOut />
            Keluar
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 bg-surface-container-lowest">
        <header className="mb-10">
          <h2 className="text-3xl font-headline-md text-primary">Pesan Pengunjung</h2>
          <p className="text-secondary mt-2">Daftar pesan yang masuk dari formulir kontak portofolio.</p>
        </header>

        {loading ? (
          <div className="text-center py-20 text-secondary">
            <div className="inline-block w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
            <p>Memuat data...</p>
          </div>
        ) : error ? (
          <div className="p-6 bg-red-500/10 text-red-500 rounded-2xl border border-red-500/20">
            {error}
          </div>
        ) : contacts.length === 0 ? (
          <div className="text-center py-20 bg-surface border border-outline-variant border-dashed rounded-3xl">
            <FiMessageSquare className="mx-auto text-4xl text-secondary/50 mb-4" />
            <p className="text-secondary">Belum ada pesan yang masuk.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {contacts.map((contact) => (
              <div key={contact.id} className="bg-surface p-6 md:p-8 rounded-3xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-headline-sm text-primary">{contact.name}</h3>
                    <a href={`mailto:${contact.email}`} className="text-sm text-secondary hover:text-primary transition-colors">
                      {contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-secondary bg-surface-container px-3 py-1.5 rounded-full whitespace-nowrap">
                    <FiClock />
                    {new Date(contact.created_at).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' })}
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/50 text-secondary leading-relaxed whitespace-pre-wrap">
                  {contact.message}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
