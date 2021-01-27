import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav" role="navigation" aria-label="main navigation">
          <img src="/logo.png" />

        </nav>
      </header>
      <style jsx>{`
        header {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #feea34;

          display: flex;
          justify-content: flex-start;
        }

        img {
          margin-left: 40px;
          height: 60px;
        }

      `}</style>
    </>
  )
}