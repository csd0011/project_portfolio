import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
      <footer style={{textAlign:'center', padding: '24px 0'}}>{new Date().getFullYear()} · Software Engineer Portfolio</footer>
    </div>
  );
}
