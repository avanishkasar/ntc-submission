import React, { MouseEvent, useEffect, useRef, useState } from "react";

interface CertBadgeProps {
  name: string;
  issuer: string;
  date: string;
  /** Accent colour for the shimmer overlay */
  accentColor: string;
  /** Background gradient colours [from, to] */
  bgColors: [string, string];
  /** Path to the certificate image (opened in lightbox on click) */
  certImage: string;
  /** Short icon text or emoji shown on the badge */
  icon?: string;
}

const identityMatrix =
  "1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1";

const maxR = 0.22;
const minR = -0.22;
const maxS = 1;
const minS = 0.97;

export const CertBadge = ({
  name, issuer, date, accentColor, bgColors, certImage, icon = "✦",
}: CertBadgeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [matrix, setMatrix]     = useState(identityMatrix);
  const [curMat, setCurMat]     = useState(identityMatrix);
  const [overlayRot, setOverlayRot] = useState(0);
  const [disableAnim, setDisableAnim] = useState(false);
  const [disableIO, setDisableIO]     = useState(true);
  const [ready, setReady]             = useState(false);
  const [lightbox, setLightbox]       = useState(false);
  const enterT = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leave1 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leave2 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leave3 = useRef<ReturnType<typeof setTimeout> | null>(null);

  const rect = () => ref.current?.getBoundingClientRect() ?? { left:0, right:0, top:0, bottom:0 };

  const computeMatrix = (cx: number, cy: number) => {
    const { left, right, top, bottom } = rect();
    const xC = (left + right) / 2, yC = (top + bottom) / 2;
    const sx = maxS - (maxS - minS) * Math.abs(xC - cx) / (xC - left);
    const sy = maxS - (maxS - minS) * Math.abs(yC - cy) / (yC - top);
    const sz = maxS - (maxS - minS) * (Math.abs(xC - cx) + Math.abs(yC - cy)) / (xC - left + yC - top);
    const x1 = 0.25 * ((yC - cy) / yC - (xC - cx) / xC);
    const x2 = maxR - (maxR - minR) * Math.abs(right - cx) / (right - left);
    const y2 = maxR - (maxR - minR) * (top - cy) / (top - bottom);
    const z0 = -(maxR - (maxR - minR) * Math.abs(right - cx) / (right - left));
    const z1 = 0.2 - (0.8) * (top - cy) / (top - bottom);
    return `${sx}, 0, ${z0}, 0, ${x1}, ${sy}, ${z1}, 0, ${x2}, ${y2}, ${sz}, 0, 0, 0, 0, 1`;
  };

  const oppositeOf = (m: string, cy: number, enter = false) => {
    const { top, bottom } = rect();
    const oy = bottom - cy + top;
    const w = enter ? 0.7 : 4, mul = enter ? -1 : 1;
    return m.split(", ").map((v, i) => {
      if ([2,4,8].includes(i))  return String(-parseFloat(v) * mul / w);
      if ([0,5,10].includes(i)) return "1";
      if (i === 6) return String(mul * (maxR - (maxR - minR) * (top - oy) / (top - bottom)) / w);
      if (i === 9) return String((maxR - (maxR - minR) * (top - oy) / (top - bottom)) / w);
      return v;
    }).join(", ");
  };

  const handleEnter = (e: MouseEvent) => {
    [leave1, leave2, leave3].forEach(r => r.current && clearTimeout(r.current));
    setDisableAnim(true);
    const { left, right, top, bottom } = rect();
    const xC = (left + right) / 2, yC = (top + bottom) / 2;
    setDisableIO(false);
    enterT.current = setTimeout(() => setDisableIO(true), 350);
    requestAnimationFrame(() => requestAnimationFrame(() =>
      setOverlayRot((Math.abs(xC - e.clientX) + Math.abs(yC - e.clientY)) / 1.5)
    ));
    const m = computeMatrix(e.clientX, e.clientY);
    setMatrix(oppositeOf(m, e.clientY, true));
    setReady(false);
    setTimeout(() => setReady(true), 200);
  };

  const handleMove = (e: MouseEvent) => {
    const { left, right, top, bottom } = rect();
    const xC = (left + right) / 2, yC = (top + bottom) / 2;
    setTimeout(() => setOverlayRot((Math.abs(xC - e.clientX) + Math.abs(yC - e.clientY)) / 1.5), 150);
    if (ready) setCurMat(computeMatrix(e.clientX, e.clientY));
  };

  const handleLeave = (e: MouseEvent) => {
    const opp = oppositeOf(matrix, e.clientY);
    if (enterT.current) clearTimeout(enterT.current);
    setCurMat(opp);
    setTimeout(() => setCurMat(identityMatrix), 200);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      setDisableIO(false);
      leave1.current = setTimeout(() => setOverlayRot(r => -r / 4), 150);
      leave2.current = setTimeout(() => setOverlayRot(0), 300);
      leave3.current = setTimeout(() => { setDisableAnim(false); setDisableIO(true); }, 500);
    }));
  };

  useEffect(() => { if (ready) setMatrix(curMat); }, [curMat, ready]);

  const overlayKFs = [...Array(6).keys()].map(i => `
    @keyframes cOv${i} {
      0%   { transform: rotate(${i * 12}deg); }
      50%  { transform: rotate(${(i + 1) * 12}deg); }
      100% { transform: rotate(${i * 12}deg); }
    }
  `).join("");

  const overlayColors = [
    accentColor,
    `hsl(220,90%,60%)`,
    `hsl(280,80%,65%)`,
    `hsl(180,70%,55%)`,
    "transparent",
    "white",
  ];

  return (
    <>
      {/* ── Badge ── */}
      <div
        ref={ref}
        className="cursor-pointer select-none"
        style={{ width: 280, display: "inline-block" }}
        onMouseEnter={handleEnter}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={() => setLightbox(true)}
        title="Click to view certificate"
      >
        <style>{overlayKFs}</style>
        <div style={{
          transform: `perspective(700px) matrix3d(${matrix})`,
          transformOrigin: "center center",
          transition: "transform 200ms ease-out",
        }}>
          {/* Card */}
          <div style={{
            width: 280, height: 72,
            borderRadius: 12,
            background: `linear-gradient(135deg, ${bgColors[0]}, ${bgColors[1]})`,
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "0 18px",
          }}>
            {/* Shimmer overlay layer (same mechanics as AwardBadge) */}
            <div style={{ position: "absolute", inset: 0, overflow: "hidden", mixBlendMode: "overlay", borderRadius: 12, zIndex: 1, pointerEvents: "none" }}>
              {overlayColors.map((col, i) => (
                <div key={i} style={{
                  position: "absolute", inset: 0,
                  background: col,
                  opacity: 0.45,
                  filter: "blur(14px)",
                  transform: `rotate(${overlayRot + i * 12}deg)`,
                  transformOrigin: "center",
                  transition: !disableIO ? "transform 200ms ease-out" : "none",
                  animation: disableAnim ? "none" : `cOv${i} 5s infinite`,
                  willChange: "transform",
                }} />
              ))}
            </div>

            {/* Icon */}
            <div style={{
              zIndex: 2,
              width: 38, height: 38, borderRadius: 8,
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 20, flexShrink: 0,
            }}>
              {icon}
            </div>

            {/* Text */}
            <div style={{ zIndex: 2, flex: 1, minWidth: 0 }}>
              <p style={{
                fontFamily: "monospace", fontSize: "0.62rem",
                color: "rgba(255,255,255,0.55)", margin: 0,
                textTransform: "uppercase", letterSpacing: "0.07em",
              }}>
                {issuer} · {date}
              </p>
              <p style={{
                fontWeight: 700, fontSize: "0.82rem",
                color: "#fff", margin: "3px 0 0",
                lineHeight: 1.25,
                overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
              }}>
                {name}
              </p>
            </div>

            {/* Click hint arrow */}
            <div style={{ zIndex: 2, opacity: 0.4, fontSize: 12, flexShrink: 0 }}>↗</div>
          </div>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          onClick={() => setLightbox(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.88)",
            backdropFilter: "blur(12px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "zoom-out",
            animation: "fadeIn 0.18s ease",
          }}
        >
          <style>{`@keyframes fadeIn{from{opacity:0;transform:scale(.96)}to{opacity:1;transform:scale(1)}}`}</style>
          <div onClick={e => e.stopPropagation()} style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh" }}>
            <img
              src={certImage}
              alt={name}
              style={{
                maxWidth: "90vw", maxHeight: "88vh",
                borderRadius: 12,
                boxShadow: "0 24px 80px rgba(0,0,0,0.8)",
                display: "block",
              }}
            />
            <button
              onClick={() => setLightbox(false)}
              style={{
                position: "absolute", top: -14, right: -14,
                width: 32, height: 32, borderRadius: "50%",
                background: "#111", border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff", fontSize: 16, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                lineHeight: 1,
              }}
              aria-label="Close"
            >×</button>
          </div>
        </div>
      )}
    </>
  );
};
