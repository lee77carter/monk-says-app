import React from 'react';
import './App.css'; // Import your CSS file
import { topFunction } from './topFunction.js';

function App() {
  return (
    <div className="App">
      <script src="topFunction.js"></script>
      <header>
        <img src="./img/basketball-monk.png" alt="logo" />
        <h1>Monk's Courses on Financial Literacy</h1>
        <p><em>"Using sports to bridge the gap in financial literacy so you can profit"</em></p>
      </header>

      <main>
        <div className="column-icons">
          <h3>Monk Says...this is how you win</h3>
          <div className="icons">
            <img src="./img/banner.png" alt="Time" />
          </div>
        </div>
        <h3>Monk says... this is how you play the game</h3>
        <div className="column">
          <p>Why should you invest?</p>
          <p>Taking a loss</p>
          <p>Taxes</p>
          <p>You assign a coach</p>
          <p>Scouting for players</p>
          <p>The warmup</p>
          <p>Practice session</p>
          <p>Building your own arena</p>
          <p>Understanding your 401(k)/Pension</p>
          <p>Generational wealth</p>
        </div>
      </main>

      <div className="quote">
        <strong>Monk Says...</strong>
        <br />
        The Game is out there. It's either play or get played.
        <cite title="Source Title"><br />- Omar, The Wire</cite>
      </div>

      <footer>
        <div className="click-btns">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfBiPrSYs_lAhMlIkbXXh7FmVMlKMjzijRtU29tv6Cx3FnZ5A/viewform" target="_blank" rel="noopener noreferrer" className="survey-button">
            <strong>Q&A</strong>
          </a>
          <a href="mailto:whatmonksays@gmail.com" rel="noopener noreferrer" target="_blank" className="email-btn">
            <img src="img/email-btn.png" alt="Email Button" />
          </a>
        </div>
        <div className="top-button">
          <button onClick={topFunction} id="topBtn" title="Go to top">Top</button>
        </div>
        <p className="copyright">
          Copyright {new Date().getFullYear()} | Monksays
        </p>
      </footer>
    </div>
  );
}

export default App;
