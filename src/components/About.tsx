import React from 'react';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-label reveal-text">
          <span className="section-number">01</span>
          <span className="section-label-text">ABOUT</span>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <h2 className="about-heading">
              <div className="reveal-wrap"><span className="reveal-text">Just a guy who</span></div>
              <div className="reveal-wrap"><span className="reveal-text">really likes</span></div>
              <div className="reveal-wrap"><span className="reveal-text"><em>building things.</em></span></div>
            </h2>
          </div>
          <div className="about-right">
            <div className="about-bio reveal-text">
              <p>I study CS at <strong>APSIT, Mumbai</strong> and lead <strong>GDG On Campus APSIT</strong> where I run hackathons, workshops and study jams. Also a founding member of <strong>IEEE APSIT</strong>, leading data science and research initiatives.</p>
              <p>Right now I'm deep into AI and developer tooling. I built <strong>Playlistify AI</strong> (mood-based Spotify playlists), <strong>SmartRouter</strong> (picks the right AI model for any task), and keep shipping more. I learn by building, not by waiting.</p>
              <p>Google Certified ML Engineer. Outside code: hackathons, open source, and too many browser tabs about LLMs and RAG systems.</p>
            </div>

            
            <div className="about-stats reveal-text">
              <div className="stat">
                <span className="stat-number">15</span><span className="stat-plus">+</span>
                <span className="stat-label">Events Organized</span>
              </div>
              <div className="stat">
                <span className="stat-number">10</span><span className="stat-plus">+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat">
                <span className="stat-number">500</span><span className="stat-plus">+</span>
                <span className="stat-label">Community Members</span>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
