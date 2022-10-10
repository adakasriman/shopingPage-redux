
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Products from './components/Products';
import { ProductView } from './components/ProductView';
import { Newproduct } from './components/Newproduct';

function App() {
  return (
    <main className="App">
      <header className="header">
        <Header />
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/productview/:id" element={<ProductView />} />
          <Route path="/newproduct" element={ <Newproduct />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
