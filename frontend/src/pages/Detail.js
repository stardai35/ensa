import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { contentAPI } from '../api/axiosConfig';
import './Detail.css';

function Detail() {
  const { slug } = useParams();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await contentAPI.getBySlug(slug);
        setContent(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchContent();
  }, [slug]);

  if (loading) return <div className="detail loading">Loading...</div>;
  if (error) return <div className="detail error">Error: {error}</div>;
  if (!content) return <div className="detail not-found">Content not found</div>;

  const hasImage = content.image_url;
  const hasVideo = content.video_url;

  return (
    <div className="detail">
      <div className="detail-header">
        <a href="/" className="back-link">← Kembali ke Beranda</a>
        <h1>{content.title_id}</h1>
        <div className="meta">
          <span className="category">📂 {content.category_name}</span>
          <span className="year">📅 {content.year}</span>
        </div>
      </div>

      <div className="detail-media">
        {hasImage && (
          <div className="media-section">
            <h3>📸 Gambar</h3>
            <img 
              src={`http://localhost:5000${content.image_url}`} 
              alt={content.title_id}
              className="detail-image"
            />
          </div>
        )}

        {hasVideo && (
          <div className="media-section">
            <h3>🎬 Video</h3>
            <video 
              controls 
              className="detail-video"
              controlsList="nodownload"
            >
              <source 
                src={`http://localhost:5000${content.video_url}`} 
                type="video/mp4"
              />
              Browser Anda tidak support video HTML5
            </video>
          </div>
        )}
      </div>

      <div className="detail-body">
        {content.description && (
          <div className="description-box">
            <h3>📝 Ringkasan</h3>
            <p>{content.description}</p>
          </div>
        )}
        
        <div className="content-text">
          <h3>📖 Konten Lengkap</h3>
          <div dangerouslySetInnerHTML={{ __html: content.text }} />
        </div>
      </div>

      <div className="detail-footer">
        <a href="/" className="back-link-bottom">← Kembali ke Beranda</a>
      </div>
    </div>
  );
}

export default Detail;
