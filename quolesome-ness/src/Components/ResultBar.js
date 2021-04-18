import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ResultBar(props) {
  return (
    <Container style={{ width: "70%" }}>
      <Row>
        <Col xs={10}>
          <Row>
            <Col>
              <h3>Your Search:</h3>
            </Col>
            <Col>{props.searchInfo.text}</Col>
          </Row>
          <Row></Row>
        </Col>

        <Col xs={2}>
          <p style={{ fontSize: "3vw" }}>{props.searchInfo.emoji} </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ResultBar;
