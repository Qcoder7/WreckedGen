export default function Home() {
  return (
    <div style={{
      height: '100vh', // this line is crucial
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.95)), url('/background.jpg')",
      backgroundColor: 'black',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: 0,
      padding: 0,
    }}>
      <p>Home Page — Coming Soon</p>
    </div>
  );
}
