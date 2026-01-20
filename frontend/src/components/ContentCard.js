import React from 'react';
import './ContentCard.css';

function ContentCard({ content }) {
  return (
    <div className="content-card">
      <div className="card-header">
        <h3>{content.title_id}</h3>
        <span className="category-badge">{content.category_name || 'Lainnya'}</span>
      </div>
      <div className="card-body">
        <p className="year">Tahun: {content.year}</p>
        <p className="text">{content.text.substring(0, 150)}...</p>
      </div>
      <div className="card-footer">
        <a href={`/detail/${content.slug}`} className="read-more">
          Baca Selengkapnya
        </a>
      </div>
    </div>
  );
}

export default ContentCard;
