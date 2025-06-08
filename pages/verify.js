import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Verify() {
  const router = useRouter();
  const { token } = router.query;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [link, setLink] = useState('');

useEffect(() => {
  if (!token) return;

  async function fetchLink() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/verify?token=${encodeURIComponent(token)}`, {
        headers: {
          'Authorization': 'A7b_C9d-E3f_G1hJ'
        }
      });
        const data = await res.json();

        if (!res.ok) {
          setError(data.error || 'Unknown error');
          setLoading(false);
          return;
        }

        setLink(data.shortLink); // updated to use Cuty.io response
        setLoading(false);
      } catch (e) {
        setError('Failed to fetch verification link.');
        setLoading(false);
      }
    }

    fetchLink();
  }, [token]);

  return (
      <div style={{
        position: 'fixed',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/background.jpg')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '0 20px'
      }}>

      {loading && <h2>Please Wait While We Verify You And Generate Your Link</h2>}
      {error && <h2>{error}</h2>}
      {link && (
        <>
          <h2>Click The Link Below</h2>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: 20,
              padding: '15px 30px',
              backgroundColor: 'white',
              color: '#1f2f98',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              borderRadius: 8,
              textDecoration: 'none',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
          >
            Proceed
          </a>
        </>
      )}
    </div>
  );
}
