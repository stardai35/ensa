import React from 'react';
import './Navbar.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>📚 Ensiklopedia Sastra</h3>
            <p>Platform digital untuk mempelajari dan mengeksplorasi kekayaan sastra Indonesia.</p>
          </div>

          <div className="footer-section">
            <h4>Menu Utama</h4>
            <ul>
              <li><a href="/">Beranda</a></li>
              <li><a href="/daftar-isi">Daftar Isi</a></li>
              <li><a href="/penyusun">Penyusun</a></li>
              <li><a href="/tentang">Tentang</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kategori</h4>
            <ul>
              <li><a href="/">✍️ Pengarang</a></li>
              <li><a href="/">📖 Karya Sastra</a></li>
              <li><a href="/">📰 Media Penyebar</a></li>
              <li><a href="/">🏆 Hadiah/Sayembara</a></li>
              <li><a href="/">🏛️ Lembaga Sastra</a></li>
              <li><a href="/">✨ Gejala Sastra</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kontak</h4>
            <p>📧 Email: info@ensiklopediasastra.id</p>
            <p>📱 WhatsApp: +62 xxx xxxx xxxx</p>
            <p>🌐 Website: www.ensiklopediasastra.id</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Ensiklopedia Sastra Indonesia. All rights reserved.</p>
          <p>Dibuat dengan ❤️ untuk melestarikan sastra Indonesia</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
