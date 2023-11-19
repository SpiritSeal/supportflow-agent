import React from 'react';
import { Row, Col, Form, FormGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const EndpointSite = () => {
  return (
    <Container>
      {/* <Row>
        Left-side read-only text boxes
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor="chatHistoryTextBox">Chat History from SupportFlow Conversation</Form.Label>
            <Form.Control as="textarea" rows={19} readOnly id="chatHistoryTextBox" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="chatSummaryTextBox">Chat Summary</Form.Label>
            <Form.Control as="textarea" rows={2} readOnly id="chatSummaryTextBox" />
          </Form.Group>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Form.Label htmlFor="customerNameTextBox">Customer Name</Form.Label>
            <Form.Control type="text" className="form-control" id="customerNameTextBox" readOnly />
          </FormGroup>
          <FormGroup>
            <Form.Label htmlFor="customerIdTextBox">Customer ID</Form.Label>
            <Form.Control type="text" className="form-control" id="customerIdTextBox" readOnly />
          </FormGroup>
          <FormGroup>
            <Form.Label htmlFor="customerEmailTextBox">Customer Email</Form.Label>
            <Form.Control type="text" className="form-control" id="customerEmailTextBox" readOnly />
          </FormGroup>
          <FormGroup>
            <Form.Label htmlFor="whatCustomerWantsTextBox">Escalation Reason</Form.Label>
            <Form.Control type="text" className="form-control" id="whatCustomerWantsTextBox" readOnly />
          </FormGroup>
          <FormGroup>
            <Form.Label htmlFor="solutionByBotTextBox">Best Solution Made by SupportFlow</Form.Label>
            <Form.Control type="text" className="form-control" id="solutionByBotTextBox" readOnly />
          </FormGroup>
          <FormGroup>
            <Form.Label htmlFor="moreBotSolutionsTextBox">Other Possible Solutions by SupportFlow</Form.Label>
            <Form.Control as="textarea" rows={6} className="form-control" id="moreBotSolutionsTextBox" readOnly />
          </FormGroup>
        </Col>
      </Row> */}
    </Container>
  );
};

export default EndpointSite;
