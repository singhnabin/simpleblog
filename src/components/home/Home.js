import { Avatar } from "@material-ui/core";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { loream } from "../../json";
import "./Home.css";
function Home() {
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
    <Container>
      <Row>
        <Col>
          <div className="blogs">
            <h1>Our Blogs</h1>
          </div>
          {blogs.map(blog => {
            return (
              <Card bg="dark" className="blogs__card" key={blog}>
                <Card.Header className="blogs__header">
                  React Js for beginners
                </Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <div className="blogs__carddetails">
                      <Row>
                        <Col xm={12} sm={12} md={12} lg={6} xl={8}>
                          <div className="blogs__text">
                            <p>{truncate(loream, 400)}</p>
                            <Button variant="outline-info">Read More</Button>
                          </div>
                        </Col>
                        <Col xm={12} sm={12} md={12} lg={6} xl={4}>
                          <Card.Img src="https://lh3.googleusercontent.com/proxy/P4iobrQ1ftWYY2tFc80qs9gwgeE5qAj2lzdtS8ZbPNkJb8zRousCSAAr96igdiJQvhdzUIPC1xWcjZ5mRLVdHKTyGYE_qywgM7BtJsKSBsa1nLVGZoxh6kovURPS" />
                        </Col>
                      </Row>
                    </div>

                    <footer className="blockquote-footer">
                      <cite title="Source Title">Published Date: {date}</cite>
                      {","}

                      <cite title="Source Title">
                        <div className="blog__footerbottom">
                          <Avatar
                            src={
                              "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/86257998_2014992985312926_4094412634177142784_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=W0G0r12feyUAX-dnIkS&_nc_ht=scontent-dfw5-2.xx&oh=57e772185d0a4f45cbc027dbfb2f338b&oe=609350FE"
                            }
                          />
                          Nabin Singh
                        </div>
                      </cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
