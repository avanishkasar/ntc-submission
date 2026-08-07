import React from 'react';
import { CertBadge } from './ui/cert-badge';

const experiences = [
  {
    role: 'Data Science & Research Lead',
    company: 'IEEE APSIT Student Branch · Founding Member',
    date: 'Jul 2026 — Present',
    desc: 'Played a key role in reviving the IEEE Student Branch at APSIT from scratch. Lead data science sessions and research initiatives, connect student researchers with industry professionals, and help members find paths to publication.',
    tags: ['Data Science', 'Research', 'Mentoring', 'IEEE', 'EDA'],
  },
  {
    role: 'Lead Organizer',
    company: 'Google Developer Groups On Campus APSIT',
    date: 'Sep 2025 — Jul 2026',
    desc: 'Led end-to-end organization of hackathons, Study Jams, and developer events for 150+ students. Worked with Google Developer Advocates to design impactful technical programming. Recognised through the Google for Developers Program.',
    tags: ['Community', 'Leadership', 'Event Management', 'Google'],
  },
  {
    role: 'Business Development Intern',
    company: 'Metvy',
    date: 'May 2025 — Jun 2025',
    desc: 'Worked on product strategy and data research at an early-stage startup. Helped shape decisions with actual numbers, not gut feelings.',
    tags: ['Data Interpretation', 'Python', 'Product Strategy'],
  },
  {
    role: 'Open Source Contributor',
    company: 'GirlScript Summer of Code (GSSoC) 2025',
    date: '2025',
    desc: 'Contributed to open source during GSSoC 2025. Picked up real projects, sent PRs, got reviews, and shipped code that people actually use.',
    tags: ['Open Source', 'Collaboration', 'Git'],
  },
];

const certs = [
  {
    name: 'Professional Machine Learning Engineer',
    issuer: 'Google',
    date: 'May 2026',
    accentColor: 'hsl(217,90%,61%)',
    bgColors: ['#0f172a', '#1e3a5f'] as [string, string],
    certImage: '/assets/ml-cert.png',
    icon: '🧠',
  },
  {
    name: 'OCI AI Foundations Associate',
    issuer: 'Oracle',
    date: 'Aug 2025',
    accentColor: 'hsl(10,90%,55%)',
    bgColors: ['#1a0a00', '#3d1200'] as [string, string],
    certImage: '/assets/oracle-cert.png',
    icon: '☁️',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">

        {/* ── Section label ── */}
        <div className="section-label reveal-text">
          <span className="section-number">02</span>
          <span className="section-label-text">EXPERIENCE</span>
        </div>

        {/* ── Experience list ── */}
        <div className="experience-list">
          {experiences.map((exp) => (
            <div key={exp.role + exp.company} className="experience-item reveal-text">
              <div className="exp-header">
                <div className="exp-role">
                  <h3>{exp.role}</h3>
                  <span className="exp-company">{exp.company}</span>
                </div>
                <span className="exp-date">{exp.date}</span>
              </div>
              <p className="exp-desc">{exp.desc}</p>
              <div className="exp-tags">
                {exp.tags.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        {/* ── Certifications ── */}
        <div className="section-label reveal-text" style={{ marginTop: '4rem' }}>
          <span className="section-number" style={{ fontSize: '0.68rem' }}>02.1</span>
          <span className="section-label-text">CERTIFICATIONS</span>
        </div>

        <div
          className="reveal-text"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.25rem',
            marginTop: '1.5rem',
            alignItems: 'flex-start',
          }}
        >
          {certs.map(c => (
            <CertBadge key={c.name} {...c} />
          ))}
        </div>

        <p
          className="reveal-text"
          style={{
            fontFamily: 'monospace',
            fontSize: '0.68rem',
            color: 'rgba(255,255,255,0.25)',
            marginTop: '0.75rem',
          }}
        >
          click a badge to view the certificate ↑
        </p>

      </div>
    </section>
  );
}
