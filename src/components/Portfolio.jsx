import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import listPortfolio from "../data/portfolio.json";
import truncateDescription from "../utils/truncateUtils";
import Hashids from "hashids";
const PortfolioPages = () => {
const hashids = new Hashids("eyJhbGciOiJ", 8);

  return (
    <>
      <Container className="mt-5" id="work">
        <h4 className="fw-bold mb-5">Some things I built</h4>
        <Row>
          {listPortfolio.results.map((port) => {
            return (
              <Col lg={4} className="mb-4" key={port.id}>
                <Card
                  className="custom-bg custom-rounded p-2 h-100 text-decoration-none" style={{color:"inherit"}}
                  as={Link} to={`/detail/${hashids.encode(port.id)}`}
                >
                  <Card.Body>
                    <h5>{port.application_name}</h5>
                    <p>{truncateDescription(port.description, 80)}</p>
                  </Card.Body>
                  <Card.Footer>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="float-end"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                  </Card.Footer>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  );
};

export default PortfolioPages;
