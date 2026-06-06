import { useState } from 'react'

const allNews = [
  {
    id: 1,
    tag: 'Transfer',
    title: 'Real Madrid close to signing Brazilian midfielder in record deal',
    date: 'Jun 2, 2026',
    emoji: '🤝',
    category: 'transfers',
  },
  {
    id: 2,
    tag: 'Match Report',
    title: 'Spectacular Barcelona comeback stuns Chelsea at Camp Nou',
    date: 'May 30, 2026',
    emoji: '⚽',
    category: 'reports',
  },
  {
    id: 3,
    tag: 'Injury',
    title: 'Liverpool confirm Salah out for two weeks with hamstring issue',
    date: 'May 29, 2026',
    emoji: '🏥',
    category: 'injuries',
  },
  {
    id: 4,
    tag: 'Champions League',
    title: 'UEFA announces quarter-final draw — El Clásico rematch confirmed',
    date: 'May 28, 2026',
    emoji: '🏆',
    category: 'ucl',
  },
  {
    id: 5,
    tag: 'Transfer',
    title: 'Chelsea in advanced talks to bring PSG forward to Stamford Bridge',
    date: 'May 27, 2026',
    emoji: '🔄',
    category: 'transfers',
  },
  {
    id: 6,
    tag: 'Highlights',
    title: "Haaland scores hat-trick as Man City thrash Dortmund 5-1",
    date: 'May 26, 2026',
    emoji: '🎯',
    category: 'reports',
  },
  {
    id: 7,
    tag: 'Manager',
    title: 'Bayern Munich appoint new head coach after surprising exit',
    date: 'May 25, 2026',
    emoji: '📋',
    category: 'other',
  },
  {
    id: 8,
    tag: 'Champions League',
    title: 'PSG edge Liverpool 4-3 in thriller — Mbappe with brace',
    date: 'May 24, 2026',
    emoji: '🔥',
    category: 'ucl',
  },
]

const categories = [
  { key: 'all', label: 'All News' },
  { key: 'ucl', label: 'Champions League' },
  { key: 'transfers', label: 'Transfers' },
  { key: 'reports', label: 'Match Reports' },
  { key: 'injuries', label: 'Injuries' },
]

function News() {
  const [activeTab, setActiveTab] = useState('all')

  const filtered = activeTab === 'all' ? allNews : allNews.filter(n => n.category === activeTab)

  return (
    <div className="section">
      <div className="section-title">📰 News & <span className="accent">Highlights</span></div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 22, flexWrap: 'wrap' }}>
        {categories.map(c => (
          <button
            key={c.key}
            onClick={() => setActiveTab(c.key)}
            style={{
              padding: '7px 16px',
              borderRadius: 20,
              border: activeTab === c.key ? 'none' : '1px solid rgba(255,255,255,0.1)',
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 500,
              background: activeTab === c.key ? 'var(--green)' : 'var(--dark3)',
              color: activeTab === c.key ? '#000' : 'var(--muted)',
              transition: 'all 0.2s',
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="news-grid">
        {filtered.map(item => (
          <div className="news-card" key={item.id}>
            <div className="news-card-img-placeholder">{item.emoji}</div>
            <div className="news-card-body">
              <span className="news-tag">{item.tag}</span>
              <div className="news-card-title">{item.title}</div>
              <div className="news-card-meta">🕐 {item.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News
