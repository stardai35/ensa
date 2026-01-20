-- Sample Data for Ensiklopedia Sastra Database

USE suzzxrkz_ensisa;

-- Clear existing data
DELETE FROM content;
DELETE FROM category;

-- Insert Categories
INSERT INTO category (id, name, slug) VALUES
(1, 'Pengarang', 'pengarang'),
(2, 'Karya Sastra', 'karya-sastra'),
(3, 'Media Penyebar/Penerbit Sastra', 'media-penyebar-penerbit'),
(4, 'Hadiah/Sayembara Sastra', 'hadiah-sayembara-sastra'),
(5, 'Lembaga Sastra', 'lembaga-sastra'),
(6, 'Gejala Sastra', 'gejala-sastra');

-- Insert Sample Content - Pengarang
INSERT INTO content (cat_id, title_id, year, text, slug) VALUES
(1, 'Pramoedya Ananta Toer', '1925-2006', 
'Pramoedya Ananta Toer adalah salah satu sastrawan Indonesia yang paling terkenal dan berpengaruh. Lahir di Blora, Jawa Tengah, pada tanggal 6 Februari 1925, dan meninggal di Jakarta pada tanggal 30 April 2006. Beliau dikenal sebagai penulis yang prolific dan memiliki gaya penulisan yang kuat dan bermakna. Karyanya mencakup novel, cerpen, drama, dan esai. Beberapa karyanya yang terkenal antara lain tetralogi Bumi Manusia, Anak Semua Bangsa, Jejak Langkah, dan Rumah Kaca. Pramoedya juga dikenal sebagai seorang pejuang hak asasi manusia dan sering mengkritik pemerintah melalui tulisannya.',
'pramoedya-ananta-toer'),

(1, 'Soekarno', '1901-1970',
'Soekarno bukan hanya presiden Indonesia pertama, tetapi juga seorang penulis dan pemikir yang memiliki pengaruh besar dalam sastra Indonesia. Tulisan dan pidato-pidatonya mencerminkan semangat nasionalisme dan perjuangan kemerdekaan Indonesia. Karyanya banyak mempengaruhi generasi muda Indonesia untuk terlibat dalam gerakan kebangsaan.',
'soekarno'),

(1, 'Chairil Anwar', '1922-1949',
'Chairil Anwar adalah seorang penyair Indonesia yang revolusioner. Lahir di Medan pada tanggal 26 Juli 1922 dan meninggal di Jakarta pada tanggal 28 April 1949. Beliau dikenal sebagai pelopor puisi modern Indonesia. Puisi-puisinya mencerminkan gejolak jiwa dan semangat perlawanan. Beberapa puisinya yang terkenal antara lain "Aku", "Diponegoro", dan "Kudengar Seruan Bedil di Benteng Kota".',
'chairil-anwar');

-- Insert Sample Content - Karya Sastra
INSERT INTO content (cat_id, title_id, year, text, slug) VALUES
(2, 'Laskar Pelangi', '2005',
'Laskar Pelangi adalah novel karya Andrea Hirata yang menceritakan kisah anak-anak dari keluarga kurang mampu yang berjuang untuk mengubah nasib mereka melalui pendidikan. Novel ini telah diterjemahkan ke berbagai bahasa dan menjadi bestseller internasional. Kisahnya menginspirasi banyak orang tentang pentingnya pendidikan dan semangat pantang menyerah.',
'laskar-pelangi'),

(2, 'Negeri 5 Menara', '2009',
'Negeri 5 Menara adalah novel karya Ahmad Fuadi yang menceritakan petualangan seorang remaja bernama Alif yang melanjutkan pendidikan ke Malaysia. Novel ini menggabungkan elemen adventure, coming-of-age, dan pencarian jati diri. Buku ini sangat populer di kalangan remaja Indonesia dan telah diadaptasi menjadi film.',
'negeri-5-menara'),

(2, 'Sang Pemimpi', '2006',
'Sang Pemimpi adalah novel karya Andrea Hirata yang merupakan lanjutan dari Laskar Pelangi. Novel ini menceritakan tentang perjalanan dua tokoh utama untuk mewujudkan impian mereka. Dengan setting yang terutama di Paris, novel ini menunjukkan bagaimana mimpi dan determinasi dapat membawa perubahan besar.',
'sang-pemimpi');

-- Insert Sample Content - Media Penyebar
INSERT INTO content (cat_id, title_id, year, text, slug) VALUES
(3, 'Majalah Sastra Indonesia', '1970-sekarang',
'Majalah Sastra Indonesia adalah publikasi penting yang berfokus pada sastra dan budaya Indonesia. Majalah ini telah menerbitkan karya-karya dari banyak penulis terkenal dan menjadi platform bagi penulis baru untuk memperkenalkan karyanya kepada publik.',
'majalah-sastra-indonesia'),

(3, 'Penerbit Gramedia', '1974-sekarang',
'PT Gramedia adalah penerbit buku terkemuka di Indonesia yang telah memainkan peran penting dalam penyebaran sastra Indonesia. Penerbit ini telah menerbitkan ribuan judul buku dari berbagai genre dan penulis ternama.',
'penerbit-gramedia');

-- Insert Sample Content - Gejala Sastra
INSERT INTO content (cat_id, title_id, year, text, slug) VALUES
(6, 'Puisi Modern Indonesia', '1950-an',
'Puisi modern Indonesia berkembang pesat setelah kemerdekaan. Gejala sastra ini ditandai dengan pergeseran dari puisi tradisional ke bentuk dan isi yang lebih modern dan ekspresif. Penyair-penyair seperti Chairil Anwar menjadi pelopor gerakan ini.',
'puisi-modern-indonesia'),

(6, 'Sastra Engagement', '1945-an',
'Sastra Engagement atau sastra berkomitmen adalah gejala sastra yang berkembang pasca kemerdekaan Indonesia. Sastra jenis ini mengutamakan pesan sosial dan political dalam setiap karya. Penulis-penulis mencoba menggunakan sastra sebagai alat untuk mengubah masyarakat.',
'sastra-engagement');

-- Verify data
SELECT * FROM category;
SELECT * FROM content;
