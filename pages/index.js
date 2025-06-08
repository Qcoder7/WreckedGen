export default function Home() {
  return (
    <div style={{
      height: '100vh',
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/background.jpg')",
      backgroundColor: '#000',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center'
    }}>
      <p>Home Page — Coming Soon</p>
    </div>
  );
}
