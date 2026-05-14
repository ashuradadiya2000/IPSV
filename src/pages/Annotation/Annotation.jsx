import { Button, Card, Col, Form, Row, Table } from "react-bootstrap"
import { MdOutlineDiscount } from "react-icons/md"
import { GoUnlock, GoLock } from "react-icons/go";
import { LiaSave } from "react-icons/lia";

const Annotation = () => {
    return (
        <div className="mt-4">
            <Card className="border-1">
                <div className="bg-primary text-white p-2">
                    <MdOutlineDiscount size={20} /> USB123456789 - Annotation
                </div>
                <Card.Header>
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <h4 className="text-info">Add New Annotation: </h4>
                        <div>
                            <Form.Check
                                inline
                                label={<span className="text-info"><GoUnlock size={20} /> For Project Team</span>}
                                name="group1"
                                type='radio'
                                id="team"
                            />
                            <Form.Check
                                inline
                                label={<span className="text-success"><GoLock size={20} /> For Personal</span>}
                                name="group1"
                                type='radio'
                                id="personal"
                            />
                        </div>
                    </div>
                    <Row>
                        <Col sm={2}>
                            <Form.Select>
                                <option>One</option>
                                <option>Two</option>
                                <option>Three</option>
                            </Form.Select>
                        </Col>
                        <Col sm={4}>
                            <Form.Control type="text" placeholder="Add Tags" />
                        </Col>
                        <Col sm={4}>
                            <Form.Control type="text" placeholder="Comments (A limit of 250 charactors)" />
                        </Col>
                        <Col sm={2}>
                            <Button variant="primary"><LiaSave size={20} /> SAVE</Button>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className="p-2">
                    <h4 className="text-info">Annotation History: </h4>
                    <Table responsive bordered hover>
                        <thead>
                            <tr className="bg-light">
                                <th>User Name</th>
                                <th>Rating</th>
                                <th>Tags</th>
                                <th>Comments</th>
                                <th>Date</th>
                                <th>Scope</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Annotation