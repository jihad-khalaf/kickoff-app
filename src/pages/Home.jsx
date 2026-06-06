const liveMatches = [
  { home: 'Barcelona', away: 'Real Madrid', score: '1 - 2', live: true },
  { home: 'Liverpool', away: 'Man City', score: '1 - 1', live: true },
  { home: 'Bayern', away: 'PSG', score: '3 - 4', live: true },
  { home: 'Man United', away: 'Chelsea', score: '1 - 3', live: false },
]

const standings = [
  { team: 'Real Madrid', played: 10, wins: 8, losses: 2, points: 25 },
  { team: 'Barcelona', played: 10, wins: 7, losses: 3, points: 23 },
  { team: 'Liverpool', played: 10, wins: 6, losses: 4, points: 20 },
  { team: 'Man City', played: 10, wins: 5, losses: 5, points: 18 },
  { team: 'PSG', played: 10, wins: 4, losses: 6, points: 15 },
  { team: 'Bayern', played: 10, wins: 3, losses: 7, points: 12 },
  { team: 'Chelsea', played: 10, wins: 3, losses: 7, points: 10 },
  { team: 'Manchester United', played: 10, wins: 2, losses: 8, points: 9 },
  { team: 'Dortmund', played: 10, wins: 2, losses: 8, points: 6 },
  { team: 'Napoli', played: 10, wins: 1, losses: 9, points: 5 },
]

function Home() {
  return (
    <>
      <div className="hero-strip">
        <div>
          <h1>CHAMPIONS <span>LEAGUE</span></h1>
          <p>Live scores · Standings · Stats — all in one place</p>
        </div>
        <div className="hero-icon">🏆</div>
      </div>

      <div className="section">
        <div className="section-title">🔴 Live <span className="accent">Matches</span></div>
        {liveMatches.map((m, i) => (
          <div className="match-card" key={i}>
            <div className="teams">
              {m.home} vs {m.away}
              {m.live && <span className="live-badge">LIVE</span>}
            </div>
            <div className="score">⚽ {m.score}</div>
          </div>
        ))}
      </div>

      <div className="section">
        <div className="section-title">🏆 <span className="accent">Standings</span></div>
        <table className="styled-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>MP</th>
              <th>W</th>
              <th>L</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((row, i) => (
              <tr key={i} className={i === 0 ? 'rank-1' : ''}>
                <td>{i + 1}</td>
                <td>{row.team}</td>
                <td>{row.played}</td>
                <td>{row.wins}</td>
                <td>{row.losses}</td>
                <td><strong>{row.points}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Home
