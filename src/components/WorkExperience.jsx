import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import workExperience from "../data/experience.json";
import longDate from "../utils/dateUtils";

const ExperiencePages = () => {
  return (
    <Container className="mt-5" id="experience">
      <h4 className="fw-bold mb-5">Where have I worked and contributed?</h4>
      <Tab.Container id="left-tabs" defaultActiveKey="1">
        <Row>
          <Col sm={5} className="mb-3">
            <Nav variant="pills" className="flex-column">
              {workExperience.results.map((exp) => {
                return (
                  <Nav.Item key={exp.id}>
                    <Nav.Link eventKey={exp.id}>
                      {exp.employer}
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Col>
          <Col sm={7} className="mb-3">
            {workExperience.results.map((exp) => {
              return (
                <Tab.Content key={exp.id}>
                  <Tab.Pane eventKey={exp.id}>
                    <h5>
                      {exp.position}
                      <span className="font-color">@ {exp.employer}</span>
                    </h5>
                    <p className="font-monospace">
                      
                      {exp.start_date ? longDate(exp.start_date) : ''} - {exp.end_date ? longDate(exp.end_date) : 'Present'}
                    </p>
                    <ul className="list-custom">
                      {exp.job_desc.map((job) => {
                        return <li key={job}>{job}</li>
                      })
                      }
                    </ul>
                  </Tab.Pane>
                </Tab.Content>
              );
            })}
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default ExperiencePages;
