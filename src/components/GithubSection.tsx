import React, { useState } from 'react';
import GithubCalendar from './ui/retro-space-shooter-git-hub-calendar';

// Using jsDelivr CDN — properly serves SVG SMIL animations (raw GitHub strips them)
// Heatmap rebuilt daily by GitHub Actions in avanishkasar/avanishkasar repo
const PROFILE_REPO_RAW = 'https://cdn.jsdelivr.net/gh/avanishkasar/avanishkasar@main';
// Daily cache-bust key so portfolio always shows the freshest heatmap
const TODAY = new Date().toISOString().split('T')[0];

export default function GithubSection() {
  const [tab, setTab] = useState<'calendar' | 'terminal'>('terminal');

  return (
    <section className="py-16 md:py-32 w-full bg-black relative">
      <div className="container">
        <div className="section-label reveal-text mb-8">
          <span className="section-number">03</span>
          <span className="section-label-text">GITHUB CONTRIBUTIONS</span>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 mb-8 reveal-text">
          <button
            onClick={() => setTab('terminal')}
            style={{
              padding: '6px 18px',
              borderRadius: '100px',
              fontSize: '0.72rem',
              fontFamily: 'monospace',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              border: tab === 'terminal'
                ? '1px solid #00f0ff'
                : '1px solid rgba(255,255,255,0.12)',
              background: tab === 'terminal'
                ? 'rgba(0,240,255,0.08)'
                : 'transparent',
              color: tab === 'terminal' ? '#00f0ff' : 'rgba(255,255,255,0.4)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            $ terminal view
          </button>
          <button
            onClick={() => setTab('calendar')}
            style={{
              padding: '6px 18px',
              borderRadius: '100px',
              fontSize: '0.72rem',
              fontFamily: 'monospace',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              border: tab === 'calendar'
                ? '1px solid #00f0ff'
                : '1px solid rgba(255,255,255,0.12)',
              background: tab === 'calendar'
                ? 'rgba(0,240,255,0.08)'
                : 'transparent',
              color: tab === 'calendar' ? '#00f0ff' : 'rgba(255,255,255,0.4)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            $ space shooter
          </button>
        </div>

        {/* Terminal view — ASCII + info card + heatmap from profile repo */}
        {tab === 'terminal' && (
          <div
            className="reveal-text w-full rounded-2xl overflow-hidden"
            style={{
              background: '#0a0a0a',
              border: '1px solid rgba(255,255,255,0.06)',
              boxShadow: 'inset 0 0 80px rgba(0,240,255,0.02)',
            }}
          >
            {/* Terminal chrome bar */}
            <div
              style={{
                padding: '10px 16px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
              <span style={{
                marginLeft: 8,
                fontFamily: 'monospace',
                fontSize: '0.72rem',
                color: 'rgba(255,255,255,0.3)',
              }}>
                avanish@github — profile
              </span>
            </div>

            <div style={{ padding: '24px 20px', overflowX: 'auto' }}>
              {/* whoami */}
              <p style={{
                fontFamily: 'monospace',
                fontSize: '0.78rem',
                color: 'rgba(255,255,255,0.35)',
                marginBottom: '16px',
              }}>
                <span style={{ color: '#00f0ff' }}>avanish@github</span>
                <span style={{ color: 'rgba(255,255,255,0.2)' }}> ~ $ </span>
                whoami
              </p>

              {/* ASCII wordmark + info card side by side */}
              <div style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginBottom: '28px',
              }}>
                <img
                  src={`${PROFILE_REPO_RAW}/avi-ascii.svg`}
                  alt="Avanish ASCII art"
                  style={{ width: '340px', maxWidth: '100%', display: 'block' }}
                />
                <img
                  src={`${PROFILE_REPO_RAW}/info-card.svg`}
                  alt="Avanish info card"
                  style={{ width: '460px', maxWidth: '100%', display: 'block' }}
                />
              </div>

              {/* contributions.sh */}
              <p style={{
                fontFamily: 'monospace',
                fontSize: '0.78rem',
                color: 'rgba(255,255,255,0.35)',
                marginBottom: '16px',
              }}>
                <span style={{ color: '#00f0ff' }}>avanish@github</span>
                <span style={{ color: 'rgba(255,255,255,0.2)' }}> ~ $ </span>
                ./contributions.sh
              </p>

              <div style={{ overflowX: 'auto' }}>
                <img
                  src={`${PROFILE_REPO_RAW}/contrib-heatmap.svg?date=${TODAY}`}
                  alt="Contribution heatmap"
                  style={{ width: '100%', maxWidth: '860px', display: 'block', margin: '0 auto' }}
                />
              </div>

              {/* links.sh */}
              <p style={{
                fontFamily: 'monospace',
                fontSize: '0.78rem',
                color: 'rgba(255,255,255,0.35)',
                marginTop: '24px',
                marginBottom: '10px',
              }}>
                <span style={{ color: '#00f0ff' }}>avanish@github</span>
                <span style={{ color: 'rgba(255,255,255,0.2)' }}> ~ $ </span>
                ./links.sh
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {[
                  { label: 'GitHub', url: 'https://github.com/avanishkasar' },
                  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/avanishkasar' },
                  { label: 'Portfolio', url: 'https://avanish.tech' },
                  { label: 'Linktree', url: 'https://linktr.ee/Avanish_Kasar' },
                ].map(link => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.75rem',
                      color: '#00f0ff',
                      textDecoration: 'none',
                      padding: '4px 12px',
                      border: '1px solid rgba(0,240,255,0.2)',
                      borderRadius: '4px',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(0,240,255,0.1)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }}
                  >
                    [{link.label}]
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Space shooter calendar */}
        {tab === 'calendar' && (
          <div className="w-full flex justify-center reveal-text border border-white/5 bg-[#0a0a0a] rounded-xl py-12 overflow-hidden shadow-[inset_0_0_100px_rgba(0,240,255,0.02)]">
            <GithubCalendar
              username="avanishkasar"
              cellSize={16}
              cellGap={4}
            />
          </div>
        )}
      </div>
    </section>
  );
}
