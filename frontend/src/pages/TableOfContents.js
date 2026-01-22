import React from 'react';
import './TableOfContents.css';

function TableOfContents() {
  const categories = [
    {
      id: 1,
      name: '✍️ Pengarang',
      description: 'Tokoh-tokoh penting dalam dunia sastra Indonesia',
      items: [
        'Pramoedya Ananta Toer',
        'Chairil Anwar',
        'Sutan Takdir Alisjahbana',
        'Achdiat Kartamihardja',
        'Amir Hamzah',
        'Emha Ainun Nadjib',
        'Goenawan Muhammad'
      ]
    },
    {
      id: 2,
      name: '📖 Karya Sastra',
      description: 'Karya-karya terbaik sastrawan Indonesia',
      items: [
        'Laskar Pelangi',
        'Negeri 5 Menara',
        'Sang Pemimpi',
        'Bumi Manusia',
        'Anak Semua Bangsa',
        'Pertemuan Jatuh Cinta',
        'Ayat-Ayat Cinta',
        'Ketika Cinta Bertasbih',
        'Sebuah Seni Untuk Bersikap Bodo Amat',
        'Rumah Kaca'
      ]
    },
    {
      id: 3,
      name: '📰 Media Penyebar/Penerbit',
      description: 'Platform penyebaran karya sastra Indonesia',
      items: [
        'Penerbit Gramedia',
        'Majalah Sastra Indonesia',
        'Penerbit Kepustakaan Populer Gramedia',
        'Tempo Magazine',
        'Penerbit Javanica',
        'Majalah Horizon',
        'Penerbit Mizan',
        'Koran Tempo'
      ]
    },
    {
      id: 4,
      name: '🏆 Hadiah/Sayembara Sastra',
      description: 'Penghargaan dan ajang apresiasi sastra',
      items: [
        'Penghargaan Sastra Asia',
        'Sayembara Novel Dewan Kesenian Jakarta',
        'Penghargaan Ramadhan',
        'SE-ASIA Write Award',
        'Leonie Agustine Literature Prize',
        'Indonesian Literary Award',
        'Sayembara Puisi Nasional',
        'Hadiah Cipta Sastra'
      ]
    },
    {
      id: 5,
      name: '🏛️ Lembaga Sastra',
      description: 'Organisasi dan institusi pengelola sastra',
      items: [
        'Dewan Kesenian Jakarta',
        'Persatuan Pengarang Indonesia',
        'Institut Kesenian Jakarta',
        'Komunitas Sastra Indonesia',
        'Pusat Dokumentasi Sastra Nasional'
      ]
    },
    {
      id: 6,
      name: '✨ Gejala Sastra',
      description: 'Fenomena dan gerakan dalam sastra Indonesia',
      items: [
        'Puisi Modern Indonesia',
        'Sastra Engagement'
      ]
    }
  ];

  return (
    <div className="table-of-contents">
      <div className="toc-container">
        <div className="toc-header">
          <h1>📖 Daftar Isi</h1>
          <p>Panduan lengkap konten Ensiklopedia Sastra Indonesia</p>
        </div>

        <div className="toc-intro">
          <p>
            Ensiklopedia Sastra Indonesia menyediakan informasi komprehensif tentang berbagai aspek sastra Indonesia. 
            Daftar isi di bawah ini menunjukkan semua kategori dan item yang tersedia di dalam platform ini.
          </p>
          <p className="toc-stats">
            Total Konten: <strong>40 item</strong> | Total Kategori: <strong>6 kategori</strong>
          </p>
        </div>

        <div className="toc-content">
          {categories.map((category) => (
            <div key={category.id} className="toc-category">
              <div className="category-header">
                <h2>{category.name}</h2>
                <p className="category-desc">{category.description}</p>
                <span className="item-count">{category.items.length} item</span>
              </div>
              
              <ul className="category-items">
                {category.items.map((item, index) => (
                  <li key={index} className="toc-item">
                    <span className="item-number">{index + 1}.</span>
                    <span className="item-name">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="toc-footer">
          <div className="footer-note">
            <h3>💡 Cara Menggunakan</h3>
            <ol>
              <li>Kunjungi halaman Beranda untuk menjelajahi semua konten</li>
              <li>Gunakan fitur Search untuk mencari topik spesifik</li>
              <li>Pilih kategori di sidebar untuk melihat konten per kategori</li>
              <li>Klik "Baca Selengkapnya" untuk melihat detail lengkap</li>
            </ol>
          </div>

          <div className="footer-note">
            <h3>🎯 Keterangan Kategori</h3>
            <ul className="category-legend">
              <li><span className="icon">✍️</span> <strong>Pengarang:</strong> Tokoh-tokoh berpengaruh dalam sastra Indonesia</li>
              <li><span className="icon">📖</span> <strong>Karya Sastra:</strong> Novel, puisi, dan karya sastra lainnya</li>
              <li><span className="icon">📰</span> <strong>Media Penyebar:</strong> Platform dan penerbit sastra</li>
              <li><span className="icon">🏆</span> <strong>Hadiah:</strong> Penghargaan dan sayembara sastra</li>
              <li><span className="icon">🏛️</span> <strong>Lembaga:</strong> Institusi dan organisasi sastra</li>
              <li><span className="icon">✨</span> <strong>Gejala:</strong> Fenomena dan gerakan sastra</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableOfContents;
