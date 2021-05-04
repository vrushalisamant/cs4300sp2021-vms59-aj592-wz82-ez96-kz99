import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export default function QuoteCard(props) {
  const [liked, setLike] = useState(false);

  const infoIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      fill="gray"
      class="bi bi-info-circle"
      viewBox="0 0 16 16"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
    </svg>
  );

  const likeButton = liked ? (
    <Col>
      <Row>
        <button className="like-button" onClick={() => setLike(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="red"
            className="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
        </button>
      </Row>{" "}
      <Row>
        <p style={{ "font-size": "12px", "margin-left": "0.2vh" }}>
          {props.likes + 1}
        </p>
      </Row>
    </Col>
  ) : (
    <Col>
      <Row>
        <button className="like-button" onClick={() => setLike(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="red"
            className="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </button>
      </Row>
      <Row>
        <p style={{ "font-size": "12px", "margin-left": "0.2vh" }}>
          {props.likes ? props.likes : 0}
        </p>
      </Row>
    </Col>
  );

  const tags = [];
  const categories_list = props.categories;
  for (var i = 0; i < categories_list.length; i++) {
    tags.push(
      <Badge className="mr-1" variant="info" key={i}>
        {categories_list[i]}
      </Badge>
    );
  }

  return (
    <Card className="quote-card m-4">
      <Card.Body>
        <Container>
          <Row>
            <Col xs={10}>
              <blockquote className="blockquote m-2">
                <p>
                  {'"'} {props.quote} {'"'}
                </p>
                <footer className="blockquote-footer">{props.author}</footer>
              </blockquote>
              {tags}
            </Col>
            <Col className="mt-4" xs={1}>
              {/* {likeButton} */}
              <Row>
                <OverlayTrigger
                  trigger="hover"
                  key={props.idx}
                  placement={"right"}
                  overlay={
                    <Popover id={`popover-positioned-${props.idx}`}>
                      <Popover.Title as="h3">
                        How is the score calculated?
                      </Popover.Title>
                      <Popover.Content>
                        <strong>As of prototype 2,</strong> the score is the
                        similarity score of the free text input compared to the
                        quotes, yielded by our Latent Semantic Indexing (LSI)
                        model.
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <p style={{ "font-size": "12px", "margin-left": "0.2vh" }}>
                    {"Score: " + props.score.toFixed(2)} {infoIcon}
                  </p>
                </OverlayTrigger>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}
