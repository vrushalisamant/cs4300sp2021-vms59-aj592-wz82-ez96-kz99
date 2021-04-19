import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TagSelect from "./Components/TagSelect.js";

function Input(props) {
  const [selected, setSelected] = useState([]);
  return (
    <Container className="input">
      <Form>

        <Row className="tags">
          <Col>
            {/* TODO: Extract tags selected */}
            <TagSelect selected = {selected} setSelected = {setSelected}/>
          </Col>
        </Row>

        <Row className="feeling-moodbar">

          <Row className="feeling-moodbar">
            <Col className="feeling">
              <Form.Group controlId="feelingDescription">
                <Form.Label className="text">
                  How are you feeling today?
                </Form.Label>
                {/* TODO: Extract feeling input */}
                <Form.Control as="textarea" rows={3} name="feelingInput" />
                <Form.Text className="text-muted">
                  Are you feeling lonely? Troubled by anything? Tell us about it
                  :)
                </Form.Text>
              </Form.Group>
            </Col>

            <Col className="moodbar">
              <Form.Group controlId="moodRange">
                <Form.Label className="text">
                  Indicate your emotional state:
                </Form.Label>
                {/* TODO: Extract mood input */}
                <Form.Control
                  type="range"
                  className="emoji-range"
                  name="moodInput"
                />
              </Form.Group>
              <p className="emoji">😌 🙂 😐 🙁 😢 😰 😭</p>
            </Col>
          </Row>

        <Row>
          <Col>
            {/* TODO: Direct to output page after submit */}
            <Button variant="info" className="button" name="submit" onClick = {(e) => props.handleSubmit({"text": "N/A", "tags": selected.map((item)=>{return item.value}), "emoji":"😢"})}>Find Your Quotes</Button>{' '}
          </Col>
        </Row>
      </Row>
      </Form>
    </Container>
  );
}

export default Input;
