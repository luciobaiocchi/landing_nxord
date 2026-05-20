import React from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone, FaCamera, FaDatabase } from 'react-icons/fa';
import { useLang } from '../../context/LanguageContext';

// ─── ViewBox ──────────────────────────────────────────────────────────────────
const VW = 900;
const VH = 320;

// ─── Box dimensions ───────────────────────────────────────────────────────────
const LB_W = 160;
const LB_H = 64;
const LB_GAP = 11;
const TOTAL_LB_H = 4 * LB_H + 3 * LB_GAP; // 289
const LB_START_Y = (VH - TOTAL_LB_H) / 2;  // ~15.5

const CTR_W = 152;
const CTR_H = 96;
const CTR_X = (VW - CTR_W) / 2; // 374
const CTR_Y = (VH - CTR_H) / 2; // 112
const CTR_CY = CTR_Y + CTR_H / 2; // 160
const CTR_LX = CTR_X;
const CTR_RX = CTR_X + CTR_W;

const RB_W = 160;
const RB_H = 64;
const RB_X = VW - RB_W; // 740
const RB_Y = (VH - RB_H) / 2; // 128
const RB_CY = RB_Y + RB_H / 2; // 160

// ─── Bezier control-x midpoint ────────────────────────────────────────────────
const CP_X = (LB_W + CTR_LX) / 2; // midpoint between left-box right edge and center left edge

// ─── Translations ─────────────────────────────────────────────────────────────
const channelDefs = {
  it: [
    { Icon: FaWhatsapp, label: 'WhatsApp',   iconColor: '#25D366', bg: 'rgba(37,211,102,0.07)', border: 'rgba(37,211,102,0.28)' },
    { Icon: FaEnvelope, label: 'Email',       iconColor: '#0ea5e9', bg: 'rgba(14,165,233,0.07)', border: 'rgba(14,165,233,0.28)' },
    { Icon: FaPhone,    label: 'Audio',    iconColor: '#6366f1', bg: 'rgba(99,102,241,0.07)', border: 'rgba(99,102,241,0.28)' },
    { Icon: FaCamera,   label: 'Foto / PDF',  iconColor: '#f59e0b', bg: 'rgba(245,158,11,0.07)', border: 'rgba(245,158,11,0.28)' },
  ],
  en: [
    { Icon: FaWhatsapp, label: 'WhatsApp',    iconColor: '#25D366', bg: 'rgba(37,211,102,0.07)', border: 'rgba(37,211,102,0.28)' },
    { Icon: FaEnvelope, label: 'Email',        iconColor: '#0ea5e9', bg: 'rgba(14,165,233,0.07)', border: 'rgba(14,165,233,0.28)' },
    { Icon: FaPhone,    label: 'Audio',   iconColor: '#6366f1', bg: 'rgba(99,102,241,0.07)', border: 'rgba(99,102,241,0.28)' },
    { Icon: FaCamera,   label: 'Photo / PDF',  iconColor: '#f59e0b', bg: 'rgba(245,158,11,0.07)', border: 'rgba(245,158,11,0.28)' },
  ],
} as const;

const labels = {
  it: { centerSub: 'Interpreta · Normalizza', erp: ['ERP /', 'Gestionale'] },
  en: { centerSub: 'Process · Normalize',     erp: ['ERP /', 'System'] },
};

// ─── Component ────────────────────────────────────────────────────────────────
const OrderFlowDiagram: React.FC = () => {
  const { lang } = useLang();
  const channels = channelDefs[lang];
  const lbl = labels[lang];

  const leftBoxes = channels.map((ch, i) => ({
    ...ch,
    x: 0,
    y: LB_START_Y + i * (LB_H + LB_GAP),
    cy: LB_START_Y + i * (LB_H + LB_GAP) + LB_H / 2,
  }));

  return (
    <div style={{ width: '100%' }}>
      <svg
        viewBox={`0 0 ${VW} ${VH}`}
        style={{ width: '100%', height: 'auto', overflow: 'visible', display: 'block' }}
        aria-label={lang === 'it' ? "Flusso ordine dal canale di invio a NxOrd fino all'ERP" : "Order flow from input channel through NxOrd to ERP"}
      >
        <defs>
          <marker id="arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <polygon points="0 0, 7 3.5, 0 7" fill="#94a3b8" />
          </marker>
        </defs>

        {/* ── Paths: left boxes → center ── */}
        {leftBoxes.map((box, i) => (
          <path
            key={i}
            d={`M ${LB_W},${box.cy} C ${CP_X},${box.cy} ${CP_X},${CTR_CY} ${CTR_LX},${CTR_CY}`}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="1.5"
            markerEnd="url(#arr)"
          />
        ))}

        {/* ── Path: center → right box ── */}
        <path
          d={`M ${CTR_RX},${CTR_CY} L ${RB_X - 7},${RB_CY}`}
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="1.5"
          markerEnd="url(#arr)"
        />

        {/* ── Dots at connection points ── */}
        {leftBoxes.map((box, i) => (
          <circle key={i} cx={LB_W} cy={box.cy} r="3" fill="#94a3b8" />
        ))}
        <circle cx={CTR_LX} cy={CTR_CY} r="3.5" fill="#0ea5e9" />
        <circle cx={CTR_RX} cy={CTR_CY} r="3.5" fill="#0ea5e9" />

        {/* ── Left channel boxes ── */}
        {leftBoxes.map((box, i) => (
          <foreignObject key={i} x={box.x} y={box.y} width={LB_W} height={LB_H}>
            <div
              style={{
                width: `${LB_W}px`,
                height: `${LB_H}px`,
                backgroundColor: box.bg,
                border: `1.5px solid ${box.border}`,
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '0 14px',
                boxSizing: 'border-box',
              }}
            >
              <box.Icon size={19} color={box.iconColor} style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', fontFamily: 'Figtree, system-ui, sans-serif', lineHeight: 1.2 }}>
                {box.label}
              </span>
            </div>
          </foreignObject>
        ))}

        {/* ── Center: NxOrd box ── */}
        <foreignObject x={CTR_X} y={CTR_Y} width={CTR_W} height={CTR_H}>
          <div
            style={{
              width: `${CTR_W}px`,
              height: `${CTR_H}px`,
              backgroundColor: '#0f172a',
              border: '1.5px solid #334155',
              borderRadius: '14px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              boxSizing: 'border-box',
            }}
          >
            <img src="/logo-circle.png" alt="NxOrd" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#ffffff', fontFamily: 'Figtree, system-ui, sans-serif', letterSpacing: '-0.01em' }}>
              NxOrd AI
            </span>
            <span style={{ fontSize: '9px', fontWeight: 600, color: '#0ea5e9', fontFamily: 'Figtree, system-ui, sans-serif', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
              {lbl.centerSub}
            </span>
          </div>
        </foreignObject>

        {/* ── Right: ERP box ── */}
        <foreignObject x={RB_X} y={RB_Y} width={RB_W} height={RB_H}>
          <div
            style={{
              width: `${RB_W}px`,
              height: `${RB_H}px`,
              backgroundColor: 'rgba(14,165,233,0.07)',
              border: '1.5px solid rgba(14,165,233,0.3)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '0 14px',
              boxSizing: 'border-box',
            }}
          >
            <FaDatabase size={19} color="#0ea5e9" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', fontFamily: 'Figtree, system-ui, sans-serif', lineHeight: 1.3 }}>
              {lbl.erp[0]}<br />{lbl.erp[1]}
            </span>
          </div>
        </foreignObject>

      </svg>
    </div>
  );
};

export default OrderFlowDiagram;
