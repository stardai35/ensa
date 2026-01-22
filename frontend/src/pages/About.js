import React from 'react';
import './TableOfContents.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1>ℹ️ Tentang Ensiklopedia Sastra</h1>
          <p>Mengenal lebih jauh tentang misi dan visi kami</p>
        </div>

        <div className="about-content">
          {/* Tentang */}
          <section className="about-section">
            <h2>📚 Tentang Kami</h2>
            <p>
              Ensiklopedia Sastra Indonesia adalah platform digital yang didedikasikan untuk melestarikan, 
              mendokumentasikan, dan menyebarkan kekayaan sastra Indonesia. Kami percaya bahwa sastra adalah 
              warisan budaya yang berharga dan harus dapat diakses oleh semua orang.
            </p>
            <p>
              Dengan mengumpulkan informasi komprehensif tentang pengarang, karya sastra, media penyebar, 
              lembaga, dan berbagai aspek lainnya, kami berkomitmen untuk menjadi referensi terpercaya 
              dalam dunia sastra Indonesia.
            </p>
          </section>

          {/* Misi & Visi */}
          <section className="about-section">
            <h2>🎯 Misi & Visi</h2>
            
            <div className="mission-vision">
              <div className="card">
                <h3>👁️ Visi Kami</h3>
                <p>
                  Menjadi platform digital terdepan yang menyediakan informasi lengkap dan terpercaya 
                  tentang sastra Indonesia, sehingga membantu pelestarian dan penyebaran warisan budaya 
                  sastra Indonesia ke seluruh dunia.
                </p>
              </div>

              <div className="card">
                <h3>🎯 Misi Kami</h3>
                <ul>
                  <li>Mengumpulkan dan mendokumentasikan informasi komprehensif tentang sastra Indonesia</li>
                  <li>Membuat sastra Indonesia lebih mudah diakses oleh masyarakat luas</li>
                  <li>Mempromosikan apresiasi terhadap karya-karya sastrawan Indonesia</li>
                  <li>Mendukung penelitian dan pembelajaran tentang sastra Indonesia</li>
                  <li>Berkontribusi pada pelestarian warisan budaya sastra Indonesia</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Nilai-Nilai Kami */}
          <section className="about-section">
            <h2>💎 Nilai-Nilai Kami</h2>
            
            <div className="values-grid">
              <div className="value-card">
                <h3>🔒 Integritas</h3>
                <p>Kami berkomitmen untuk menyediakan informasi yang akurat dan dapat dipercaya.</p>
              </div>

              <div className="value-card">
                <h3>🎓 Edukasi</h3>
                <p>Kami percaya pada kekuatan pendidikan untuk mengubah dan memberdayakan masyarakat.</p>
              </div>

              <div className="value-card">
                <h3>🤝 Kolaborasi</h3>
                <p>Kami bekerja sama dengan para ahli dan komunitas sastra untuk memberikan nilai terbaik.</p>
              </div>

              <div className="value-card">
                <h3>♻️ Keberlanjutan</h3>
                <p>Kami berkomitmen untuk melestarikan sastra Indonesia untuk generasi mendatang.</p>
              </div>

              <div className="value-card">
                <h3>🌍 Inklusivitas</h3>
                <p>Kami membuat sastra Indonesia dapat diakses oleh semua orang, tanpa memandang latar belakang.</p>
              </div>

              <div className="value-card">
                <h3>💡 Inovasi</h3>
                <p>Kami menggunakan teknologi terkini untuk memberikan pengalaman pembelajaran yang terbaik.</p>
              </div>
            </div>
          </section>

          {/* Konten */}
          <section className="about-section">
            <h2>📊 Konten Kami</h2>
            <p>
              Platform kami menyediakan informasi terstruktur tentang 6 kategori utama sastra Indonesia:
            </p>
            
            <div className="content-overview">
              <div className="overview-item">
                <h4>✍️ Pengarang</h4>
                <p>Biografi dan kontribusi tokoh-tokoh penting dalam dunia sastra Indonesia</p>
                <span className="count">7 item</span>
              </div>

              <div className="overview-item">
                <h4>📖 Karya Sastra</h4>
                <p>Koleksi karya-karya terbaik sastrawan Indonesia dari berbagai genre</p>
                <span className="count">10 item</span>
              </div>

              <div className="overview-item">
                <h4>📰 Media Penyebar</h4>
                <p>Platform dan penerbit yang menyebarkan karya sastra Indonesia</p>
                <span className="count">8 item</span>
              </div>

              <div className="overview-item">
                <h4>🏆 Hadiah & Sayembara</h4>
                <p>Penghargaan dan ajang apresiasi karya-karya sastra terbaik</p>
                <span className="count">8 item</span>
              </div>

              <div className="overview-item">
                <h4>🏛️ Lembaga Sastra</h4>
                <p>Organisasi dan institusi yang mengelola dan mempromosikan sastra Indonesia</p>
                <span className="count">5 item</span>
              </div>

              <div className="overview-item">
                <h4>✨ Gejala Sastra</h4>
                <p>Fenomena dan gerakan penting dalam perkembangan sastra Indonesia</p>
                <span className="count">2 item</span>
              </div>
            </div>
          </section>

          {/* Teknologi */}
          <section className="about-section">
            <h2>🔧 Teknologi</h2>
            <p>
              Ensiklopedia Sastra Indonesia dibangun dengan teknologi modern untuk memberikan 
              pengalaman pengguna yang optimal:
            </p>
            
            <div className="tech-grid">
              <div className="tech-item">
                <strong>Frontend:</strong> React.js dengan styling CSS modern
              </div>
              <div className="tech-item">
                <strong>Backend:</strong> Node.js dengan Express.js
              </div>
              <div className="tech-item">
                <strong>Database:</strong> MySQL untuk penyimpanan data yang andal
              </div>
              <div className="tech-item">
                <strong>Deployment:</strong> Cloud-based infrastructure untuk performa optimal
              </div>
            </div>
          </section>

          {/* Hubungi Kami */}
          <section className="about-section">
            <h2>📞 Hubungi Kami</h2>
            <p>
              Kami senang mendengar masukan, pertanyaan, atau saran dari Anda. 
              Jangan ragu untuk menghubungi kami melalui berbagai saluran komunikasi:
            </p>
            
            <div className="contact-info">
              <div className="contact-item">
                <strong>📧 Email:</strong> info@ensiklopediasastra.id
              </div>
              <div className="contact-item">
                <strong>📱 WhatsApp:</strong> +62 812 xxxx xxxx
              </div>
              <div className="contact-item">
                <strong>🌐 Website:</strong> www.ensiklopediasastra.id
              </div>
              <div className="contact-item">
                <strong>📍 Alamat:</strong> Jalan Sastra No. 1, Jakarta Pusat, Indonesia
              </div>
            </div>
          </section>
        </div>

        <div className="about-footer">
          <p>
            Terima kasih telah mengunjungi Ensiklopedia Sastra Indonesia. 
            Kami berharap platform ini dapat menjadi sumber pembelajaran dan inspirasi bagi Anda dalam 
            mengeksplorasi kekayaan sastra Indonesia. 📚✨
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
