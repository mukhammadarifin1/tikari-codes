import React from "react";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <>
      <footer>
        <Container className="text-center mt-5">
          <p className="small font-monospace">Designed & Built by <span className="gradient-text">Mukhammad Arifin</span></p>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
