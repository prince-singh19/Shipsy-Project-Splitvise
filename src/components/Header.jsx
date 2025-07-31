export default function Header({ title }) {
  return (
    <header style={{ textAlign: 'center', marginBottom: '1rem', color: '#333' }}>
      <h1>{title}</h1>
    </header>
  );
}
