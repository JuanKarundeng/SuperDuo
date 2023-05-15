import { Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Beranda />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
