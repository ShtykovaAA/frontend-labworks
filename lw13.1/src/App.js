import { Routes, Route } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import TestPage from "./pages/TestPage";
import Header from "./components/layout/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<WelcomePage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </div>
  );
}

export default App;
