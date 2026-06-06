const playedMatches = [
  { home: 'Barcelona', away: 'Chelsea', homeScore: 2, awayScore: 0, date: 'May 30, 2026' },
  { home: 'Bayern', away: 'Real Madrid', homeScore: 1, awayScore: 3, date: 'May 28, 2026' },
  { home: 'Dortmund', away: 'Manchester United', homeScore: 2, awayScore: 1, date: 'May 26, 2026' },
  { home: 'PSG', away: 'Man City', homeScore: 4, awayScore: 1, date: 'May 24, 2026' },
  { home: 'Liverpool', away: 'Napoli', homeScore: 1, awayScore: 0, date: 'May 22, 2026' },
]

function Matches() {
  return (
    <div className="section">
      <div className="section-title">⚽ Played <span className="accent">Matches</span></div>
      {playedMatches.map((m, i) => (
        <div className="match-card" key={i}>
          <div className="teams">
            {m.home} {m.homeScore} — {m.awayScore} {m.away}
          </div>
          <div className="time">{m.date} · Full Time</div>
        </div>
      ))}
    </div>
  )
}

export default Matches
