import React from 'react';
import { Link } from 'react-router-dom';
import './ContentCard.css';

function ContentCard({ content }) {
  const hasImage = content.image_url;
  const hasVideo = content.video_url;

  const getCategoryEmoji = (catId) => {
    const emojis = {
      1: '✍️',
      2: '📖',
      3: '📰',
      4: '🏆',
      5: '🏛️',
      6: '✨'
    };
    return emojis[catId] || '📚';
  };

  return (
    <div className="content-card">
      {hasImage ? (
        <div className="card-media">
          <img src={`http://localhost:5000${content.image_url}`} alt={content.title_id} />
          {hasVideo && <span className="video-badge">🎬 Video</span>}
        </div>
      ) : (
        <div className="card-media">
          {getCategoryEmoji(content.cat_id)}
        </div>
      )}
      
      <div className="card-header">
        <h3 title={content.title_id}>{content.title_id}</h3>
        <span className="category-badge">
          {getCategoryEmoji(content.cat_id)} {content.category_name || 'Lainnya'}
        </span>
      </div>
      
      <div className="card-body">
        <p className="year">📅 {content.year}</p>
        {content.description && <p className="description">{content.description}</p>}
        <p className="text">{content.text.substring(0, 120)}...</p>
      </div>
      
      <div className="card-footer">
        <Link to={`/detail/${content.slug}`} className="read-more">
          Baca Selengkapnya →
        </Link>
      </div>
    </div>
  );
}

export default ContentCard;
