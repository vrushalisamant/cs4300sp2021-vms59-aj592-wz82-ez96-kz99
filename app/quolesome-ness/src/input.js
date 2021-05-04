import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/iRow";
import Col from "react-bootstrap/Col";
import TagSelect from "./Components/TagSelect.js";
import { isDOMComponent } from "react-dom/test-utils";

function Input(props) {
  const [selected, setSelected] = useState([]);
  const [text, setText] = useState("");
  const [emoji, setEmoji] = useState("");
  const [wholesome, setWholesome] = useState("");

  return (
    <Container className="input">
      <Form>
        <Row className="tags">
          <Col>
            <TagSelect selected={selected} setSelected={setSelected} />
          </Col>
        </Row>

        <Row className="feeling-moodbar">
          <Row className="feeling-moodbar">
            <Col className="feeling">
              <Form.Group controlId="feelingDescription">
                <Form.Label className="text">
                  What's on your mind?
                </Form.Label>
                {/* TODO: Extract feeling input */}
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="feelingInput"
                  value={text}
                  placeholder="School is stressful..."
                  onChange={({ target: { value } }) => {
                    setText(value);
                  }}
                />
                <Form.Text className="text-muted">
                  Feeling troubled by anything? Tell us about it :)
                </Form.Text>
              </Form.Group>
            </Col>

            <Col className="moodbar">
              <Form.Group controlId="moodRange">
                <Form.Label className="text">
                  {'Indicate your emotional state:  ' + emoji}
                </Form.Label>
              </Form.Group>
              <Row>
                <Col>
                  <p className="emoji" onClick={() => {
                    setEmoji("😐");
                    setWholesome("0.2");
                  }}>
                    😐
                  </p>
                </Col>
                <Col>
                  <p className="emoji" onClick={() => {
                    setEmoji("😢");
                    setWholesome("0.4");
                  }}>
                    😢
                  </p>
                </Col>
                <Col>
                  <p className="emoji" onClick={() => {
                    setEmoji("😰");
                    setWholesome("0.6");
                  }}>
                    😰
                  </p>
                </Col>
                <Col>
                  <p className="emoji" onClick={() => {
                    setEmoji("😭");
                    setWholesome("0.8");
                  }}>
                    😭
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Row>

        <Row>
          <Col>
            <Button
              variant="info"
              className="button"
              name="submit"
              onClick={(e) =>
                props.handleSubmit({
                  text: text,
                  tags: selected.map((item) => {
                    return item.value;
                  }),
                  emoji: emoji,
                })
              }
            >
              Find Your Quotes
            </Button>{" "}
          </Col>
        </Row>
      </Form>
    </Container >
  );
}
export default Input;