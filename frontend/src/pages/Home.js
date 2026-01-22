import React, { useState, useEffect } from 'react';
import { contentAPI, categoryAPI } from '../api/axiosConfig';
import Header from '../components/Header';
import ContentCard from '../components/ContentCard';
import './Home.css';

const ITEMS_PER_PAGE = 9;

function Home() {
  const [contents, setContents] = useState([]);
  const [filteredContents, setFilteredContents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        const categoryResponse = await categoryAPI.getAll();
        setCategories(categoryResponse.data);

        // Fetch contents
        const contentResponse = await contentAPI.getAll();
        setContents(contentResponse.data);
        setFilteredContents(contentResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId === selectedCategory ? null : catId);
    setSearchQuery('');
    setCurrentPage(1);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategory(null);
    setCurrentPage(1);
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const getFilteredContents = () => {
    let filtered = contents;

    if (selectedCategory) {
      filtered = filtered.filter(content => content.cat_id === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(content =>
        content.title_id.toLowerCase().includes(query) ||
        content.text.toLowerCase().includes(query) ||
        (content.description && content.description.toLowerCase().includes(query))
      );
    }

    return filtered;
  };

  const allFilteredContents = getFilteredContents();
  const totalPages = Math.ceil(allFilteredContents.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedContents = allFilteredContents.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Get category stats
  const getCategoryCount = (catId) => {
    return contents.filter(c => c.cat_id === catId).length;
  };

  // FAQ Data
  const faqData = [
    {
      id: 1,
      question: "Apa itu Ensiklopedia Sastra Indonesia?",
      answer: "Ensiklopedia Sastra Indonesia adalah platform digital komprehensif yang menyediakan informasi lengkap tentang dunia sastra Indonesia. Platform ini mencakup data tentang pengarang, karya sastra, media penyebar, hadiah/sayembara, lembaga sastra, dan berbagai gejala dalam perkembangan sastra Indonesia."
    },
    {
      id: 2,
      question: "Apa tujuan dibuatnya Ensiklopedia Sastra Indonesia?",
      answer: "Tujuan utama ensiklopedia ini adalah melestarikan dan mempromosikan warisan sastra Indonesia, memfasilitasi penelitian akademik, dan meningkatkan apresiasi masyarakat terhadap karya sastra Indonesia. Kami berkomitmen menjadi referensi terpercaya bagi peneliti, penulis, dan pecinta sastra."
    },
    {
      id: 3,
      question: "Apa saja informasi yang tersedia di ensiklopedia ini?",
      answer: "Ensiklopedia ini menyediakan informasi tentang: Pengarang terkenal Indonesia, Karya sastra (novel, puisi, drama, dll), Media penyebar sastra, Hadiah dan penghargaan sastra, Lembaga dan organisasi sastra, serta Gejala dan fenomena dalam sastra Indonesia."
    },
    {
      id: 4,
      question: "Apakah semua konten di ensiklopedia ini gratis?",
      answer: "Ya, semua konten yang tersedia di Ensiklopedia Sastra Indonesia dapat diakses secara gratis. Kami percaya bahwa pengetahuan tentang sastra Indonesia harus dapat diakses oleh semua kalangan tanpa hambatan biaya."
    },
    {
      id: 5,
      question: "Bagaimana jika menemukan kesalahan atau ingin memberi saran?",
      answer: "Kami sangat menghargai masukan dari pengguna. Jika Anda menemukan kesalahan atau ingin memberi saran untuk perbaikan, silakan hubungi tim kami melalui formulir kontak yang tersedia di halaman Tentang Kami atau kirim email ke tim@ensiklopedia-sastra.id."
    }
  ];

  return (
    <div className="home">
      <Header onSearch={handleSearch} searchQuery={searchQuery} />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Ensiklopedia Sastra Indonesia</h1>
          <p>Temukan berbagai informasi tentang sastra Indonesia dari pengarang, karya, hingga lembaga sastra</p>
        </div>
      </section>

      <div className="main-container">
        <aside className="sidebar">
          <div className="category-sidebar">
            <h3>🎭 Kategori</h3>
            <div className="category-filter">
              <button
                className={`category-item ${selectedCategory === null ? 'active' : ''}`}
                onClick={() => handleSelectCategory(null)}
              >
                <span className="cat-icon">📚</span>
                <span className="cat-name">Semua Kategori</span>
                <span className="cat-count">{contents.length}</span>
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleSelectCategory(category.id)}
                >
                  <span className="cat-icon">
                    {category.id === 1 && '✍️'}
                    {category.id === 2 && '📖'}
                    {category.id === 3 && '📰'}
                    {category.id === 4 && '🏆'}
                    {category.id === 5 && '🏛️'}
                    {category.id === 6 && '✨'}
                  </span>
                  <span className="cat-name">{category.name}</span>
                  <span className="cat-count">{getCategoryCount(category.id)}</span>
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="stats-box">
              <div className="stat-item">
                <span className="stat-label">Total Konten</span>
                <span className="stat-value">{contents.length}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Kategori</span>
                <span className="stat-value">{categories.length}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="content-area">
          {/* Filter & Sort Info */}
          <div className="content-header">
            <div className="header-info">
              {selectedCategory ? (
                <h2>
                  Kategori: <strong>{categories.find(c => c.id === selectedCategory)?.name}</strong>
                </h2>
              ) : searchQuery ? (
                <h2>
                  Hasil Pencarian: <strong>"{searchQuery}"</strong>
                </h2>
              ) : (
                <h2>Semua Konten Sastra</h2>
              )}
              <p className="result-count">Ditemukan {allFilteredContents.length} hasil (halaman {currentPage} dari {totalPages || 1})</p>
            </div>
          </div>

          {/* Content Grid */}
          {loading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Memuat konten...</p>
            </div>
          ) : displayedContents.length === 0 ? (
            <div className="no-content-state">
              <div className="empty-icon">🔍</div>
              <h3>Tidak ada konten yang ditemukan</h3>
              <p>Coba pilih kategori lain atau ubah pencarian Anda</p>
              <button
                className="reset-btn"
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery('');
                }}
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="content-grid">
              {displayedContents.map((content) => (
                <ContentCard key={content.id} content={content} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && displayedContents.length > 0 && (
            <div className="pagination">
              <button 
                className="pagination-btn"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                ← Sebelumnya
              </button>
              <div className="page-info">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className={`page-number ${currentPage === page ? 'active' : ''}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button 
                className="pagination-btn"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Selanjutnya →
              </button>
            </div>
          )}
        </main>
      </div>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <h2>❓ Pertanyaan yang Sering Ditanyakan</h2>
            <p>Temukan jawaban untuk pertanyaan umum tentang Ensiklopedia Sastra Indonesia</p>
          </div>
          
          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div 
                key={faq.id} 
                className={`faq-item ${expandedFAQ === index ? 'expanded' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="question-text">{faq.question}</span>
                  <span className="toggle-icon">{expandedFAQ === index ? '▼' : '▶'}</span>
                </button>
                {expandedFAQ === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
