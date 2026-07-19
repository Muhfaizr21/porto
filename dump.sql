--
-- PostgreSQL database dump
--

\restrict 5MFQ1kIeawygUbmaMfnm4o6LojnRJUJrHcr4gX6NTb7EUmy1gDO4FcMoe72BxUE

-- Dumped from database version 18.4 (Homebrew)
-- Dumped by pg_dump version 18.4 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: abouts; Type: TABLE; Schema: public; Owner: muhfaiizr
--

CREATE TABLE public.abouts (
    id bigint NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone,
    title text,
    description1 text,
    description2 text,
    stat1_label text,
    stat1_value text,
    stat2_label text,
    stat2_value text,
    stat3_label text,
    stat3_value text,
    image_path text,
    cv_path text
);


ALTER TABLE public.abouts OWNER TO muhfaiizr;

--
-- Name: abouts_id_seq; Type: SEQUENCE; Schema: public; Owner: muhfaiizr
--

CREATE SEQUENCE public.abouts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.abouts_id_seq OWNER TO muhfaiizr;

--
-- Name: abouts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: muhfaiizr
--

ALTER SEQUENCE public.abouts_id_seq OWNED BY public.abouts.id;


--
-- Name: awards; Type: TABLE; Schema: public; Owner: muhfaiizr
--

