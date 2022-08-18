import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container id="about">
        <h4 className="fw-bold mb-5">This is me.</h4>
        <p>
              Hello! My name is Muhammad Arifin. I enjoy designing and
              developing web-based applications. My interest in
              web development started in 2016 - 2017 when i decided
              to try switching from desktop to web. Turns out playing HTML,
              CSS, Javascript, PHP and My SQL make me more confident
              stare at the world.
            </p>
            <p>
              At that time I was trusted to help work on the first project
              web-based with recruitment content by one of the institutions
              country. With a desire to continue to learn and develop as well
              surrounded by great people then the project goes well
              fluent.
            </p>
            <p>
              I have been designing and developing applications for 6 years starting from recruitment, assessment,
              selection, online exam, dashboard, human resources, sales,
              psychological test kit. And the last 2 years I'm very interested
              learn about React JS, Node JS, Firebase and banking.
            </p>
        {/* <Row>
          <Col lg={8}>
           
          </Col>
          <Col lg={4} className="d-flex align-items-center">
            <img src="gatsbyjs.avif" alt="from gatsbyjs" className="img-fluid rounded" />
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default About;
