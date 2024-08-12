import Link from 'next/link';

export default function About() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>About Page</h1>
      <p>This page is coming soon!</p>
      <Link href="/" passHref>
        <button style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
          Go to Home
        </button>
      </Link>
    </div>
  );
}