CREATE TABLE public.awards (
    id bigint NOT NULL,
    title character varying(255) NOT NULL,
    issuer character varying(255) NOT NULL,
    date character varying(100),
    description text,
    url character varying(255),
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.awards OWNER TO muhfaiizr;

--
-- Name: awards_id_seq; Type: SEQUENCE; Schema: public; Owner: muhfaiizr
--

CREATE SEQUENCE public.awards_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.awards_id_seq OWNER TO muhfaiizr;

--
-- Name: awards_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: muhfaiizr
--

ALTER SEQUENCE public.awards_id_seq OWNED BY public.awards.id;


--
-- Name: certifications; Type: TABLE; Schema: public; Owner: muhfaiizr
--

CREATE TABLE public.certifications (
    id bigint NOT NULL,
    name text NOT NULL,
    issuing_organization text NOT NULL,
    issue_month text,
    issue_year text,
    expiration_month text,
    expiration_year text,
    credential_id text,
    credential_url text,
    skills text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.certifications OWNER TO muhfaiizr;

--
-- Name: certifications_id_seq; Type: SEQUENCE; Schema: public; Owner: muhfaiizr
--

CREATE SEQUENCE public.certifications_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.certifications_id_seq OWNER TO muhfaiizr;

--
-- Name: certifications_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: muhfaiizr
--

ALTER SEQUENCE public.certifications_id_seq OWNED BY public.certifications.id;


--
-- Name: contacts; Type: TABLE; Schema: public; Owner: muhfaiizr
--

CREATE TABLE public.contacts (
    id bigint NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    message text NOT NULL,
    created_at timestamp with time zone
);


ALTER TABLE public.contacts OWNER TO muhfaiizr;

--
-- Name: contacts_id_seq; Type: SEQUENCE; Schema: public; Owner: muhfaiizr
--

CREATE SEQUENCE public.contacts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.contacts_id_seq OWNER TO muhfaiizr;

--
-- Name: contacts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: muhfaiizr
--

ALTER SEQUENCE public.contacts_id_seq OWNED BY public.contacts.id;


--
-- Name: educations; Type: TABLE; Schema: public; Owner: muhfaiizr
--

CREATE TABLE public.educations (
    id bigint NOT NULL,
    school text NOT NULL,
    degree text,
    field_of_study text,
    start_month text,
    start_year text,
    end_month text,
    end_year text,
    grade text,
    activities_societies text,
    description text,
    skills text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.educations OWNER TO muhfaiizr;

--
-- Name: educations_id_seq; Type: SEQUENCE; Schema: public; Owner: muhfaiizr
--

CREATE SEQUENCE public.educations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.educations_id_seq OWNER TO muhfaiizr;

--
-- Name: educations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: muhfaiizr
--

ALTER SEQUENCE public.educations_id_seq OWNED BY public.educations.id;


--
-- Name: experiences; Type: TABLE; Schema: public; Owner: muhfaiizr
--

CREATE TABLE public.experiences (
    id bigint NOT NULL,
    title text NOT NULL,
    employment_type text,
    company text NOT NULL,
    is_current_role boolean,
    start_month text,
    start_year text,
    end_month text,
    end_year text,
    location text,
    location_type text,
    description text,
    skills text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.experiences OWNER TO muhfaiizr;

--
-- Name: experiences_id_seq; Type: SEQUENCE; Schema: public; Owner: muhfaiizr
--

CREATE SEQUENCE public.experiences_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.experiences_id_seq OWNER TO muhfaiizr;

--
-- Name: experiences_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: muhfaiizr
--

ALTER SEQUENCE public.experiences_id_seq OWNED BY public.experiences.id;


--
-- Name: projects; Type: TABLE; Schema: public; Owner: muhfaiizr
--

CREATE TABLE public.projects (
    id bigint NOT NULL,
    title character varying(255) NOT NULL,
    repo_url text,
    demo_url text,
    year character varying(50),
    description text,
    tags jsonb,
    color character varying(100),
    image text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.projects OWNER TO muhfaiizr;

--
-- Name: projects_id_seq; Type: SEQUENCE; Schema: public; Owner: muhfaiizr
--

CREATE SEQUENCE public.projects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.projects_id_seq OWNER TO muhfaiizr;

--
-- Name: projects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: muhfaiizr
--

ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;


--
-- Name: testimonials; Type: TABLE; Schema: public; Owner: muhfaiizr
--

CREATE TABLE public.testimonials (
    id bigint NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone,
    quote text,
    name text,
    role text,
    company text
);


ALTER TABLE public.testimonials OWNER TO muhfaiizr;

--
-- Name: testimonials_id_seq; Type: SEQUENCE; Schema: public; Owner: muhfaiizr
--

CREATE SEQUENCE public.testimonials_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.testimonials_id_seq OWNER TO muhfaiizr;

--
-- Name: testimonials_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: muhfaiizr
--

ALTER SEQUENCE public.testimonials_id_seq OWNED BY public.testimonials.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: muhfaiizr
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    created_at timestamp with time zone
);


ALTER TABLE public.users OWNER TO muhfaiizr;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: muhfaiizr
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO muhfaiizr;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: muhfaiizr
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: abouts id; Type: DEFAULT; Schema: public; Owner: muhfaiizr
--

ALTER TABLE ONLY public.abouts ALTER COLUMN id SET DEFAULT nextval('public.abouts_id_seq'::regclass);


--
-- Name: awards id; Type: DEFAULT; Schema: public; Owner: muhfaiizr
--

ALTER TABLE ONLY public.awards ALTER COLUMN id SET DEFAULT nextval('public.awards_id_seq'::regclass);


--
-- Name: certifications id; Type: DEFAULT; Schema: public; Owner: muhfaiizr
--

ALTER TABLE ONLY public.certifications ALTER COLUMN id SET DEFAULT nextval('public.certifications_id_seq'::regclass);


--
-- Name: contacts id; Type: DEFAULT; Schema: public; Owner: muhfaiizr
--

ALTER TABLE ONLY public.contacts ALTER COLUMN id SET DEFAULT nextval('public.contacts_id_seq'::regclass);


--
-- Name: educations id; Type: DEFAULT; Schema: public; Owner: muhfaiizr
--

ALTER TABLE ONLY public.educations ALTER COLUMN id SET DEFAULT nextval('public.educations_id_seq'::regclass);


--
-- Name: experiences id; Type: DEFAULT; Schema: public; Owner: muhfaiizr
--

ALTER TABLE ONLY public.experiences ALTER COLUMN id SET DEFAULT nextval('public.experiences_id_seq'::regclass);


--
-- Name: projects id; Type: DEFAULT; Schema: public; Owner: muhfaiizr
--

ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);


--
-- Name: testimonials id; Type: DEFAULT; Schema: public; Owner: muhfaiizr
--

ALTER TABLE ONLY public.testimonials ALTER COLUMN id SET DEFAULT nextval('public.testimonials_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: muhfaiizr
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: abouts; Type: TABLE DATA; Schema: public; Owner: muhfaiizr
--

COPY public.abouts (id, created_at, updated_at, deleted_at, title, description1, description2, stat1_label, stat1_value, stat2_label, stat2_value, stat3_label, stat3_value, image_path, cv_path) FROM stdin;
1	2026-07-19 05:55:23.180921+07	2026-07-19 05:55:23.180921+07	\N	Arsitek Sistem yang Berorientasi pada Efisiensi.	Saya adalah seorang Full-Stack Software Engineer yang berbasis di Kota Cirebon, Jawa Barat. Latar belakang saya berasal dari Politeknik Negeri Indramayu, di mana saya mengasah kemampuan analitis dan pemecahan masalah teknis.	Keahlian utama saya terletak pada perancangan Sistem Pemantauan Otomatis dan Optimasi Web. Saya membangun arsitektur perangkat lunak end-to-end yang tangguh, memastikan keandalan, dan memaksimalkan kinerja untuk memberikan dampak nyata pada proses bisnis.	Teknik	INFORMATIKA	Full-Stack	SOFTWARE ENGINEERING	Automated	MONITORING SYSTEMS		
\.


--
-- Data for Name: awards; Type: TABLE DATA; Schema: public; Owner: muhfaiizr
--

COPY public.awards (id, title, issuer, date, description, url, created_at, updated_at, deleted_at) FROM stdin;
1	Fullstack Developer	PT APLIKASI DAGANG TEKNOLOGI	Jul 2026	Diberikan oleh PT Aplikasi Dagang Teknologi sebagai apresiasi atas dedikasi dan kinerja luar biasa selama program magang intensif selama 6 bulan.		2026-07-19 05:42:21.307552+07	2026-07-19 05:42:21.307552+07	\N
2	Speaker at TECHSOFT.V1 2026 | Shaping the Future of Software Architecture & Scalable Solutions	Himpunan Mahasiswa Rekayasa Perangkat Lunak	Mei 2026	Sangat bersyukur atas kesempatan untuk berbagi wawasan sebagai Pemateri di TECHSOFT.V1 2026. Berdiskusi tentang perkembangan teknologi selalu memberikan perspektif baru, dan saya berharap obrolan yang saya sampaikan dapat memberikan nilai tambah bagi rekan-rekan semua.		2026-07-19 05:42:21.309454+07	2026-07-19 05:42:21.309454+07	\N
3	TECHCOMFEST WEB APPLICATION COMPETITION 2026	POLITEKNIK NEGERI SEMARANG	Jan 2026			2026-07-19 05:42:21.310363+07	2026-07-19 05:42:21.310363+07	\N
\.


--
-- Data for Name: certifications; Type: TABLE DATA; Schema: public; Owner: muhfaiizr
--

COPY public.certifications (id, name, issuing_organization, issue_month, issue_year, expiration_month, expiration_year, credential_id, credential_url, skills, created_at, updated_at) FROM stdin;
1	Belajar Dasar AI	Dicoding Indonesia	Sep	2025	Sep	2028	L4PQ28E32ZO1	https://www.dicoding.com/certificates/L4PQ28E32ZO1	Artificial Intelligence	2026-07-19 05:20:13.438807+07	2026-07-19 05:20:13.438807+07
2	Memulai Pemrograman dengan Python	Dicoding Indonesia	Okt	2025	Okt	2028	N9ZQ22QQRPG5	https://www.dicoding.com/certificates/N9ZQ22QQRPG5	Python	2026-07-19 05:20:13.44072+07	2026-07-19 05:20:13.44072+07
3	INDONESIA NATIONAL QUALIFICATION FRAMEWORK LEVEL II ON SKILLS COMPETENCE SOFTWARE ENGINEERING	Badan Nasional Sertifikasi Profesi (BNSP)	Mar	2023	Mar	2026	62019 2512 2 0000134 2023		Software Engineering	2026-07-19 05:20:13.441921+07	2026-07-19 05:20:13.441921+07
\.


--
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: muhfaiizr
--

COPY public.contacts (id, name, email, message, created_at) FROM stdin;
\.


--
-- Data for Name: educations; Type: TABLE DATA; Schema: public; Owner: muhfaiizr
--

COPY public.educations (id, school, degree, field_of_study, start_month, start_year, end_month, end_year, grade, activities_societies, description, skills, created_at, updated_at) FROM stdin;
1	Politeknik Negeri Indramayu	Bachelor of Applied Science (BASc)	Software Engineering	Jul	2023	Jul	2027			<ul><li><strong>Himpunan Mahasiswa Rekayasa Perangkat Lunak (HIMA-RPL)</strong> - Kepala Divisi Hubungan Masyarakat (Jun 2024 - Jun 2025)<br/>Mengelola komunikasi internal dan eksternal, membangun kemitraan strategis dengan organisasi kampus lainnya, serta memimpin tim untuk meningkatkan kesadaran merek himpunan.</li><li><strong>Permikomnas Jawa Barat</strong> - Kajian Strategis dan Advokasi (Jan 2025 - Jan 2026)<br/>Menganalisis isu-isu regional di bidang Informatika dan Komputer, melakukan riset untuk rekomendasi kebijakan, dan mengadvokasi kepentingan mahasiswa di tingkat provinsi.</li><li><strong>Badan Eksekutif Mahasiswa (BEM)</strong> - Staff Muda Kominfo (Okt 2023 - Jun 2024)<br/>Bertanggung jawab atas strategi konten digital, mengelola platform media sosial resmi, dan memastikan alur informasi yang efektif ke seluruh mahasiswa.</li></ul>		2026-07-19 05:20:13.432764+07	2026-07-19 05:20:13.432764+07
2	SMKN 1 Kota Cirebon	Vocational High School Diploma	Software Engineering	Jun	2020	Jun	2023	83.00				2026-07-19 05:20:13.435339+07	2026-07-19 05:20:13.435339+07
\.


--
-- Data for Name: experiences; Type: TABLE DATA; Schema: public; Owner: muhfaiizr
--

COPY public.experiences (id, title, employment_type, company, is_current_role, start_month, start_year, end_month, end_year, location, location_type, description, skills, created_at, updated_at) FROM stdin;
1	Founder	Purna waktu	triplevibe.tech	t	Juni	2025			Kota Cirebon, Jawa Barat, Indonesia	Di lokasi	Bertanggung jawab memimpin tim pengembangan perangkat lunak dalam menciptakan solusi website yang berkualitas untuk klien dari berbagai latar belakang—mulai dari UMKM, Individu, hingga startup. Fokus utama saya adalah memastikan setiap produk tidak hanya memenuhi kebutuhan teknis, tetapi juga mencerminkan identitas brand klien melalui desain yang modern, fungsional, dan responsif.		2026-07-19 05:20:13.421256+07	2026-07-19 05:20:13.421256+07
2	Full-Stack Developer	Pekerja lepas	RentGo Indonesia	t	Januari	2024			Kota Cirebon, Jawa Barat, Indonesia	Jarak jauh	Sebagai satu-satunya Web Developer di RentGo Indonesia yang memegang peran kunci dalam membangun, mengelola, dan mengembangkan seluruh platform web perusahaan dan bertanggung jawab penuh atas sisi teknis pengembangan web, mulai dari perencanaan hingga implementasi.		2026-07-19 05:20:13.421256+07	2026-07-19 05:20:13.421256+07
3	Lead Software Engineer	Magang	PT Aplikasi Dagang Teknologi	t	April	2026			Bandung, Jawa Barat, Indonesia	Di lokasi	<p>Berperan sebagai Lead Software Engineer yang berfokus pada pengembangan solusi perangkat lunak yang scalable, efisien, dan berdampak langsung terhadap pertumbuhan bisnis serta kualitas produk digital.</p><ul><li><strong>Arsitektur Sistem:</strong> Merancang dan mengembangkan arsitektur aplikasi yang robust, scalable, dan maintainable.</li><li><strong>Technical Leadership:</strong> Memimpin tim developer, memberikan arahan teknis, dan memastikan penerapan best practice.</li><li><strong>Product Delivery:</strong> Mengelola siklus pengembangan perangkat lunak end-to-end dengan standar kualitas tinggi.</li></ul>		2026-07-19 05:20:13.421256+07	2026-07-19 05:20:13.421256+07
4	Senior Software Engineer R&D	Magang	PT Aplikasi Dagang Teknologi	f	Februari	2026	Maret	2026	Bandung, Jawa Barat, Indonesia	Di lokasi	<p>Berfokus pada eksplorasi teknologi mutakhir untuk menciptakan solusi perangkat lunak yang inovatif dan skalabel.</p><ul><li><strong>Riset & Eksplorasi Teknologi:</strong> Melakukan investigasi mendalam terhadap tren teknologi baru.</li><li><strong>Rapid Prototyping:</strong> Membangun Proof of Concept (PoC) untuk fitur-fitur kompleks.</li><li><strong>Optimasi & Performa:</strong> Menganalisis dan meningkatkan performa sistem yang sudah ada.</li></ul>		2026-07-19 05:20:13.421256+07	2026-07-19 05:20:13.421256+07
5	Full-Stack Developer	Magang	PT Aplikasi Dagang Teknologi	f	Januari	2026	Februari	2026	Bandung, Jawa Barat, Indonesia	Di lokasi			2026-07-19 05:20:13.421256+07	2026-07-19 05:20:13.421256+07
6	Content Creator Editor	Pekerja lepas	Fikri Theme Park	f	Januari	2023	Agustus	2023	Jakarta Raya, Indonesia	Jarak jauh	<ul><li>Mengoperasikan Sony Vegas Pro dan Adobe Photoshop untuk memproduksi konten video berkualitas tinggi dengan standar industri.</li><li>Melakukan riset tren visual terkini untuk memastikan konten tetap relevan dengan selera pasar yang cepat berubah.</li></ul>		2026-07-19 05:20:13.421256+07	2026-07-19 05:20:13.421256+07
7	Junior Software Engineer	Magang	CV. Mandiri Putra Nusa	f	Maret	2022	Juli	2022	Kota Cirebon, Jawa Barat, Indonesia	Di lokasi	<ul><li><strong>Automated Monitoring Solutions:</strong> Berhasil merancang dan mengimplementasikan sistem monitoring real-time yang mengotomatisasi pengumpulan data operasional, sehingga meningkatkan akurasi data.</li><li><strong>Backend Logic Optimization:</strong> Membangun fungsionalitas sisi server menggunakan PHP dengan fokus pada efisiensi kode, keamanan validasi input, dan skalabilitas sistem.</li><li><strong>Data-Driven Dashboards:</strong> Mengembangkan dashboard visualisasi data yang intuitif untuk membantu pemangku kepentingan dalam pengambilan keputusan berbasis data.</li></ul>		2026-07-19 05:20:13.421256+07	2026-07-19 05:20:13.421256+07
8	Internet of Things Developer	Magang	PT. Nusabot Inovasi Teknologi	f	Maret	2022	Mei	2022	Kota Cirebon, Jawa Barat, Indonesia	Gabungan			2026-07-19 05:20:13.421256+07	2026-07-19 05:20:13.421256+07
\.


--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: muhfaiizr
--

COPY public.projects (id, title, repo_url, demo_url, year, description, tags, color, image, created_at, updated_at) FROM stdin;
3	Simade	https://github.com/Muhfaizr21/Simade		2026	Proyek pengembangan perangkat lunak.	["JavaScript"]	bg-teal-50 text-teal-200	https://opengraph.githubassets.com/1/Muhfaizr21/Simade	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
6	Filmreact	https://github.com/Muhfaizr21/filmreact		2026	Proyek pengembangan perangkat lunak.	["JavaScript"]	bg-rose-50 text-rose-200	https://opengraph.githubassets.com/1/Muhfaizr21/filmreact	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
11	Siakad	https://github.com/Muhfaizr21/Siakad		2026	Proyek pengembangan perangkat lunak.	["JavaScript"]	bg-fuchsia-50 text-fuchsia-200	https://opengraph.githubassets.com/1/Muhfaizr21/Siakad	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
12	Linkswear	https://github.com/Muhfaizr21/Linkswear		2026	Proyek pengembangan perangkat lunak.	["JavaScript"]	bg-pink-50 text-pink-200	https://opengraph.githubassets.com/1/Muhfaizr21/Linkswear	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
13	Point Of Sale	https://github.com/Muhfaizr21/point-of-sale		2026	Proyek pengembangan perangkat lunak.	["JavaScript"]	bg-blue-50 text-blue-200	https://opengraph.githubassets.com/1/Muhfaizr21/point-of-sale	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
15	Sistem Informasi Tingkat Kesegaran Buah Mangga	https://github.com/Muhfaizr21/Sistem-Informasi-Tingkat-Kesegaran-buah-Mangga		2026	Proyek pengembangan perangkat lunak.	["Blade"]	bg-green-50 text-green-200	https://opengraph.githubassets.com/1/Muhfaizr21/Sistem-Informasi-Tingkat-Kesegaran-buah-Mangga	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
16	Dagangcoomerce	https://github.com/Muhfaizr21/DagangCoomerce		2026	Proyek pengembangan perangkat lunak.	["JavaScript"]	bg-indigo-50 text-indigo-200	https://opengraph.githubassets.com/1/Muhfaizr21/DagangCoomerce	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
17	Dagangmaker	https://github.com/Muhfaizr21/dagangmaker		2026	Proyek pengembangan perangkat lunak.	["JavaScript"]	bg-teal-50 text-teal-200	https://opengraph.githubassets.com/1/Muhfaizr21/dagangmaker	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
18	Safemind	https://github.com/Muhfaizr21/safemind		2026	Proyek pengembangan perangkat lunak.	["Dart"]	bg-red-50 text-red-200	https://opengraph.githubassets.com/1/Muhfaizr21/safemind	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
19	Jasa Printing	https://github.com/Muhfaizr21/Jasa-Printing		2026	Proyek pengembangan perangkat lunak.	["HTML"]	bg-amber-50 text-amber-200	https://opengraph.githubassets.com/1/Muhfaizr21/Jasa-Printing	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
20	Triplevibe	https://github.com/Muhfaizr21/triplevibe		2026	Proyek pengembangan perangkat lunak.	["JavaScript"]	bg-rose-50 text-rose-200	https://opengraph.githubassets.com/1/Muhfaizr21/triplevibe	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
21	Dagangplay	https://github.com/Muhfaizr21/DagangPlay		2026	Proyek pengembangan perangkat lunak.	["TypeScript"]	bg-purple-50 text-purple-200	https://opengraph.githubassets.com/1/Muhfaizr21/DagangPlay	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
24	Simade Fix	https://github.com/Muhfaizr21/simade-fix		2025	Proyek pengembangan perangkat lunak.	["JavaScript"]	bg-emerald-50 text-emerald-200	https://opengraph.githubassets.com/1/Muhfaizr21/simade-fix	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
25	Muscletrack Sistem Informasi Pengembangan Otot Nutrisi Tubuh	https://github.com/Muhfaizr21/MuscleTrack-Sistem-Informasi-Pengembangan-Otot-Nutrisi-Tubuh		2025	Proyek pengembangan perangkat lunak.	["Blade"]	bg-fuchsia-50 text-fuchsia-200	https://opengraph.githubassets.com/1/Muhfaizr21/MuscleTrack-Sistem-Informasi-Pengembangan-Otot-Nutrisi-Tubuh	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
26	Rental Mobil	https://github.com/Muhfaizr21/rental-mobil		2025	Aplikasi Rental Mobil	["Blade"]	bg-pink-50 text-pink-200	https://opengraph.githubassets.com/1/Muhfaizr21/rental-mobil	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
28	Properties.	https://github.com/Muhfaizr21/properties.		2025	Proyek pengembangan perangkat lunak.	["TypeScript"]	bg-slate-50 text-slate-200	https://opengraph.githubassets.com/1/Muhfaizr21/properties.	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
29	Sistem E Voting	https://github.com/Muhfaizr21/sistem-e-voting		2025	Proyek pengembangan perangkat lunak.	["Blade"]	bg-green-50 text-green-200	https://opengraph.githubassets.com/1/Muhfaizr21/sistem-e-voting	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
30	Landing Page Rent Car	https://github.com/Muhfaizr21/landing-page-rent-car		2025	Sebuah landing page untuk perusahaan berbasis rental mobil	["JavaScript"]	bg-indigo-50 text-indigo-200	https://opengraph.githubassets.com/1/Muhfaizr21/landing-page-rent-car	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
5	Hotel	https://github.com/Muhfaizr21/hotel6		2026	Proyek pengembangan perangkat lunak.	["JavaScript"]	bg-amber-50 text-amber-200	https://opengraph.githubassets.com/1/Muhfaizr21/hotel6	2026-07-19 04:56:01.049724+07	2026-07-19 05:05:24.216647+07
7	Hotel 2	https://github.com/Muhfaizr21/hotel5		2026	Proyek pengembangan perangkat lunak.	["JavaScript"]	bg-purple-50 text-purple-200	https://opengraph.githubassets.com/1/Muhfaizr21/hotel5	2026-07-19 04:56:01.049724+07	2026-07-19 05:05:46.610784+07
8	Akuglow	https://github.com/Muhfaizr21/SahabatMart		2026	Proyek pengembangan perangkat lunak.	["JavaScript"]	bg-cyan-50 text-cyan-200	https://opengraph.githubassets.com/1/Muhfaizr21/SahabatMart	2026-07-19 04:56:01.049724+07	2026-07-19 05:05:55.043715+07
9	Sistem PPOB + Affiliate	https://github.com/Muhfaizr21/digiflazz		2026	Proyek pengembangan perangkat lunak.	["TypeScript"]	bg-orange-50 text-orange-200	https://opengraph.githubassets.com/1/Muhfaizr21/digiflazz	2026-07-19 04:56:01.049724+07	2026-07-19 05:06:10.206446+07
23	Warung forza	https://github.com/Muhfaizr21/warungforzaSaas		2026	Proyek pengembangan perangkat lunak.	["JavaScript"]	bg-orange-50 text-orange-200	https://opengraph.githubassets.com/1/Muhfaizr21/warungforzaSaas	2026-07-19 04:56:01.049724+07	2026-07-19 05:06:39.861856+07
32	Ide Smart Inventory System Crud Edition 	https://github.com/Muhfaizr21/IDE-Smart-Inventory-System-CRUD-Edition-		2025	Proyek pengembangan perangkat lunak.	["Blade"]	bg-red-50 text-red-200	https://opengraph.githubassets.com/1/Muhfaizr21/IDE-Smart-Inventory-System-CRUD-Edition-	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
34	Ai Powered Content Planner	https://github.com/Muhfaizr21/AI-Powered-Content-Planner		2025	Proyek pengembangan perangkat lunak.	["JavaScript"]	bg-rose-50 text-rose-200	https://opengraph.githubassets.com/1/Muhfaizr21/AI-Powered-Content-Planner	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
35	Crypto Landing	https://github.com/Muhfaizr21/crypto-landing		2025	Proyek pengembangan perangkat lunak.	["JavaScript"]	bg-purple-50 text-purple-200	https://opengraph.githubassets.com/1/Muhfaizr21/crypto-landing	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
36	Sehat Keuangan Landing Page 	https://github.com/Muhfaizr21/sehat-keuangan-landing-page-		2025	Proyek pengembangan perangkat lunak.	["JavaScript"]	bg-cyan-50 text-cyan-200	https://opengraph.githubassets.com/1/Muhfaizr21/sehat-keuangan-landing-page-	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
37	Traveler	https://github.com/Muhfaizr21/traveler		2025	Proyek pengembangan perangkat lunak.	["SCSS"]	bg-orange-50 text-orange-200	https://opengraph.githubassets.com/1/Muhfaizr21/traveler	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
38	Blog Dashboard React	https://github.com/Muhfaizr21/blog-dashboard-react		2025	membuat dashboard blog sederhana (belajar)	["JavaScript"]	bg-emerald-50 text-emerald-200	https://opengraph.githubassets.com/1/Muhfaizr21/blog-dashboard-react	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
41	Rentgo	https://github.com/Muhfaizr21/rentgo		2025	Proyek pengembangan perangkat lunak.	["Blade"]	bg-blue-50 text-blue-200	https://opengraph.githubassets.com/1/Muhfaizr21/rentgo	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
42	Simade_Mobile	https://github.com/Muhfaizr21/simade_mobile		2025	Proyek pengembangan perangkat lunak.	["Dart"]	bg-slate-50 text-slate-200	https://opengraph.githubassets.com/1/Muhfaizr21/simade_mobile	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
43	Warung Madura	https://github.com/Muhfaizr21/warung-madura		2025	Proyek pengembangan perangkat lunak.	["Blade"]	bg-green-50 text-green-200	https://opengraph.githubassets.com/1/Muhfaizr21/warung-madura	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
44	E Lapor Desa	https://github.com/Muhfaizr21/E-Lapor-desa		2025	Proyek pengembangan perangkat lunak.	["PHP"]	bg-indigo-50 text-indigo-200	https://opengraph.githubassets.com/1/Muhfaizr21/E-Lapor-desa	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
45	Ticket Adt	https://github.com/Muhfaizr21/ticket-adt		2025	Persyaratan Untuk Memenuhi Seleksi Magang	["Blade"]	bg-teal-50 text-teal-200	https://opengraph.githubassets.com/1/Muhfaizr21/ticket-adt	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
46	E Commerce	https://github.com/Muhfaizr21/e-commerce		2025	Proyek pengembangan perangkat lunak.	["TypeScript"]	bg-red-50 text-red-200	https://opengraph.githubassets.com/1/Muhfaizr21/e-commerce	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
47	Dashboardreact	https://github.com/Muhfaizr21/dashboardreact		2025	ini adalah tampilan sederhana menggunakan react.js yang sangat sederhana	["CSS"]	bg-amber-50 text-amber-200	https://opengraph.githubassets.com/1/Muhfaizr21/dashboardreact	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
48	Lms Mini	https://github.com/Muhfaizr21/lms-mini		2025	Proyek pengembangan perangkat lunak.	["Blade"]	bg-rose-50 text-rose-200	https://opengraph.githubassets.com/1/Muhfaizr21/lms-mini	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
50	Quran Online	https://github.com/Muhfaizr21/Quran-online		2025	Proyek pengembangan perangkat lunak.	["PHP"]	bg-cyan-50 text-cyan-200	https://opengraph.githubassets.com/1/Muhfaizr21/Quran-online	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
51	Kantorabsen	https://github.com/Muhfaizr21/KantorAbsen		2025	Proyek pengembangan perangkat lunak.	["JavaScript"]	bg-orange-50 text-orange-200	https://opengraph.githubassets.com/1/Muhfaizr21/KantorAbsen	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
52	Sekolah_Landingpage	https://github.com/Muhfaizr21/sekolah_landingpage		2025	Proyek pengembangan perangkat lunak.	["SCSS"]	bg-emerald-50 text-emerald-200	https://opengraph.githubassets.com/1/Muhfaizr21/sekolah_landingpage	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
53	Company_Profile	https://github.com/Muhfaizr21/company_profile		2025	Proyek pengembangan perangkat lunak.	["CSS"]	bg-fuchsia-50 text-fuchsia-200	https://opengraph.githubassets.com/1/Muhfaizr21/company_profile	2026-07-19 04:56:01.049724+07	2026-07-19 04:56:01.049724+07
1	Personal Portfolios	https://itsfaiz.com/		2026	Situs yang sedang Anda baca. Dibangun sebagai tata letak editorial satu halaman dengan animasi halus dan sistem tipografi yang ketat.	["React", "Tailwind CSS", "Vite"]	bg-slate-50 text-slate-200	https://opengraph.githubassets.com/1/Muhfaizr21/porto	2026-07-19 04:56:01.049724+07	2026-07-19 05:02:59.965789+07
\.


--
-- Data for Name: testimonials; Type: TABLE DATA; Schema: public; Owner: muhfaiizr
--

COPY public.testimonials (id, created_at, updated_at, deleted_at, quote, name, role, company) FROM stdin;
1	2026-07-20 02:32:23.848321+07	2026-07-20 02:32:23.848321+07	\N	Profesional, tepat waktu, dan sistem pemantauan yang dibuat sangat membantu operasi harian kami.	Project Lead	PT Aplikasi Dagang Teknologi	PT Aplikasi Dagang Teknologi
2	2026-07-20 02:32:23.848321+07	2026-07-20 02:32:23.848321+07	\N	Arsitektur kode yang bersih dan terstruktur dengan baik. Sangat mudah bagi tim internal kami untuk mengembangkannya.	Tech Lead	Politeknik Negeri Indramayu	Politeknik Negeri Indramayu
3	2026-07-20 02:32:23.848321+07	2026-07-20 02:32:23.848321+07	\N	Dedikasi tinggi. Mampu menerjemahkan kebutuhan bisnis menjadi solusi teknis yang efektif dengan sangat baik.	Mentor	Software Engineering Program	Politeknik Negeri Indramayu
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: muhfaiizr
--

COPY public.users (id, username, password, created_at) FROM stdin;
1	muhfaiizr	$2a$10$FwZdgxeuetsFWtOB/PT/e.foA3ICOR/9k/5rtHudvU1yQT9u2sgNm	2026-07-19 04:49:25.836219+07
\.


--
-- Name: abouts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: muhfaiizr
--

SELECT pg_catalog.setval('public.abouts_id_seq', 1, true);


--
-- Name: awards_id_seq; Type: SEQUENCE SET; Schema: public; Owner: muhfaiizr
--

SELECT pg_catalog.setval('public.awards_id_seq', 3, true);


--
-- Name: certifications_id_seq; Type: SEQUENCE SET; Schema: public; Owner: muhfaiizr
--

SELECT pg_catalog.setval('public.certifications_id_seq', 3, true);


--
-- Name: contacts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: muhfaiizr
--

SELECT pg_catalog.setval('public.contacts_id_seq', 1, false);


--
-- Name: educations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: muhfaiizr
--

SELECT pg_catalog.setval('public.educations_id_seq', 2, true);


--
-- Name: experiences_id_seq; Type: SEQUENCE SET; Schema: public; Owner: muhfaiizr
--

SELECT pg_catalog.setval('public.experiences_id_seq', 8, true);


--
-- Name: projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: muhfaiizr
--

SELECT pg_catalog.setval('public.projects_id_seq', 53, true);


--
-- Name: testimonials_id_seq; Type: SEQUENCE SET; Schema: public; Owner: muhfaiizr
--

SELECT pg_catalog.setval('public.testimonials_id_seq', 3, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: muhfaiizr
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: abouts abouts_pkey; Type: CONSTRAINT; Schema: public; Owner: muhfaiizr
--

ALTER TABLE ONLY public.abouts
    ADD CONSTRAINT abouts_pkey PRIMARY KEY (id);


--
-- Name: awards awards_pkey; Type: CONSTRAINT; Schema: public; Owner: muhfaiizr
--

ALTER TABLE ONLY public.awards
    ADD CONSTRAINT awards_pkey PRIMARY KEY (id);


--
-- Name: certifications certifications_pkey; Type: CONSTRAINT; Schema: public; Owner: muhfaiizr
--

ALTER TABLE ONLY public.certifications
    ADD CONSTRAINT certifications_pkey PRIMARY KEY (id);


--
-- Name: contacts contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: muhfaiizr
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (id);


--
-- Name: educations educations_pkey; Type: CONSTRAINT; Schema: public; Owner: muhfaiizr
--

ALTER TABLE ONLY public.educations
    ADD CONSTRAINT educations_pkey PRIMARY KEY (id);


--
-- Name: experiences experiences_pkey; Type: CONSTRAINT; Schema: public; Owner: muhfaiizr
--

ALTER TABLE ONLY public.experiences
    ADD CONSTRAINT experiences_pkey PRIMARY KEY (id);


--
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: muhfaiizr
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- Name: testimonials testimonials_pkey; Type: CONSTRAINT; Schema: public; Owner: muhfaiizr
--

ALTER TABLE ONLY public.testimonials
    ADD CONSTRAINT testimonials_pkey PRIMARY KEY (id);


--
-- Name: users uni_users_username; Type: CONSTRAINT; Schema: public; Owner: muhfaiizr
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT uni_users_username UNIQUE (username);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: muhfaiizr
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: idx_abouts_deleted_at; Type: INDEX; Schema: public; Owner: muhfaiizr
--

CREATE INDEX idx_abouts_deleted_at ON public.abouts USING btree (deleted_at);


--
-- Name: idx_awards_deleted_at; Type: INDEX; Schema: public; Owner: muhfaiizr
--

CREATE INDEX idx_awards_deleted_at ON public.awards USING btree (deleted_at);


--
-- Name: idx_testimonials_deleted_at; Type: INDEX; Schema: public; Owner: muhfaiizr
--

CREATE INDEX idx_testimonials_deleted_at ON public.testimonials USING btree (deleted_at);


--
-- PostgreSQL database dump complete
--

\unrestrict 5MFQ1kIeawygUbmaMfnm4o6LojnRJUJrHcr4gX6NTb7EUmy1gDO4FcMoe72BxUE

