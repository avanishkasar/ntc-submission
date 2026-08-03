import React, { useState } from 'react';
import GithubCalendar from './ui/retro-space-shooter-git-hub-calendar';

// SVGs are bundled locally in /assets/ — served by Vite, no CORS issues
// <object> tags are used instead of <img> so SMIL animations play correctly
// contrib-heatmap.svg can be updated periodically by running the python script

export default function GithubSection() {
  const [tab, setTab] = useState<'calendar' | 'terminal'>('terminal');

  const tabBtn = (id: 'terminal' | 'calendar', label: string) => (
    <button
      onClick={() => setTab(id)}
      style={{
        padding: '6px 18px',
        borderRadius: '100px',
        fontSize: '0.72rem',
        fontFamily: 'monospace',
        letterSpacing: '0.08em',
        textTransform: 'uppercase' as const,
        border: tab === id ? '1px solid #00f0ff' : '1px solid rgba(255,255,255,0.12)',
        background: tab === id ? 'rgba(0,240,255,0.08)' : 'transparent',
        color: tab === id ? '#00f0ff' : 'rgba(255,255,255,0.4)',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
    >
      {label}
    </button>
  );

  return (
    <section className="py-16 md:py-32 w-full bg-black relative">
      <div className="container">
        <div className="section-label reveal-text mb-8">
          <span className="section-number">03</span>
          <span className="section-label-text">GITHUB CONTRIBUTIONS</span>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 mb-8 reveal-text">
          {tabBtn('terminal', '$ terminal view')}
          {tabBtn('calendar', '$ space shooter')}
        </div>

        {/* ── Terminal view ── */}
        {tab === 'terminal' && (
          <div
            className="reveal-text w-full rounded-2xl overflow-hidden"
            style={{
              background: '#0a0a0a',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: 'inset 0 0 80px rgba(0,240,255,0.02)',
            }}
          >
            {/* macOS-style chrome bar */}
            <div style={{
              padding: '10px 16px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
              <span style={{ marginLeft: 8, fontFamily: 'monospace', fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}>
                avanish@github — profile
              </span>
            </div>

            <div style={{ padding: '24px 20px', overflowX: 'auto' }}>

              {/* whoami */}
              <p style={{ fontFamily: 'monospace', fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', marginBottom: '20px' }}>
                <span style={{ color: '#00f0ff' }}>avanish@github</span>
                <span style={{ color: 'rgba(255,255,255,0.2)' }}> ~ $ </span>
                whoami
              </p>

              {/* ASCII portrait + info card */}
              <div style={{
                display: 'flex',
                gap: '24px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginBottom: '32px',
                alignItems: 'flex-start',
              }}>
                {/* ASCII portrait — <object> plays SMIL animations, <img> does not */}
                <object
                  data="/assets/avi-ascii.svg"
                  type="image/svg+xml"
                  style={{
                    width: '340px',
                    maxWidth: '100%',
                    height: '400px',
                    display: 'block',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    flexShrink: 0,
                  }}
                  aria-label="Avanish Kasar ASCII portrait"
                >
                  {/* fallback if object fails */}
                  <img src="/assets/avatar.png" alt="Avanish Kasar" style={{ width: '100%', borderRadius: 8 }} />
                </object>

                {/* Info card */}
                <object
                  data="/assets/info-card.svg"
                  type="image/svg+xml"
                  style={{
                    width: '440px',
                    maxWidth: '100%',
                    height: '400px',
                    display: 'block',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    flexShrink: 0,
                  }}
                  aria-label="Avanish Kasar info card"
                >
                  <img src="/assets/avatar.png" alt="Info card" style={{ width: '100%', borderRadius: 8 }} />
                </object>
              </div>

              {/* contributions.sh */}
              <p style={{ fontFamily: 'monospace', fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', marginBottom: '16px' }}>
                <span style={{ color: '#00f0ff' }}>avanish@github</span>
                <span style={{ color: 'rgba(255,255,255,0.2)' }}> ~ $ </span>
                ./contributions.sh
              </p>

              <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
                <object
                  data="/assets/contrib-heatmap.svg"
                  type="image/svg+xml"
                  style={{ width: '100%', maxWidth: '860px', height: '160px', display: 'block', margin: '0 auto' }}
                  aria-label="GitHub contribution heatmap"
                >
                  <span style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace', fontSize: '0.75rem' }}>
                    Heatmap loading...
                  </span>
                </object>
              </div>

              {/* links.sh */}
              <p style={{ fontFamily: 'monospace', fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', marginBottom: '12px' }}>
                <span style={{ color: '#00f0ff' }}>avanish@github</span>
                <span style={{ color: 'rgba(255,255,255,0.2)' }}> ~ $ </span>
                ./links.sh
              </p>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {[
                  { label: 'GitHub', url: 'https://github.com/avanishkasar' },
                  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/avanishkasar' },
                  { label: 'Portfolio', url: 'https://avanish.tech' },
                  { label: 'Linktree', url: 'https://linktr.ee/Avanish_Kasar' },
                  { label: 'Email', url: 'mailto:avanishkasar57@gmail.com' },
                ].map(link => (
                  <a
                    key={link.label}
                    href={link.url}
                    target={link.url.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.72rem',
                      color: '#00f0ff',
                      textDecoration: 'none',
                      padding: '4px 12px',
                      border: '1px solid rgba(0,240,255,0.2)',
                      borderRadius: '4px',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(0,240,255,0.1)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
                  >
                    [{link.label}]
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Space shooter calendar ── */}
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
