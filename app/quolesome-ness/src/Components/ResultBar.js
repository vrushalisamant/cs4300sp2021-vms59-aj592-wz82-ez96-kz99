import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

function ResultBar(props) {
  const tags = [];
  for (var i = 0; i < props.searchInfo.tags.length; i++) {
    tags.push(
      <Badge className="mr-1" variant="info" key={i}>
        {props.searchInfo.tags[i]}
      </Badge>
    );
  }
  return (
    <Container style={{ width: "80%" }}>
      <Row>
        <Col xs={4}>
          <h3>Your Search:</h3>
        </Col>
        <Col xs={6}>
          <Row>
            <Col>{props.searchInfo.text}</Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <h3>{tags}</h3>
            </Col>
          </Row>
        </Col>

        <Col xs={2}>
          <p style={{ fontSize: "3vw" }}>{props.searchInfo.emoji} </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ResultBar;
