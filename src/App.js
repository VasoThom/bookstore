import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import BookProvider from "./context/BookContext";
import Home from "./views/Home";
import Product from "./views/Product";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookProvider>
          <BrowserRouter>
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books/:id" element={<Product />} />
            </Routes>
          </BrowserRouter>
        </BookProvider>
      </header>
    </div>
  );
}

export default App;
