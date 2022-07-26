import "./assets/styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useState } from "react";
import { DarkModeContext } from "./contexts/DarkModeProvider";
import { ModalContext } from "./contexts/ModalProvider";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal";
import InputForm from "./components/InputForm/InputForm";
import Post from "./components/Post/Post";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";

function App() {
  const { isDarkMode } = useContext(DarkModeContext);
  const { isModalOpen } = useContext(ModalContext);

  const [isFormInput, setIsFormInput] = useState(false);
  const [isFullPost, setIsFullPost] = useState(false);

  return (
    <Router>
      <Navbar
        setIsFullPost={setIsFullPost}
        setIsFormInput={setIsFormInput}
        styleHeader={isDarkMode ? "dark-theme-nav" : "light-theme-nav"}
      />
      <main className={isDarkMode ? "dark-theme-main" : "light-theme-main"}>
        {isModalOpen && (
          <Modal styleModal={isModalOpen ? "fade-out" : "fade-in"}>
            {isFormInput && <InputForm />}
            {isFullPost && <Post />}
          </Modal>
        )}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setIsFullPost={setIsFullPost}
                setIsFormInput={setIsFormInput}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer
        styleFooter={isDarkMode ? "dark-theme-main" : "light-theme-main"}
      />
    </Router>
  );
}

export default App;
