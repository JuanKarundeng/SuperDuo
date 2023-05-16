import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Beranda from "./pages/Beranda";
import Halaman2 from "./pages/halaman2";
import Preview from "./pages/Preview";
import Tautan from "./pages/Tautan";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Beranda />
            </>
          }
        />
        <Route
          path="/book/:id"
          element={
            <>
              <Halaman2 />
            </>
          }
        />
        <Route
          path="/preview"
          element={
            <>
              <Preview />
            </>
          }
        />

        <Route
          path="/tautan"
          element={
            <>
              <Tautan />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
