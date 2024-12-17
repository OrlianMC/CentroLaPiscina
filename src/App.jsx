import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home.jsx'; // Asegúrate de tener estos componentes creados
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
// import Sidebar from "./components/Sidebar.jsx";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </ThemeProvider>
  );
}

function MainApp() {
  return (
    <div className="app">
      <div className="flexProperty">
          <Sidebar />
        <div className="appContainer">
          {/* <Navbar /> */}
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;