import { Card, Col, Form, ListGroup, Row } from 'react-bootstrap';

const AnalysisList = () => {
    return (
        <div>
            <Card className="border-1 mb-1">
                <Card.Header as='h5' className='p-2'>Featured</Card.Header>
                <Card.Body>
                    <p>
                        With supporting text below as a natural lead-in to additional content.
                    </p>
                    <Row>
                        <Col sm={6}>
                            <Form.Select size="sm">
                                <option>Top 10</option>
                            </Form.Select>
                        </Col>
                        <Col sm={6}>
                            <Form.Select size="sm">
                                <option>Top 10</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="border-1">
                <Card.Header as='h5' className='p-2'>Citation Analysis</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item active role='button'>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item role='button'>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item role='button'>Vestibulum at eros</ListGroup.Item>
                    <ListGroup.Item role='button'>Vestibulum at eros</ListGroup.Item>
                    <ListGroup.Item role='button'>Vestibulum at eros</ListGroup.Item>
                    <ListGroup.Item role='button'>Vestibulum at eros</ListGroup.Item>
                    <ListGroup.Item role='button'>Vestibulum at eros</ListGroup.Item>
                    <ListGroup.Item role='button'>Vestibulum at eros</ListGroup.Item>
                    <ListGroup.Item role='button'>Vestibulum at eros</ListGroup.Item>
                    <ListGroup.Item role='button'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    );
};

export default AnalysisList;
