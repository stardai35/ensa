import React from 'react';
import './ContentCard.css';

function ContentCard({ content }) {
  const hasImage = content.image_url;
  const hasVideo = content.video_url;

  return (
    <div className="content-card">
      {hasImage && (
        <div className="card-media">
          <img src={`http://localhost:5000${content.image_url}`} alt={content.title_id} />
          {hasVideo && <span className="video-badge">📹 Video</span>}
        </div>
      )}
      
      <div className="card-header">
        <h3>{content.title_id}</h3>
        <span className="category-badge">{content.category_name || 'Lainnya'}</span>
      </div>
      
      <div className="card-body">
        <p className="year">📅 {content.year}</p>
        {content.description && <p className="description">{content.description}</p>}
        <p className="text">{content.text.substring(0, 100)}...</p>
      </div>
      
      <div className="card-footer">
        <a href={`/detail/${content.slug}`} className="read-more">
          Baca Selengkapnya →
        </a>
      </div>
    </div>
  );
}

export default ContentCard;
