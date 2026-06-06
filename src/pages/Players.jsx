import { useState } from 'react'

const players = [
  { name: 'Hussien Taha', team: 'Al-Shorta', goals: 100, assists: 90 },
  { name: 'Mbappe', team: 'Real Madrid', goals: 25, assists: 10 },
  { name: 'Rodrygo', team: 'Real Madrid', goals: 23, assists: 7 },
  { name: 'Lewandowski', team: 'Barcelona', goals: 20, assists: 11 },
  { name: 'Kane', team: 'Bayern', goals: 18, assists: 8 },
  { name: 'Ramos', team: 'PSG', goals: 15, assists: 7 },
  { name: 'Haaland', team: 'Man City', goals: 14, assists: 10 },
  { name: 'Rashford', team: 'Man United', goals: 12, assists: 9 },
  { name: 'Bruno', team: 'Man United', goals: 10, assists: 6 },
  { name: 'Lautaro', team: 'Inter', goals: 7, assists: 5 },
]

function Players() {
  const [sortBy, setSortBy] = useState('goals')

  const sorted = [...players].sort((a, b) => b[sortBy] - a[sortBy])

  return (
    <div className="section">
      <div className="section-title" style={{ justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
        <span>📊 Player <span className="accent">Stats</span></span>
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            onClick={() => setSortBy('goals')}
            style={{
              padding: '6px 14px', borderRadius: 6, border: 'none', cursor: 'pointer',
              fontSize: 13, fontWeight: 600,
              background: sortBy === 'goals' ? 'var(--green)' : 'var(--dark4)',
              color: sortBy === 'goals' ? '#000' : 'var(--muted)',
            }}
          >Goals</button>
          <button
            onClick={() => setSortBy('assists')}
            style={{
              padding: '6px 14px', borderRadius: 6, border: 'none', cursor: 'pointer',
              fontSize: 13, fontWeight: 600,
              background: sortBy === 'assists' ? 'var(--green)' : 'var(--dark4)',
              color: sortBy === 'assists' ? '#000' : 'var(--muted)',
            }}
          >Assists</button>
        </div>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Player</th>
            <th>Team</th>
            <th>Goals</th>
            <th>Assists</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((p, i) => (
            <tr key={i}>
              <td style={{ color: i === 0 ? 'var(--green)' : 'var(--muted)', fontWeight: i === 0 ? 700 : 400 }}>{i + 1}</td>
              <td style={{ textAlign: 'left', fontWeight: 500 }}>{p.name}</td>
              <td style={{ color: 'var(--muted)', fontSize: 13 }}>{p.team}</td>
              <td style={{ color: sortBy === 'goals' ? 'var(--green)' : 'inherit', fontWeight: sortBy === 'goals' ? 600 : 400 }}>{p.goals}</td>
              <td style={{ color: sortBy === 'assists' ? 'var(--green)' : 'inherit', fontWeight: sortBy === 'assists' ? 600 : 400 }}>{p.assists}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Players
