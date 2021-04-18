import "./App.css";
import React from "react";
import QuoteCard from "./Components/QuoteCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Output() {
  const data = [
    {
      quote: "this is a quote",
      author: "david gries",
      categories: ["philosophy", "life"],
      likes: 4,
    },
    {
      quote: "this is a quote2",
      author: "bobby kleinberg",
      categories: ["love", "life", "friend"],
      likes: 4,
    },
  ];
  const cards = [];

  for (var i = 0; i < data.length; i++) {
    cards.push(
      <QuoteCard
        quote={data[i].quote}
        author={data[i].author}
        categories={data[i].categories}
        likes={data[i].likes}
      />
    );
  }

  return (
    <Container>
      <Row className="m-5">
        <Col>{cards} </Col>
      </Row>
    </Container>
  );
}

export default Output;
