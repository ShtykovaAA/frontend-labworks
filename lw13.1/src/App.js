import {Routes, Route} from "react-router-dom";
import './App.css';
import WelcomePage from "./pages/WelcomePage";
import TestPage from "./pages/TestPage";
import Header from "./components/layout/Header";
import MenuNavigation from "./pages/MenuNavigation";
import Lab10Main from "./components/Lab10/Lab10Main"
import ResumeCreator from "./components/Lab10/ResumeCreator"

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" exact element={<WelcomePage/>}/>
        <Route path="/test" element={<TestPage/>}/>
        <Route path="/menu" element={<MenuNavigation/>}/>
        <Route path="/time" element={<Lab10Main/>}/>
        <Route path="/resume" element={<ResumeCreator/>}/>
      </Routes>
    </div>
  );
}

export default App;
