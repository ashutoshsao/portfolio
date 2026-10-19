import { ImageResponse } from 'next/og'

export const alt = 'Ashutosh Sao — software engineer building real-time systems and AI agents'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const proofs = [
  ['~200k', 'orders/sec · Nebula'],
  ['181', 'restorable checkpoints · Orin'],
  ['27/28', 'notices routed right · Ardin'],
]

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#fcfcfa',
          color: '#1a1a1f',
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 5, color: '#8e8e96' }}>ASHUTOSH SAO</div>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 64, lineHeight: 1.15 }}>
          <span>I build real-time systems and AI agents —</span>
          <span style={{ color: '#2240c8', fontStyle: 'italic' }}>software that earns trust.</span>
        </div>
        <div style={{ display: 'flex', gap: 56 }}>
          {proofs.map(([value, label]) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 40, fontWeight: 600 }}>{value}</span>
              <span style={{ fontSize: 20, color: '#5f5f68' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  )
}
