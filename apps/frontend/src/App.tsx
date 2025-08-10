// React import removed; not needed for JSX in Vite/TSX
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Button } from 'components';

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Button>Shared UI Button</Button>
    </>
  );
}

function About() {
  return <h1>About Page</h1>;
}

function NotFound() {
  return <h1>404 - Not Found</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
