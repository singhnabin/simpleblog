
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { loream } from "../../../json";
import "./Learn.css";

function Learn() {
  const today = new Date();
  const date =
    parseInt(today.getMonth() + 1) +
    "-" +
    today.getDate() +
    "-" +
    today.getFullYear();
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  const blogs = ["1", "2", "3", "4", "5", "6", "7"];
  return (
    <div className="learn">
      {/* <Container> */}
      <Row>
        <Col>
          <div className="learn__blogs">
            <h1>Our Blogs</h1>
          </div>
          {blogs.map(blog => {
            return (
              <Card bg="dark" className="learn__card" key={blog}>
                <Card.Header className="learn__card__header">
                  Technical Analysis Strategies for Beginners
                </Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <div className="learn__carddetails">
                      <Row>
                        <Col xm={12} sm={12} md={12} lg={6} xl={8}>
                          <div className="learn__card__text">
                            <p>{truncate(loream, 800)}</p>
                            <Button variant="outline-info">Read More</Button>
                          </div>
                        </Col>
                        <Col xm={12} sm={12} md={12} lg={6} xl={4}>
                          <Card.Img src="https://i.ytimg.com/vi/nw8xzTicPRo/maxresdefault.jpg" />
                        </Col>
                      </Row>
                    </div>

                    <footer className="blockquote-footer">
                      <cite title="Source Title">Published Date: {date}</cite>
                      {", "}
                      <cite title="Source Title">Rabin Sangraula</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
      </Row>
      {/* </Container> */}
    </div>
  );
}

export default Learn;
