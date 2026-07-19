const fs = require('fs');
let content = fs.readFileSync('src/pages/Dashboard.jsx', 'utf8');

// 1. Add states
content = content.replace(
  `  // View modes & search`,
  `  // State for educations
  const [educations, setEducations] = useState([]);
  const [loadingEducations, setLoadingEducations] = useState(false);
  const [errorEducations, setErrorEducations] = useState('');
  const [isEduModalOpen, setIsEduModalOpen] = useState(false);
  const [currentEdu, setCurrentEdu] = useState(null);
  const [eduFormData, setEduFormData] = useState({
    school: '', degree: '', field_of_study: '', start_month: '', start_year: '', end_month: '', end_year: '', grade: '', activities_societies: '', description: '', skills: ''
  });

  // State for certifications
  const [certifications, setCertifications] = useState([]);
  const [loadingCertifications, setLoadingCertifications] = useState(false);
  const [errorCertifications, setErrorCertifications] = useState('');
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [currentCert, setCurrentCert] = useState(null);
  const [certFormData, setCertFormData] = useState({
    name: '', issuing_organization: '', issue_month: '', issue_year: '', expiration_month: '', expiration_year: '', credential_id: '', credential_url: '', skills: ''
  });

  // View modes & search`
);

// 2. Add fetch calls to useEffect
content = content.replace(
  `fetchExperiences();\n  }, [navigate, token]);`,
  `fetchExperiences();\n    fetchEducations();\n    fetchCertifications();\n  }, [navigate, token]);`
);

// 3. Add fetch functions
content = content.replace(
  `  const handleLogout`,
  `  const fetchEducations = async () => {
    setLoadingEducations(true);
    try {
      const res = await fetch('http://localhost:8080/api/educations');
      const data = await res.json();
      if (res.ok) setEducations(data.data);
      else setErrorEducations(data.error);
    } catch (err) {
      setErrorEducations('Gagal mengambil data pendidikan.');
    } finally {
      setLoadingEducations(false);
    }
  };

  const fetchCertifications = async () => {
    setLoadingCertifications(true);
    try {
      const res = await fetch('http://localhost:8080/api/certifications');
      const data = await res.json();
      if (res.ok) setCertifications(data.data);
      else setErrorCertifications(data.error);
    } catch (err) {
      setErrorCertifications('Gagal mengambil data sertifikasi.');
    } finally {
      setLoadingCertifications(false);
    }
  };

  const handleLogout`
);

// 4. Add handlers
content = content.replace(
  `  return (`,
  `  // --- Education CRUD Handlers ---
  const openAddEduModal = () => {
    setCurrentEdu(null);
    setEduFormData({ school: '', degree: '', field_of_study: '', start_month: '', start_year: '', end_month: '', end_year: '', grade: '', activities_societies: '', description: '', skills: '' });
    setIsEduModalOpen(true);
  };

  const openEditEduModal = (edu) => {
    setCurrentEdu(edu);
    setEduFormData({ ...edu });
    setIsEduModalOpen(true);
  };

  const handleDeleteEdu = async (id) => {
    if (!window.confirm("Hapus pendidikan ini?")) return;
    try {
      const res = await fetch(\`http://localhost:8080/api/admin/educations/\${id}\`, {
        method: 'DELETE',
        headers: { 'Authorization': \`Bearer \${token}\` }
      });
      if (res.status === 401) return handleLogout();
      if (res.ok) setEducations(educations.filter(e => e.id !== id));
      else alert("Gagal menghapus pendidikan.");
    } catch (err) {
      alert("Error menghapus pendidikan.");
    }
  };

  const handleSaveEdu = async (e) => {
    e.preventDefault();
    const url = currentEdu 
      ? \`http://localhost:8080/api/admin/educations/\${currentEdu.id}\`
      : \`http://localhost:8080/api/admin/educations\`;
    const method = currentEdu ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', 'Authorization': \`Bearer \${token}\` },
        body: JSON.stringify(eduFormData)
      });
      if (res.status === 401) return handleLogout();
      if (res.ok) {
        setIsEduModalOpen(false);
        fetchEducations();
      } else alert("Gagal menyimpan pendidikan.");
    } catch (err) {
      alert("Error menyimpan pendidikan.");
    }
  };

  // --- Certification CRUD Handlers ---
  const openAddCertModal = () => {
    setCurrentCert(null);
    setCertFormData({ name: '', issuing_organization: '', issue_month: '', issue_year: '', expiration_month: '', expiration_year: '', credential_id: '', credential_url: '', skills: '' });
    setIsCertModalOpen(true);
  };

  const openEditCertModal = (cert) => {
    setCurrentCert(cert);
    setCertFormData({ ...cert });
    setIsCertModalOpen(true);
  };

  const handleDeleteCert = async (id) => {
    if (!window.confirm("Hapus sertifikasi ini?")) return;
    try {
      const res = await fetch(\`http://localhost:8080/api/admin/certifications/\${id}\`, {
        method: 'DELETE',
        headers: { 'Authorization': \`Bearer \${token}\` }
      });
      if (res.status === 401) return handleLogout();
      if (res.ok) setCertifications(certifications.filter(e => e.id !== id));
      else alert("Gagal menghapus sertifikasi.");
    } catch (err) {
      alert("Error menghapus sertifikasi.");
    }
  };

  const handleSaveCert = async (e) => {
    e.preventDefault();
    const url = currentCert 
      ? \`http://localhost:8080/api/admin/certifications/\${currentCert.id}\`
      : \`http://localhost:8080/api/admin/certifications\`;
    const method = currentCert ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', 'Authorization': \`Bearer \${token}\` },
        body: JSON.stringify(certFormData)
      });
      if (res.status === 401) return handleLogout();
      if (res.ok) {
        setIsCertModalOpen(false);
        fetchCertifications();
      } else alert("Gagal menyimpan sertifikasi.");
    } catch (err) {
      alert("Error menyimpan sertifikasi.");
    }
  };

  return (`
);

