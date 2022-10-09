
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Products from './components/Products';

function App() {
  return (
    <main className="App">
      <header className="header">
        <Header />
      </header>
      <section>
        <Products />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concepts/getformdata" element={<GetFormData />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/login" element={<Login />} />
          <Route path="/concepts" element={<Concepts />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes> */}
      </section>
    </main>
  );
}

export default App;
