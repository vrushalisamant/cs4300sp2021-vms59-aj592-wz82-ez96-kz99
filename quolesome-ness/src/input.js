import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Input() {
    return (
      <div className="input">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Form className="m-5">
            <Form.Group controlId="formBasicEmail">
            <Form.Label>How are you feeling today?</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                Are you feeling troubled by anything? Feeling lonely? Tell us about anything :)
            </Form.Text>
            </Form.Group>

            
            
            <Button variant="info">Find Your Quotes</Button>{' '}
        </Form>
      </div>
    );
  }
  
export default Input;