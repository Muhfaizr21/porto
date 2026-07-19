import React, { useState, useEffect } from 'react';
import { FiMessageSquare, FiClock } from 'react-icons/fi';

const ContactsTab = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        const res = await fetch('/api/admin/contacts', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (res.status === 401) {
          localStorage.removeItem('token');
          window.location.href = '/admin/login';
          return;
        }
        
        const data = await res.json();
        if (res.ok) setContacts(data.data);
        else setError(data.error);
      } catch (err) {
        setError('Gagal menghubungi server.');
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="animate-fade-in">
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
    </div>
  );
};

export default ContactsTab;
