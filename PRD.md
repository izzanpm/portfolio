# Product Requirements Document (PRD)
## Website Portofolio — Mohammad Izzan Putra Maulana

**Versi:** 1.0
**Tanggal:** 18 Juli 2026
**Pemilik Produk:** Mohammad Izzan Putra Maulana
**Status:** Draft — menunggu approval

---

## 1. Latar Belakang

Mohammad Izzan Putra Maulana adalah mahasiswa Computer Science semester 7 di Bina Nusantara University dengan minat di bidang Data Analyst dan Data Scientist. Saat ini belum memiliki representasi online terpusat yang menampilkan profil, skill, pengalaman, dan proyek data science yang telah dikerjakan.

Referensi desain: [izzanporto.framer.website](https://izzanporto.framer.website/) — website portofolio versi sebelumnya (dibuat dengan Framer) dengan gaya **dark theme, minimalis, tipografi besar sebagai elemen visual utama**, navigasi sederhana (nama/logo, About, Project), dan daftar proyek yang ditautkan ke halaman detail masing-masing.

## 2. Tujuan Produk

- Membuat **website statis** (HTML/CSS/JS, tanpa backend/database) sebagai portofolio digital.
- Menampilkan biodata, skill, pengalaman kerja/organisasi, dan proyek data science secara ringkas dan profesional.
- Memudahkan recruiter/HR/dosen pembimbing untuk menilai kompetensi pemilik dalam satu halaman yang mudah diakses dan cepat dimuat.
- Menjadi media personal branding untuk posisi Data Analyst / Data Scientist.

## 3. Target Pengguna

| Persona | Kebutuhan |
|---|---|
| Recruiter / HRD | Cepat menilai skill, pengalaman, dan hasil proyek |
| Hiring Manager / Tech Lead | Melihat detail teknis proyek (metodologi, tools, hasil) |
| Dosen / Institusi Akademik | Melihat portofolio akademik & sertifikasi |
| Pemilik (Izzan) | Media promosi diri yang mudah di-update & disebarkan (link CV, LinkedIn, email) |

## 4. Ruang Lingkup (Scope)

### In-scope
- Website statis, single-page (one-pager) dengan navigasi scroll ke section, ditambah opsi halaman detail proyek (multi-page sederhana) — mengikuti pola referensi.
- 5 section utama sesuai permintaan: **Hero, Skills, Project & Latest Project, About Me, Pengalaman Kerja**.
- Responsive design (mobile, tablet, desktop).
- Deploy sebagai static site (bisa di-host di Vercel/Netlify/GitHub Pages).

### Out-of-scope (untuk versi awal)
- CMS/admin panel untuk update konten dinamis.
- Backend, database, atau form submission dengan server (kontak form bila ada akan pakai mailto atau third-party service).
- Autentikasi/login.
- Multi-bahasa (ID/EN toggle) — dicatat sebagai saran, lihat bagian 8.

## 5. Struktur & Konten Website (Sections)

### 5.1 Hero Section
**Tujuan:** first impression, identitas singkat.
- Nama: **Mohammad Izzan Putra Maulana**
- Tagline singkat (mengikuti gaya referensi): *"Computer science student with a passion for exploration in the realm of data"*
- Role/fokus: Data Analyst & Data Scientist enthusiast
- CTA: tombol "Lihat Project" (scroll ke section Project) dan/atau "Download CV"
- Navigasi utama: Logo/Inisial (IZZAN), About, Project, Experience, Contact
- Ikon kontak cepat: LinkedIn, Email (Gmail), Outlook — mengikuti referensi

### 5.2 Skills Section
**Tujuan:** menampilkan kompetensi teknis & non-teknis secara scannable.

**Hard Skills (tools & bahasa pemrograman):**
R, SQL, MySQL, HTML, CSS, Java, JavaScript, C++, Python, Rapidminer, RStudio, VSCode, Eclipse, Hadoop, Cloudera, XAMPP, Canva, Microsoft Excel

**Soft Skills:**
Leadership, Teamwork, Self-discipline, Time Management, Adaptability, Perfectionist, Relationship Skills, Creative, Problem Solving, Empathy, Adaptive

**Format tampilan:** grid/list badge sederhana (mengikuti referensi yang menampilkan skill sebagai list minimalis), bisa dikelompokkan per kategori (Bahasa Pemrograman, Tools/Software, Soft Skills).

### 5.3 Project & Latest Project Section
**Tujuan:** showcase hasil kerja teknis, section paling penting untuk recruiter data.

Daftar proyek (diurutkan dari terbaru), masing-masing dengan judul, tahun, kategori/metodologi, dan ringkasan singkat:

| Proyek | Tahun | Kategori |
|---|---|---|
| Smartphone Price Prediction Model (Python) | 2025 | Classification (KNN, Decision Tree, Naive Bayes) |
| Breast Cancer Prediction Model (Python) | 2024 | Classification (KNN, Random Forest) |
| Exploratory Data Analysis of COVID-19 Dataset | 2024 | Data Understanding, Preprocessing, Visualization |
| Deployed Website using AWS EC2, AWS RDS, XAMPP | 2024 | Cloud Deployment |
| Revenue Prediction Model (Python) | 2024 | Classification (Random Forest, KNN, SVM) |
| Lung Cancer Prediction Model (Python) | 2024 | Classification (Logistic Regression) |
| Normalize Digging Site Dataset | 2023 | Normalization (UNF, 1NF, 2NF, 3NF) |

**"Latest Project"** ditampilkan menonjol di posisi teratas/paling awal (highlight card), sisanya dalam list/grid.

Setiap kartu proyek berisi: judul, tahun, tag kategori, ringkasan 1 baris, dan (opsional) link ke halaman detail proyek yang memuat langkah kerja lengkap (preprocessing, modeling, evaluasi, insight) — mengikuti pola halaman detail di referensi.

### 5.4 About Me Section
**Tujuan:** cerita personal & konteks di balik CV.

Konten dasar dari CV:
> Mahasiswa Computer Science semester 7 di Bina Nusantara University, tertarik pada posisi Data Analyst dan Data Scientist. Memiliki key skills adaptability, time management, teamwork, dan perfectionism. Terbiasa menggunakan berbagai tools (Rapidminer, RStudio, VSCode, Eclipse, Hadoop, Cloudera, XAMPP, Canva, Microsoft Excel) serta bahasa pemrograman (R, SQL, MySQL, HTML, CSS, Java, JavaScript, C++, Python).

Ditambah info edukasi:
- **Bina Nusantara University** — Undergraduate, Computer Science, GPA 3.55/4.00

Kontak: email (izzan.pm@gmail.com), telepon, lokasi (South Tangerang, Banten), LinkedIn.

### 5.5 Pengalaman Kerja / Experience Section
**Tujuan:** menunjukkan pengalaman organisasi & non-akademik.

| Pengalaman | Institusi |
|---|---|
| Waste Bank Donation with Generasi Bebas Plastik (Volunteer) | PT. Paragon |
| Bootcamp Data Science | DQLab |
| Bootcamp Data Science | Dicoding |
| Rector Cup "Valorant E-Sport" Division (Volunteer) | BINUS University |
| Head of "Valorant E-Sport" Division at Glarisa Cup | SMA Kharisma Bangsa |

Format: timeline atau list card dengan nama pengalaman, institusi, dan bullet point tanggung jawab (diambil dari CV).

Section **Certificate** dari CV (Bootcamp Machine Learning DQLab, Data Analyst with SQL & Python, dsb.) ditempatkan sebagai sub-section di Experience atau bagian tersendiri — **disetujui, lihat bagian 8.1**.

## 6. Referensi Desain (Design Guidelines)

Mengacu pada [izzanporto.framer.website](https://izzanporto.framer.website/):
- **Tema:** dark mode sebagai basis (background gelap, teks terang), aksen warna minimal/monokrom.
- **Tipografi:** besar dan bold untuk hero/headline, jadi elemen visual utama (bukan hanya gambar).
- **Layout:** minimalis, banyak whitespace, one-pager dengan section yang jelas dipisahkan.
- **Navigasi:** sticky/simple navbar berisi inisial/logo + link ke section utama.
- **Proyek:** ditampilkan sebagai list/link, bisa diklik menuju halaman detail per proyek.
- **Footer:** copyright + ikon kontak (LinkedIn, Email).

Catatan: karena dibangun ulang sebagai static site custom (bukan Framer), struktur visual di atas akan diadaptasi bebas menggunakan HTML/CSS/JS (atau framework pilihan) agar lebih ringan dan mudah di-maintain.

## 7. Kebutuhan Non-Fungsional

- **Performance:** static site, target Lighthouse score performance ≥ 90.
- **Responsive:** mendukung mobile, tablet, dan desktop.
- **SEO dasar:** meta title/description, Open Graph tags untuk share preview.
- **Aksesibilitas:** kontras warna cukup (penting karena dark theme), alt text pada gambar.
- **Hosting:** cocok untuk static hosting (Vercel/Netlify/GitHub Pages/Cloudflare Pages).
- **Maintainability:** konten (skills, project, experience) idealnya dipisah dari markup (misal via data file JSON/JS) agar mudah di-update tanpa mengubah struktur halaman.

## 8. Saran Tambahan

Berikut saran pengembangan di luar permintaan awal. Beberapa sudah disetujui dan masuk ke scope, sisanya masih menunggu keputusan.

### 8.1 Disetujui — masuk ke scope

1. **Section Certificate/Sertifikasi terpisah** — CV mencantumkan 11 sertifikat (DQLab, Dicoding, Cognitive Class, RevoU). Bisa jadi section tersendiri atau sub-section di About/Experience.
2. **Halaman detail per proyek** — tiap proyek punya halaman/section detail (metodologi, tools, insight/hasil), seperti pola di website referensi, alih-alih hanya ringkasan 1 baris.
5. **Filter/kategori pada Project section** — filter berdasarkan tipe (Classification, EDA, Deployment, Normalization) jika jumlah proyek terus bertambah.
6. **Animasi micro-interaction** (scroll reveal, hover effect) untuk memperkuat kesan modern seperti Framer site asli.
7. **Resume/CV downloadable button** yang mengarah ke file PDF CV asli.
9. **Bahasa ganda (ID/EN)** — CV saat ini dalam Bahasa Inggris; jika target audiens termasuk perusahaan lokal, opsi Bahasa Indonesia bisa ditambahkan.

### 8.2 Menunggu keputusan — belum dieksekusi

3. **Contact section/CTA eksplisit** — form kontak sederhana (mailto) atau tombol "Hubungi Saya" di akhir halaman.
4. **Dark/Light mode toggle** — mengingat referensi full dark, opsi toggle bisa jadi nilai tambah UX.
8. **Analytics** (misal Plausible/Vercel Analytics) untuk memantau jumlah pengunjung — opsional karena static site.

## 9. Tech Stack (Final)

Website akan dibangun menggunakan **React + TypeScript**, di-build/export sebagai **static site** (misalnya via Vite atau Next.js static export), sehingga tetap dapat di-hosting di static hosting (Vercel/Netlify/GitHub Pages/Cloudflare Pages) tanpa backend/database.

Alasan pemilihan:
- Struktur berbasis komponen memudahkan pembuatan halaman detail per proyek (poin 8.1 #2) dan filter kategori project (poin 8.1 #5).
- TypeScript memberi type-safety untuk data konten (skills, project, experience, certificate) yang dipisah dari markup, sesuai kebutuhan maintainability di bagian 7.
- Memudahkan implementasi fitur tambahan yang sudah disetujui: animasi micro-interaction, toggle bahasa ID/EN, dan tombol download CV.

## 10. Milestone (Usulan)

| Tahap | Deliverable |
|---|---|
| 1. Setup & Struktur | Skeleton HTML/komponen, routing/section, styling dasar sesuai tema dark minimalis |
| 2. Hero + Navbar | Implementasi hero section & navigasi |
| 3. Skills Section | Implementasi grid/list skills |
| 4. Project Section | List proyek + highlight latest project |
| 5. About Me & Experience | Implementasi 2 section terakhir |
| 6. Responsive & Polish | Testing di berbagai device, perbaikan visual |
| 7. Deploy | Deploy ke static hosting |

## 11. Open Questions

- Apakah butuh halaman detail terpisah per proyek, atau cukup expand/modal di halaman yang sama?
- Apakah ada foto profil yang ingin digunakan di Hero/About?
- Preferensi warna aksen (selain dark base) — ada warna brand pribadi?
- Domain/hosting yang akan digunakan?

---

**Langkah selanjutnya:** Mohon review PRD ini. Setelah disetujui (termasuk keputusan atas saran di bagian 8), saya akan lanjut ke tahap desain/wireframe atau langsung development static site.