// 5. Add Sidebar buttons
content = content.replace(
  `          <button 
            onClick={() => setActiveTab('contacts')}`,
  `          <button 
            onClick={() => setActiveTab('educations')}
            className={\`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors \${activeTab === 'educations' ? 'bg-surface-container-highest text-primary' : 'text-secondary hover:bg-surface-container hover:text-primary'}\`}
          >
            <FiList />
            Latar Belakang Akademik
          </button>
          <button 
            onClick={() => setActiveTab('certifications')}
            className={\`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors \${activeTab === 'certifications' ? 'bg-surface-container-highest text-primary' : 'text-secondary hover:bg-surface-container hover:text-primary'}\`}
          >
            <FiLayout />
            Lisensi & Sertifikasi
          </button>
          <button 
            onClick={() => setActiveTab('contacts')}`
);

// 6. Add Tabs Content (Educations & Certifications)
const tabContent = `
        {/* Educations Tab */}
        {activeTab === 'educations' && (
          <div className="animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-headline-md text-primary">Latar Belakang Akademik</h2>
                <p className="text-secondary mt-1">Kelola riwayat pendidikan Anda.</p>
              </div>
              <button 
                onClick={openAddEduModal}
                className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-full hover:bg-blue-700 transition-colors shadow-sm w-fit"
              >
                <FiPlus />
                Tambah Pendidikan
              </button>
            </div>

            {loadingEducations ? (
              <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div></div>
            ) : errorEducations ? (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100">{errorEducations}</div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {educations.length === 0 ? (
                  <div className="text-center py-20 bg-surface rounded-3xl border border-outline-variant shadow-sm text-secondary">
                    Belum ada data pendidikan.
                  </div>
                ) : (
                  educations.map((edu) => (
                    <div key={edu.id} className="bg-surface p-6 rounded-3xl border border-outline-variant shadow-sm hover:border-primary transition-colors flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-headline-sm text-primary">{edu.school}</h3>
                          <div className="flex gap-2">
                            <button onClick={() => openEditEduModal(edu)} className="p-2 text-secondary hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><FiEdit2 /></button>
                            <button onClick={() => handleDeleteEdu(edu.id)} className="p-2 text-secondary hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"><FiTrash2 /></button>
                          </div>
                        </div>
                        <p className="font-body-md text-primary">{edu.degree}{edu.field_of_study && \`, \${edu.field_of_study}\`}</p>
                        <p className="font-label-sm text-secondary mb-3">{edu.start_month} {edu.start_year} - {edu.end_month} {edu.end_year}</p>
                        
                        {edu.grade && <p className="text-sm text-secondary mb-2"><strong>Nilai:</strong> {edu.grade}</p>}
                        {edu.activities_societies && <p className="text-sm text-secondary mb-2"><strong>Aktivitas dan sosial:</strong> {edu.activities_societies}</p>}
                        
                        {edu.description && (
                          <div className="text-sm text-secondary mb-3 line-clamp-3" dangerouslySetInnerHTML={{ __html: edu.description }} />
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        )}

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <div className="animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-headline-md text-primary">Lisensi & Sertifikasi</h2>
                <p className="text-secondary mt-1">Kelola sertifikasi profesional Anda.</p>
              </div>
              <button 
                onClick={openAddCertModal}
                className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-full hover:bg-blue-700 transition-colors shadow-sm w-fit"
              >
                <FiPlus />
                Tambah Sertifikasi
              </button>
            </div>

            {loadingCertifications ? (
              <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div></div>
            ) : errorCertifications ? (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100">{errorCertifications}</div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {certifications.length === 0 ? (
                  <div className="text-center py-20 bg-surface rounded-3xl border border-outline-variant shadow-sm text-secondary">
                    Belum ada data sertifikasi.
                  </div>
                ) : (
                  certifications.map((cert) => (
                    <div key={cert.id} className="bg-surface p-6 rounded-3xl border border-outline-variant shadow-sm hover:border-primary transition-colors flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-headline-sm text-primary">{cert.name}</h3>
                          <div className="flex gap-2">
                            <button onClick={() => openEditCertModal(cert)} className="p-2 text-secondary hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><FiEdit2 /></button>
                            <button onClick={() => handleDeleteCert(cert.id)} className="p-2 text-secondary hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"><FiTrash2 /></button>
                          </div>
                        </div>
                        <p className="font-body-md text-primary">{cert.issuing_organization}</p>
                        <p className="font-label-sm text-secondary mb-3">
                          Diterbitkan {cert.issue_month} {cert.issue_year}
                          {cert.expiration_year ? \` - Kedaluwarsa \${cert.expiration_month} \${cert.expiration_year}\` : ' - Tidak ada tanggal kedaluwarsa'}
                        </p>
                        
                        {cert.credential_id && <p className="text-sm text-secondary mb-1">ID Kredensial {cert.credential_id}</p>}
                        {cert.credential_url && (
                          <a href={cert.credential_url} target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline">Lihat kredensial</a>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        )}
`;

