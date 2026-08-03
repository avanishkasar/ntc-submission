import React from 'react';

const certs = [
  {
    name: 'Professional Machine Learning Engineer',
    issuer: 'Google',
    date: 'May 2026',
    color: '#4285F4',
  },
  {
    name: 'Oracle Cloud Infrastructure AI Foundations',
    issuer: 'Oracle',
    date: 'Aug 2025',
    color: '#F80000',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-label reveal-text">
          <span className="section-number">02</span>
          <span className="section-label-text">EXPERIENCE</span>
        </div>

        <div className="experience-list">

          {/* ── IEEE APSIT ── */}
          <div className="experience-item reveal-text">
            <div className="exp-header">
              <div className="exp-role">
                <h3>Data Science & Research Lead</h3>
                <span className="exp-company">IEEE APSIT Student Branch · Founding Member</span>
              </div>
              <span className="exp-date">Jul 2026 — Present</span>
            </div>
            <p className="exp-desc">Played a key role in reviving the IEEE Student Branch at APSIT from scratch. Lead data science sessions and research initiatives, connect student researchers with industry professionals, and help members find paths to publication. Part community building, part actual research.</p>
            <div className="exp-tags">
              <span>Data Science</span>
              <span>Research</span>
              <span>Mentoring</span>
              <span>IEEE</span>
              <span>EDA</span>
            </div>
          </div>

          {/* ── GDG ── */}
          <div className="experience-item reveal-text">
            <div className="exp-header">
              <div className="exp-role">
                <h3>Lead Organizer</h3>
                <span className="exp-company">Google Developer Groups On Campus APSIT</span>
              </div>
              <span className="exp-date">Sep 2025 — Jul 2026</span>
            </div>
            <p className="exp-desc">Led end-to-end organization of hackathons, Study Jams, and developer events for 150+ students. Worked with Google Developer Advocates to design technical programming. Recognised as a GDG On Campus Organizer through the Google for Developers Program.</p>
            <div className="exp-tags">
              <span>Community</span>
              <span>Leadership</span>
              <span>Event Management</span>
              <span>Google</span>
            </div>
          </div>

          {/* ── Metvy ── */}
          <div className="experience-item reveal-text">
            <div className="exp-header">
              <div className="exp-role">
                <h3>Business Development Intern</h3>
                <span className="exp-company">Metvy</span>
              </div>
              <span className="exp-date">May 2025 — Jun 2025</span>
            </div>
            <p className="exp-desc">Worked on product strategy and data research at an early-stage startup. Helped shape decisions with actual numbers, not gut feelings.</p>
            <div className="exp-tags">
              <span>Data Interpretation</span>
              <span>Python</span>
              <span>Product Strategy</span>
            </div>
          </div>

          {/* ── GSSoC ── */}
          <div className="experience-item reveal-text">
            <div className="exp-header">
              <div className="exp-role">
                <h3>Open Source Contributor</h3>
                <span className="exp-company">GirlScript Summer of Code (GSSoC) 2025</span>
              </div>
              <span className="exp-date">2025</span>
            </div>
            <p className="exp-desc">Contributed to open source during GSSoC 2025. Picked up real projects, sent PRs, got reviews, and shipped code that people actually use.</p>
            <div className="exp-tags">
              <span>Open Source</span>
              <span>Collaboration</span>
              <span>Git</span>
            </div>
          </div>

        </div>

        {/* ── Certifications ── */}
        <div className="section-label reveal-text" style={{ marginTop: '4rem' }}>
          <span className="section-number" style={{ fontSize: '0.7rem' }}>02.1</span>
          <span className="section-label-text">CERTIFICATIONS</span>
        </div>

        <div className="reveal-text" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1rem',
          marginTop: '1.5rem',
        }}>
          {certs.map(c => (
            <div key={c.name} style={{
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '12px',
              padding: '1.25rem 1.5rem',
              background: '#111',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}>
              <div style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: c.color,
                marginBottom: 4,
              }} />
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', margin: 0 }}>
                {c.issuer} · {c.date}
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.9rem', color: '#e8e8e8', margin: 0, lineHeight: 1.4 }}>
                {c.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
