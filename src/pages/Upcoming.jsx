const upcomingMatches = [
  { home: 'Real Madrid', away: 'Barcelona', time: '9:00 PM', date: 'Jun 5, 2026', venue: 'Santiago Bernabéu' },
  { home: 'Liverpool', away: 'Napoli', time: '7:30 PM', date: 'Jun 6, 2026', venue: 'Anfield' },
  { home: 'Bayern', away: 'Dortmund', time: '8:45 PM', date: 'Jun 7, 2026', venue: 'Allianz Arena' },
  { home: 'PSG', away: 'Chelsea', time: '10:00 PM', date: 'Jun 8, 2026', venue: 'Parc des Princes' },
]

function Upcoming() {
  return (
    <div className="section">
      <div className="section-title">📅 Upcoming <span className="accent">Matches</span></div>
      {upcomingMatches.map((m, i) => (
        <div className="match-card" key={i}>
          <div className="teams">{m.home} vs {m.away}</div>
          <div className="score">{m.date} · {m.time}</div>
          <div className="time">🏟️ {m.venue}</div>
        </div>
      ))}
    </div>
  )
}

export default Upcoming
