import React from 'react';
import './TableOfContents.css';

function Contributors() {
  const contributors = [
    {
      role: 'Penanggung Jawab Utama',
      members: [
        {
          name: 'Dr. Budi Santoso',
          position: 'Direktur Ensiklopedia Sastra',
          expertise: 'Sastra Indonesia Modern'
        }
      ]
    },
    {
      role: 'Tim Kurator Konten',
      members: [
        {
          name: 'Prof. Siti Nurhaliza',
          position: 'Kurator Pengarang',
          expertise: 'Sejarah dan Biografi Pengarang'
        },
        {
          name: 'Dr. Ahmad Wijaya',
          position: 'Kurator Karya Sastra',
          expertise: 'Analisis dan Kritik Sastra'
        },
        {
          name: 'Ibu Retno Siwi',
          position: 'Kurator Media & Lembaga',
          expertise: 'Industri Penerbitan Sastra'
        }
      ]
    },
    {
      role: 'Tim Peneliti',
      members: [
        {
          name: 'Rina Wijaya',
          position: 'Peneliti Senior',
          expertise: 'Penelitian Sastra Komparatif'
        },
        {
          name: 'Bambang Hidayat',
          position: 'Peneliti Junior',
          expertise: 'Sastra Kontemporer'
        },
        {
          name: 'Dewi Lestari',
          position: 'Asisten Peneliti',
          expertise: 'Dokumentasi Sastra'
        }
      ]
    },
    {
      role: 'Tim Pengembang Teknologi',
      members: [
        {
          name: 'Faradila Kusuma',
          position: 'Full Stack Developer',
          expertise: 'Frontend & Backend Development'
        },
        {
          name: 'Eka Putra',
          position: 'UI/UX Designer',
          expertise: 'Desain Antarmuka & Pengalaman Pengguna'
        },
        {
          name: 'Hendra Wijaya',
          position: 'Database Administrator',
          expertise: 'Manajemen Database & Infrastruktur'
        }
      ]
    },
    {
      role: 'Tim Redaksi & Publikasi',
      members: [
        {
          name: 'Lia Handoko',
          position: 'Editor Kepala',
          expertise: 'Pengeditan Naskah & Standar Konten'
        },
        {
          name: 'Putra Permana',
          position: 'Redaktur',
          expertise: 'Verifikasi Konten & Fact-Checking'
        }
      ]
    }
  ];

  return (
    <div className="contributors-page">
      <div className="contributors-container">
        <div className="contributors-header">
          <h1>👥 Penyusun Ensiklopedia</h1>
          <p>Tim profesional yang berdedikasi melestarikan dan menyebarkan sastra Indonesia</p>
        </div>

        <div className="contributors-intro">
          <p>
            Ensiklopedia Sastra Indonesia dikembangkan oleh tim yang terdiri dari berbagai ahli, peneliti, 
            dan profesional di bidang sastra, teknologi, dan publikasi. Setiap anggota tim membawa keahlian 
            unik untuk menciptakan platform pembelajaran sastra yang komprehensif dan mudah diakses.
          </p>
        </div>

        <div className="contributors-content">
          {contributors.map((section, sectionIdx) => (
            <div key={sectionIdx} className="contributor-section">
              <h2 className="section-title">{section.role}</h2>
              
              <div className="members-grid">
                {section.members.map((member, memberIdx) => (
                  <div key={memberIdx} className="member-card">
                    <div className="member-avatar">
                      {member.name.charAt(0)}
                    </div>
                    <div className="member-info">
                      <h3>{member.name}</h3>
                      <p className="position">{member.position}</p>
                      <p className="expertise">
                        <strong>Keahlian:</strong> {member.expertise}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="contributors-footer">
          <div className="thank-you">
            <h3>🙏 Terima Kasih</h3>
            <p>
              Kami mengucapkan terima kasih kepada semua pihak yang telah berkontribusi dalam membangun 
              Ensiklopedia Sastra Indonesia ini. Dedikasi dan kerja keras tim kami bertujuan untuk 
              melestarikan dan membuat sastra Indonesia lebih dapat diakses oleh masyarakat luas.
            </p>
          </div>

          <div className="join-us">
            <h3>🤝 Bergabung dengan Kami</h3>
            <p>
              Jika Anda memiliki passion untuk sastra Indonesia dan ingin berkontribusi, 
              silakan hubungi kami di <strong>info@ensiklopediasastra.id</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contributors;
