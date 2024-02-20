import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homes from "./components/Home/Homes";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loadUser } from "./actions/user";
import AdminPanel from "./components/Admin/AdminPanel";
import Youtube from "./components/Admin/Youtube";
import Projects from "../../frontend/src/components/Project/Projects.jsx";
import Project from "./components/Admin/Project";
import Loader from "../src/components/Loader/Loader.jsx";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import "./App.css";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import MouseIcon from "./components/MouseIcon/MouseIcon.jsx";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [mousePosition, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollButton(scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleM);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    dispatch(getUser());
    dispatch(loadUser());
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleM);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dispatch]);

  const handleM = (event) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
  };
  const handleMouseEnter = () => {
    setIsVisible(true);
  };
  const handleMouseLeave = () => {
    setIsVisible(false);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`scroll-to-top ${showScrollButton ? "visible" : "hidden"}`}
        onClick={scrollToTop}
      >
        <KeyboardArrowUpOutlinedIcon />
      </div>

      <Router>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Routes>
              <Route
                path="/"
                element={
                  <Homes
                    timelines={user.timeline}
                    youtubes={user.youtube}
                    skills={user.skills}
                  />
                }
              />
              <Route path="/about" element={<About about={user.about} />} />
              <Route
                path="/projects"
                element={<Projects projects={user.projects} />}
              />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/account"
                element={isAuthenticated ? <AdminPanel /> : <Login />}
              />
              <Route
                path="/admin/timeline"
                element={isAuthenticated ? <Testimonial /> : <Login />}
              />
              <Route
                path="/admin/youtube"
                element={isAuthenticated ? <Youtube /> : <Login />}
              />
              <Route
                path="/admin/project"
                element={isAuthenticated ? <Project /> : <Login />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            {isVisible ? <MouseIcon mousePosition={mousePosition} /> : null}
          </>
        )}
      </Router>
    </>
  );
}

export default App;
