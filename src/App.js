import React, { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Header from "./components/templates/Navbar";
import Footer from "./components/templates/Footer";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import BoxRight from "./components/templates/BoxRight";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);
  useEffect(() => {
    const navHeader = document.getElementById("nav-header");
    const handleScroll = (event) => {
      if (typeof navHeader !== null && navHeader !== "undefined") {
        window.scrollY > 50
          ? navHeader.classList.add("header-bg")
          : navHeader.classList.remove("header-bg");
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  return (
    <>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <Header />
        <BoxRight />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
