import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function EnterUsername() {
  const router = useRouter();
  const { enctoken } = router.query;

  const [status, setStatus] = useState('loading');
  const [username, setUsername] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!enctoken) return;

    async function checkToken() {
      try {
        const res = await fetch(`/api/check-enctoken?enctoken=${encodeURIComponent(enctoken)}`);
        const data = await res.json();

        if (res.ok && data.valid) {
          setStatus('valid');
        } else {
          setStatus('invalid');
        }
      } catch {
        setStatus('error');
      }
    }

    checkToken();
  }, [enctoken]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    try {
      const res = await fetch('/api/send-discord', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, enctoken }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Failed to submit username.');
      }
    } catch {
      alert('Something went wrong.');
    }
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(90deg, #1ca7ec, #1f2f98)',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '0 20px'
    }}>
      {status === 'loading' && <h2>Checking Token...</h2>}
      {status === 'invalid' && <h2>Invalid or Expired Token</h2>}
      {status === 'error' && <h2>Server Error</h2>}
      {status === 'valid' && !submitted && (
        <form onSubmit={handleSubmit}>
          <h2>Please Enter your Discord Username</h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '8px',
              border: 'none',
              marginTop: '10px',
              fontSize: '16px',
              width: '250px'
            }}
          />
          <br />
          <button type="submit" style={{
            marginTop: '15px',
            padding: '10px 20px',
            backgroundColor: 'white',
            color: '#1f2f98',
            border: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
            borderRadius: 8,
            cursor: 'pointer',
          }}>
            Submit
          </button>
        </form>
      )}
      {submitted && <h2>Thanks for verifying</h2>}
    </div>
  );
}
