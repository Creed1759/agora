import Link from 'next/link'

export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
      <div style={{ textAlign: 'center', maxWidth: 720 }}>
        <div style={{ width: 220, height: 220, margin: '0 auto', background: '#f4f4f4', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="4" width="22" height="16" rx="2" stroke="#111" strokeWidth="1.5" fill="white" />
            <path d="M7 9h10M7 13h6" stroke="#111" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 style={{ marginTop: 28, fontSize: 32, letterSpacing: '-0.02em' }}>404 — Page not found</h1>
        <p style={{ color: '#555', marginTop: 8 }}>We couldn't find the page you're looking for.</p>

        <div style={{ marginTop: 20 }}>
          <Link href="/">
            <a style={{ display: 'inline-block', background: '#111', color: '#fff', padding: '10px 16px', borderRadius: 6, textDecoration: 'none' }}>
              Back to home
            </a>
          </Link>
        </div>
      </div>
    </main>
  )
}