content = content.replace(
  `        {/* Contacts Tab */}`,
  tabContent + `\n        {/* Contacts Tab */}`
);

// 7. Add Modals
const modalsContent = `
      {/* Education Modal */}
      {isEduModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/40 backdrop-blur-sm">
          <div className="bg-surface w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-xl flex flex-col overflow-hidden">
            <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
              <h2 className="text-xl font-headline-sm text-primary">{currentEdu ? 'Edit Pendidikan' : 'Tambah Pendidikan'}</h2>
              <button onClick={() => setIsEduModalOpen(false)} className="p-2 text-secondary hover:bg-surface-container rounded-full transition-colors"><FiX className="w-5 h-5" /></button>
            </div>
            
            <form onSubmit={handleSaveEdu} className="flex-1 overflow-y-auto p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-secondary mb-1">Sekolah/Universitas *</label>
                <input required type="text" value={eduFormData.school} onChange={e => setEduFormData({...eduFormData, school: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Mis: Universitas Sangga Buana YPKP" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">Gelar</label>
                  <input type="text" value={eduFormData.degree} onChange={e => setEduFormData({...eduFormData, degree: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Mis: Sarjana (S1)" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">Bidang studi</label>
                  <input type="text" value={eduFormData.field_of_study} onChange={e => setEduFormData({...eduFormData, field_of_study: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Mis: Teknik Informatika" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">Bulan Mulai</label>
                  <select value={eduFormData.start_month} onChange={e => setEduFormData({...eduFormData, start_month: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white">
                    <option value="">Pilih</option><option value="Januari">Januari</option><option value="Februari">Februari</option><option value="Maret">Maret</option><option value="April">April</option><option value="Mei">Mei</option><option value="Juni">Juni</option><option value="Juli">Juli</option><option value="Agustus">Agustus</option><option value="September">September</option><option value="Oktober">Oktober</option><option value="November">November</option><option value="Desember">Desember</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">Tahun Mulai</label>
                  <input type="text" value={eduFormData.start_year} onChange={e => setEduFormData({...eduFormData, start_year: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Tahun" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">Bulan Berakhir (atau perkiraan)</label>
                  <select value={eduFormData.end_month} onChange={e => setEduFormData({...eduFormData, end_month: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white">
                    <option value="">Pilih</option><option value="Januari">Januari</option><option value="Februari">Februari</option><option value="Maret">Maret</option><option value="April">April</option><option value="Mei">Mei</option><option value="Juni">Juni</option><option value="Juli">Juli</option><option value="Agustus">Agustus</option><option value="September">September</option><option value="Oktober">Oktober</option><option value="November">November</option><option value="Desember">Desember</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">Tahun Berakhir (atau perkiraan)</label>
                  <input type="text" value={eduFormData.end_year} onChange={e => setEduFormData({...eduFormData, end_year: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Tahun" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-1">Nilai</label>
                <input type="text" value={eduFormData.grade} onChange={e => setEduFormData({...eduFormData, grade: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-1">Aktivitas dan sosial</label>
                <textarea rows="2" value={eduFormData.activities_societies} onChange={e => setEduFormData({...eduFormData, activities_societies: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-1">Deskripsi</label>
                <textarea rows="3" value={eduFormData.description} onChange={e => setEduFormData({...eduFormData, description: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary mb-1">Keahlian (pisahkan dengan koma)</label>
                <input type="text" value={eduFormData.skills} onChange={e => setEduFormData({...eduFormData, skills: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
              </div>
            </form>
            
            <div className="p-6 border-t border-outline-variant bg-surface-container-lowest flex justify-end gap-3">
              <button type="button" onClick={() => setIsEduModalOpen(false)} className="px-5 py-2.5 text-secondary hover:bg-surface-container rounded-full font-medium transition-colors">Batal</button>
              <button type="button" onClick={handleSaveEdu} className="px-5 py-2.5 bg-blue-600 text-white hover:bg-blue-700 rounded-full font-medium transition-colors">Simpan</button>
            </div>
          </div>
        </div>
      )}

      {/* Certification Modal */}
      {isCertModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/40 backdrop-blur-sm">
          <div className="bg-surface w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-xl flex flex-col overflow-hidden">
            <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
              <h2 className="text-xl font-headline-sm text-primary">{currentCert ? 'Edit Sertifikasi' : 'Tambah Sertifikasi'}</h2>
              <button onClick={() => setIsCertModalOpen(false)} className="p-2 text-secondary hover:bg-surface-container rounded-full transition-colors"><FiX className="w-5 h-5" /></button>
            </div>
            
            <form onSubmit={handleSaveCert} className="flex-1 overflow-y-auto p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-secondary mb-1">Nama Sertifikasi *</label>
                <input required type="text" value={certFormData.name} onChange={e => setCertFormData({...certFormData, name: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Mis: AWS Certified Solutions Architect" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary mb-1">Organisasi Penerbit *</label>
                <input required type="text" value={certFormData.issuing_organization} onChange={e => setCertFormData({...certFormData, issuing_organization: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Mis: Amazon Web Services" />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">Bulan Terbit</label>
                  <select value={certFormData.issue_month} onChange={e => setCertFormData({...certFormData, issue_month: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white">
                    <option value="">Pilih</option><option value="Januari">Januari</option><option value="Februari">Februari</option><option value="Maret">Maret</option><option value="April">April</option><option value="Mei">Mei</option><option value="Juni">Juni</option><option value="Juli">Juli</option><option value="Agustus">Agustus</option><option value="September">September</option><option value="Oktober">Oktober</option><option value="November">November</option><option value="Desember">Desember</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">Tahun Terbit</label>
                  <input type="text" value={certFormData.issue_year} onChange={e => setCertFormData({...certFormData, issue_year: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Tahun" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">Bulan Kedaluwarsa</label>
                  <select value={certFormData.expiration_month} onChange={e => setCertFormData({...certFormData, expiration_month: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white">
                    <option value="">Pilih</option><option value="Januari">Januari</option><option value="Februari">Februari</option><option value="Maret">Maret</option><option value="April">April</option><option value="Mei">Mei</option><option value="Juni">Juni</option><option value="Juli">Juli</option><option value="Agustus">Agustus</option><option value="September">September</option><option value="Oktober">Oktober</option><option value="November">November</option><option value="Desember">Desember</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">Tahun Kedaluwarsa</label>
                  <input type="text" value={certFormData.expiration_year} onChange={e => setCertFormData({...certFormData, expiration_year: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Tahun" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-1">ID Kredensial</label>
                <input type="text" value={certFormData.credential_id} onChange={e => setCertFormData({...certFormData, credential_id: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary mb-1">URL Kredensial</label>
                <input type="url" value={certFormData.credential_url} onChange={e => setCertFormData({...certFormData, credential_url: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary mb-1">Keahlian (pisahkan dengan koma)</label>
                <input type="text" value={certFormData.skills} onChange={e => setCertFormData({...certFormData, skills: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
              </div>
            </form>
            
            <div className="p-6 border-t border-outline-variant bg-surface-container-lowest flex justify-end gap-3">
              <button type="button" onClick={() => setIsCertModalOpen(false)} className="px-5 py-2.5 text-secondary hover:bg-surface-container rounded-full font-medium transition-colors">Batal</button>
              <button type="button" onClick={handleSaveCert} className="px-5 py-2.5 bg-blue-600 text-white hover:bg-blue-700 rounded-full font-medium transition-colors">Simpan</button>
            </div>
          </div>
        </div>
      )}
`;

content = content.replace(
  `    </div>\n  );\n};\n\nexport default Dashboard;`,
  modalsContent + `\n    </div>\n  );\n};\n\nexport default Dashboard;`
);

fs.writeFileSync('src/pages/Dashboard.jsx', content);
console.log("Dashboard updated successfully!");
