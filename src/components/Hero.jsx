import React from "react";
import { Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <Container className="vh-100 d-flex align-items-center">
        <div>
          <p className="font-monospace ms-1 mb-0">Hi there my name is,</p>
          <h1 className="fw-bold display-2">Mukhammad <span className="gradient-text">Arifin</span>.</h1>
          <h1 className="fw-bold display-4">
            Be something useful for the surrounding.
          </h1>
          <p className="ms-1">
          I'm a <span className="gradient-text">full stack developer</span> who specializes in building and designing great digital experiences. Currently I focus on building web applications in the banking world.</p>
          <Button size="lg" className="font-monospace" variant="outline-primary">
            Continue
          </Button>
          </div>
      </Container>
    </>
  );
};

export default Hero;