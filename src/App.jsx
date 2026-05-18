import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Apps from "./pages/Apps";
import AppDetails from "./pages/AppDetails";
import Installation from "./pages/Installation";
import ErrorPage from "./pages/ErrorPage";
import MyInstallation from "./pages/MyInstallation";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/apps/:id" element={<AppDetails />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/my-installation" element={<MyInstallation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;