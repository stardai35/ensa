-- Create Database
CREATE DATABASE IF NOT EXISTS suzzxrkz_ensisa;
USE suzzxrkz_ensisa;

-- Category Table
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Content Table
CREATE TABLE IF NOT EXISTS `content` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cat_id` int(11) NOT NULL,
  `title_id` int(11) NOT NULL,
  `year` varchar(50) NOT NULL,
  `text` longtext NOT NULL,
  `slug` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cat_id` (`cat_id`),
  FOREIGN KEY (`cat_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- Insert Categories
INSERT INTO category (id, name, slug) VALUES
(1, 'Pengarang', 'pengarang'),
(2, 'Karya Sastra', 'karya-sastra'),
(3, 'Media Penyebar/Penerbit Sastra', 'media-penyebar-penerbit'),
(4, 'Hadiah/Sayembara Sastra', 'hadiah-sayembara-sastra'),
(5, 'Lembaga Sastra', 'lembaga-sastra'),
(6, 'Gejala Sastra', 'gejala-sastra');

-- ========== KATEGORI 1: PENGARANG (7 Data) ==========
INSERT INTO content (cat_id, title_id, year, text, slug) VALUES
(1, 'Pramoedya Ananta Toer', '1925-2006', 
'Pramoedya Ananta Toer adalah salah satu sastrawan Indonesia yang paling terkenal dan berpengaruh. Lahir di Blora, Jawa Tengah, pada tanggal 6 Februari 1925, dan meninggal di Jakarta pada tanggal 30 April 2006. Beliau dikenal sebagai penulis yang prolific dan memiliki gaya penulisan yang kuat dan bermakna. Karyanya mencakup novel, cerpen, drama, dan esai.',
'pramoedya-ananta-toer'),

(1, 'Chairil Anwar', '1922-1949',
'Chairil Anwar adalah seorang penyair Indonesia yang revolusioner. Lahir di Medan pada tanggal 26 Juli 1922 dan meninggal di Jakarta pada tanggal 28 April 1949. Beliau dikenal sebagai pelopor puisi modern Indonesia. Puisi-puisinya mencerminkan gejolak jiwa dan semangat perlawanan dengan tema kebangsaan.',
'chairil-anwar'),

(1, 'Sutan Takdir Alisjahbana', '1908-1994',
'Sutan Takdir Alisjahbana adalah seorang sastrawan, kritikus sastra, dan pemikir Indonesia yang berpengaruh. Beliau dikenal melalui karya-karya inovatifnya dalam mengembangkan sastra Indonesia modern. Kontribusinya terhadap perkembangan bahasa Indonesia sangat signifikan.',
'sutan-takdir-alisjahbana'),

(1, 'Achdiat Kartamihardja', '1924-2005',
'Achdiat Kartamihardja adalah seorang novelis Indonesia yang terkenal dengan karya-karyanya yang mendalam dan berbobot. Beliau menghasilkan berbagai novel yang mencerminkan kehidupan sosial dan budaya Indonesia dengan perspektif yang unik.',
'achdiat-kartamihardja'),

(1, 'Amir Hamzah', '1911-1946',
'Amir Hamzah adalah seorang penyair Indonesia yang dikenal dengan puisi-puisinya yang indah dan penuh makna. Beliau aktif dalam gerakan sastra Indonesia dan memiliki kontribusi penting dalam perkembangan puisi Indonesia modern.',
'amir-hamzah'),

(1, 'Emha Ainun Nadjib', '1952-sekarang',
'Emha Ainun Nadjib adalah seorang penyair, penulis, dan aktivis sosial Indonesia. Karyanya menggabungkan elemen spiritualitas, humaniora, dan kritik sosial. Beliau juga dikenal sebagai salah satu tokoh intelektual Muslim progresif di Indonesia.',
'emha-ainun-nadjib'),

(1, 'Goenawan Muhammad', '1941-sekarang',
'Goenawan Muhammad adalah seorang penyair, penulis, dan editor terkemuka Indonesia. Beliau adalah pendiri majalah Tempo dan dikenal dengan puisi-puisinya yang artistik dan bermakna mendalam tentang kehidupan modern.',
'goenawan-muhammad');

-- ========== KATEGORI 2: KARYA SASTRA (10 Data) ==========
INSERT INTO content (cat_id, title_id, year, text, slug) VALUES
(2, 'Laskar Pelangi', '2005',
'Laskar Pelangi adalah novel karya Andrea Hirata yang menceritakan kisah anak-anak dari keluarga kurang mampu yang berjuang untuk mengubah nasib mereka melalui pendidikan. Novel ini telah diterjemahkan ke berbagai bahasa dan menjadi bestseller internasional.',
'laskar-pelangi'),

(2, 'Negeri 5 Menara', '2009',
'Negeri 5 Menara adalah novel karya Ahmad Fuadi yang menceritakan petualangan seorang remaja bernama Alif yang melanjutkan pendidikan ke Malaysia. Novel ini menggabungkan elemen adventure, coming-of-age, dan pencarian jati diri.',
'negeri-5-menara'),

(2, 'Sang Pemimpi', '2006',
'Sang Pemimpi adalah novel karya Andrea Hirata yang merupakan lanjutan dari Laskar Pelangi. Novel ini menceritakan tentang perjalanan dua tokoh utama untuk mewujudkan impian mereka dengan setting yang terutama di Paris.',
'sang-pemimpi'),

(2, 'Bumi Manusia', '1980',
'Bumi Manusia adalah novel pertama dari tetralogi Pulau Buru karya Pramoedya Ananta Toer. Novel ini menceritakan tentang perjalanan seorang pemuda Jawa dalam menghadapi kehidupan dan masyarakat modern pada awal abad ke-20.',
'bumi-manusia'),

(2, 'Anak Semua Bangsa', '1980',
'Anak Semua Bangsa adalah novel kedua dari tetralogi Pulau Buru karya Pramoedya Ananta Toer. Novel ini melanjutkan perjalanan tokoh utama dalam perjuangan melawan penjajahan dengan latar belakang gerakan nasionalisme.',
'anak-semua-bangsa'),

(2, 'Pertemuan Jatuh Cinta', '1992',
'Pertemuan Jatuh Cinta adalah novel karya Suman Andi Agurto yang menceritakan tentang percintaan remaja di era modern dengan sentuhan budaya lokal dan pesan moral yang mendalam.',
'pertemuan-jatuh-cinta'),

(2, 'Ayat-Ayat Cinta', '2008',
'Ayat-Ayat Cinta adalah novel karya Habiburrahman El Shirazy yang menceritakan kisah cinta seorang mahasiswa Indonesia di Kairo. Novel ini menggabungkan tema cinta, agama, dan persahabatan dengan cerita yang menyentuh hati.',
'ayat-ayat-cinta'),

(2, 'Ketika Cinta Bertasbih', '2007',
'Ketika Cinta Bertasbih adalah novel karya Habiburrahman El Shirazy yang melanjutkan cerita dari Ayat-Ayat Cinta. Novel ini mengeksplorasi hubungan cinta dan pengambilan keputusan hidup yang sulit dengan nilai-nilai spiritual.',
'ketika-cinta-bertasbih'),

(2, 'Sebuah Seni Untuk Bersikap Bodo Amat', '2015',
'Sebuah Seni Untuk Bersikap Bodo Amat adalah novel karya Mark Manson yang telah diterjemahkan ke bahasa Indonesia. Novel ini menyajikan perspektif unik tentang kehidupan dan prioritas dalam menghadapi tantangan hidup.',
'seni-bersikap-bodo-amat'),

(2, 'Rumah Kaca', '1988',
'Rumah Kaca adalah novel keempat dari tetralogi Pulau Buru karya Pramoedya Ananta Toer. Novel ini melanjutkan cerita perjuangan dengan fokus pada peran perempuan dan keluarga dalam pergerakan nasionalisme.',
'rumah-kaca');

-- ========== KATEGORI 3: MEDIA PENYEBAR/PENERBIT (8 Data) ==========
INSERT INTO content (cat_id, title_id, year, text, slug) VALUES
(3, 'Penerbit Gramedia', '1974-sekarang',
'PT Gramedia adalah penerbit buku terkemuka di Indonesia yang telah memainkan peran penting dalam penyebaran sastra Indonesia. Penerbit ini telah menerbitkan ribuan judul buku dari berbagai genre dan penulis ternama.',
'penerbit-gramedia'),

(3, 'Majalah Sastra Indonesia', '1970-sekarang',
'Majalah Sastra Indonesia adalah publikasi penting yang berfokus pada sastra dan budaya Indonesia. Majalah ini telah menerbitkan karya-karya dari banyak penulis terkenal dan menjadi platform bagi penulis baru.',
'majalah-sastra-indonesia'),

(3, 'Penerbit Kepustakaan Populer Gramedia', '1998-sekarang',
'Penerbit Kepustakaan Populer Gramedia adalah bagian dari grup Gramedia yang fokus pada penerbitan buku sastra dan budaya dengan jangkauan pembaca yang luas di seluruh Indonesia.',
'penerbit-kpg'),

(3, 'Tempo Magazine', '1971-sekarang',
'Tempo Magazine adalah majalah berita dan budaya terkemuka di Indonesia yang didirikan oleh Goenawan Muhammad. Majalah ini menjadi platform penting untuk publikasi karya sastra dan kritik budaya.',
'tempo-magazine'),

(3, 'Penerbit Javanica', '1995-sekarang',
'Penerbit Javanica adalah penerbit yang fokus pada penerbitan sastra dan budaya Jawa serta sastra Indonesia secara umum. Penerbit ini berkontribusi dalam melestarikan dan menyebarkan karya-karya sastra berkualitas.',
'penerbit-javanica'),

(3, 'Majalah Horizon', '1983-sekarang',
'Majalah Horizon adalah publikasi sastra dan seni yang memberikan platform bagi seniman dan penulis untuk mengekspresikan karya-karya kreatif mereka kepada audiens yang luas.',
'majalah-horizon'),

(3, 'Penerbit Mizan', '1983-sekarang',
'Penerbit Mizan adalah penerbit yang terkenal menerbitkan buku-buku sastra, pemikiran Islam, dan budaya. Penerbit ini memiliki kontribusi penting dalam penyebaran sastra Indonesia modern.',
'penerbit-mizan'),

(3, 'Koran Tempo', '1994-sekarang',
'Koran Tempo adalah surat kabar harian yang menerbitkan berbagai tulisan sastra, esai, dan kritik budaya dari para intelektual dan seniman Indonesia.',
'koran-tempo');

INSERT INTO content (cat_id, title_id, year, text, slug) VALUES
(4, 'Penghargaan Sastra Asia', '1985-sekarang',
'Penghargaan Sastra Asia adalah ajang penghargaan bergengsi yang mengakui karya-karya sastra terbaik dari berbagai negara Asia termasuk Indonesia. Penghargaan ini telah membantu mengangkat profil penulis Indonesia di tingkat internasional.',
'penghargaan-sastra-asia'),

(4, 'Sayembara Novel Dewan Kesenian Jakarta', '1975-sekarang',
'Sayembara Novel Dewan Kesenian Jakarta adalah ajang pencarian karya sastra yang rutin diadakan untuk mengapresiasi dan mendorong penulis muda Indonesia menghasilkan karya berkualitas.',
'sayembara-novel-dkj'),

(4, 'Penghargaan Ramadhan', '1980-sekarang',
'Penghargaan Ramadhan adalah penghargaan bergengsi untuk karya-karya sastra yang diterbitkan selama bulan Ramadhan. Penghargaan ini memiliki prestise tinggi dalam dunia sastra Indonesia.',
'penghargaan-ramadhan'),

(4, 'SE-ASIA Write Award', '2000-sekarang',
'SE-ASIA Write Award adalah penghargaan internasional untuk penulis-penulis dari kawasan Asia Tenggara. Penghargaan ini memberikan kesempatan bagi penulis Indonesia untuk mendapatkan pengakuan internasional.',
'se-asia-write-award'),

(4, 'Leonie Agustine Literature Prize', '1990-sekarang',
'Leonie Agustine Literature Prize adalah hadiah bergengsi untuk karya-karya sastra yang menunjukkan keunggulan dalam seni penulisan dan kontribusi terhadap dunia sastra.',
'leonie-agustine-prize'),

(4, 'Indonesian Literary Award', '1995-sekarang',
'Indonesian Literary Award adalah penghargaan tahunan yang diberikan kepada karya-karya sastra Indonesia terbaik dalam berbagai kategori termasuk novel, puisi, dan drama.',
'indonesian-literary-award'),

(4, 'Sayembara Puisi Nasional', '1980-sekarang',
'Sayembara Puisi Nasional adalah ajang rutin yang mencari puisi-puisi berkualitas dari penyair Indonesia. Ajang ini telah melahirkan berbagai penyair berbakat yang kemudian menjadi nama-nama terkenal.',
'sayembara-puisi-nasional'),

(4, 'Hadiah Cipta Sastra', '1988-sekarang',
'Hadiah Cipta Sastra adalah penghargaan yang mengakui inovasi dan kreativitas dalam karya-karya sastra Indonesia. Penghargaan ini diberikan kepada penulis yang menunjukkan kontribusi signifikan terhadap perkembangan sastra.',
'hadiah-cipta-sastra');
INSERT INTO content (cat_id, title_id, year, text, slug) VALUES
(5, 'Dewan Kesenian Jakarta', '1968-sekarang',
'Dewan Kesenian Jakarta adalah lembaga seni dan budaya tertua di Indonesia yang didirikan untuk mempromosikan perkembangan seni dan sastra. Lembaga ini telah memainkan peran penting dalam mengorganisir festival sastra dan penghargaan.',
'dewan-kesenian-jakarta'),

(5, 'Persatuan Pengarang Indonesia', '1950-sekarang',
'Persatuan Pengarang Indonesia adalah organisasi profesional yang mewadahi para penulis dan pengarang Indonesia. Organisasi ini berkomitmen untuk melindungi hak-hak penulis dan mempromosikan kualitas sastra Indonesia.',
'persatuan-pengarang-indonesia'),

(5, 'Institut Kesenian Jakarta', '1967-sekarang',
'Institut Kesenian Jakarta adalah lembaga pendidikan seni yang mendidik generasi seniman dan sastrawan Indonesia. Lembaga ini telah menghasilkan banyak figur penting dalam dunia seni dan sastra Indonesia.',
'institut-kesenian-jakarta'),

(5, 'Komunitas Sastra Indonesia', '1975-sekarang',
'Komunitas Sastra Indonesia adalah organisasi grassroot yang mengumpulkan para pecinta sastra untuk berbagi dan mengapresiasi karya-karya sastra. Komunitas ini aktif mengadakan diskusi dan pembacaan puisi.',
'komunitas-sastra-indonesia'),

(5, 'Pusat Dokumentasi Sastra Nasional', '1992-sekarang',
'Pusat Dokumentasi Sastra Nasional adalah lembaga yang bertugas mengumpulkan, melestarikan, dan mendokumentasikan karya-karya sastra Indonesia untuk generasi mendatang.',
'pusat-dokumentasi-sastra');
INSERT INTO content (cat_id, title_id, year, text, slug) VALUES
(6, 'Puisi Modern Indonesia', '1950-an',
'Puisi modern Indonesia berkembang pesat setelah kemerdekaan. Gejala sastra ini ditandai dengan pergeseran dari puisi tradisional ke bentuk dan isi yang lebih modern, ekspresif, dan berani bereksperimen dengan tema serta teknik penulisan baru.',
'puisi-modern-indonesia'),

(6, 'Sastra Engagement', '1945-an',
'Sastra Engagement atau sastra berkomitmen adalah gejala sastra yang berkembang pasca kemerdekaan Indonesia. Sastra jenis ini mengutamakan pesan sosial dan politis dalam setiap karya. Penulis-penulis mencoba menggunakan sastra sebagai alat untuk mengubah masyarakat.',
'sastra-engagement');

SELECT COUNT(*) as total_content FROM content;
SELECT cat_id, COUNT(*) as jumlah FROM content GROUP BY cat_id ORDER BY cat_id;
SELECT * FROM category;
SELECT * FROM content ORDER BY cat_id, id;
