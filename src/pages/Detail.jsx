import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Hashids from "hashids";
import listPortfolio from "../data/portfolio.json";
import { Container, Row, Col, Card } from "react-bootstrap";
const DetailPage = () => {
  const params = useParams();
  const hashids = new Hashids("eyJhbGciOiJ", 8);
  const id = hashids.decode(params.id)[0];
  const result = listPortfolio.results.filter((obj) => obj.id == id);
  const [prevNext, setPrevNext] = useState([]);
  useEffect(() => {
    const arr = listPortfolio.results;
    const getPrevAndNext = (currentId) => {
      const index = arr.findIndex((key) => key.id == currentId);
      if (index === -1) {
        return undefined;
      }
      const prev = arr[index - 1];
      const next = arr[index + 1];
      setPrevNext([prev, next]);
    };
    getPrevAndNext(id);
  }, [id]);
  return (
    <Container className="mt-5">
      <Col className="mx-auto" lg={8}>
        <h4 className="fw-bold mb-3 text-center">
          {result[0].application_name}
        </h4>
        <p>Deskripsi : {result[0].description}</p>
        <p>Fitur : {result[0].description}</p>
        {result[0].languange.map((item) => {
          return (
            <div className="custom-badge" key={item}>
              {item}
            </div>
          );
        })}
        <Row className="mt-5">
          {prevNext.length != 0 ? (
            prevNext[0] != null ? (
              <Col lg={6}>
                <Card
                  className="custom-bg h-100 text-decoration-none"
                  style={{ color: "inherit" }}
                  as={Link}
                  to={`/detail/${hashids.encode(prevNext[0].id)}`}
                >
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        />
                      </svg>
                      {prevNext[0].application_name}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ) : (
              ""
            )
          ) : (
            ""
          )}

          {prevNext.length != 0 ? (
            prevNext[1] != null ? (
              <Col lg={6}>
                <Card
                  className="custom-bg h-100 text-decoration-none"
                  style={{ color: "inherit" }}
                  as={Link}
                  to={`/detail/${hashids.encode(prevNext[1].id)}`}
                >
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                      
                    {prevNext[1].application_name}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </Row>
      </Col>
    </Container>
  );
};

export default DetailPage;
