import { Button, Card, Col, Form, Row } from "react-bootstrap"
import FormInput from "../../../components/FormInput"

const UsersRegistration = () => {
    const onSubmit = () => {

    }
    return (
        <Card.Body>
            <h3 className="mb-3">Create New User</h3>
            <Row>
                <Col sm={6}>
                    <FormInput
                        label="Full Name"
                        type="text"
                        name="fullname"
                        placeholder="Enter your full name"
                        containerClass="mb-2"
                    />
                </Col>
                <Col sm={6}>
                    <FormInput
                        label="Company Email"
                        type="text"
                        name="companyemail"
                        placeholder="Enter your company email"
                        containerClass="mb-2"
                    />
                </Col>
                <Col sm={6}>
                    <Form.Group className="mb-2">
                        <Form.Label>Select Company</Form.Label>
                        <Form.Select>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col sm={6}>
                    <Form.Group className="mb-2">
                        <FormInput
                            label="Number of projects"
                            type="text"
                            name="companyemail"
                            placeholder="Enter number of projects"
                            containerClass="mb-2"
                        />
                    </Form.Group>
                </Col>
                <Col sm={6}>
                    <FormInput
                        label="Phone Number"
                        type="text"
                        name="phone"
                        placeholder="Enter your phone number"
                        containerClass="mb-2"
                    />
                </Col>
                <Col sm={6}>
                    <Form.Group className="mb-2">
                        <Form.Label>Select Type</Form.Label>
                        <Form.Select>
                            <option value="1">ADMIN</option>
                            <option value="3">USER</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col sm={6}>
                    <FormInput
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        containerClass="mb-2"
                    />
                </Col>
                <Col sm={6}>
                    <FormInput
                        label="Comfirm Password"
                        type="password"
                        name="confirmpassword"
                        placeholder="Enter comfirm password"
                        containerClass="mb-2"
                    />
                </Col>
                <Col sm={6}>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Col>

            </Row>
        </Card.Body >
    )
}

export default UsersRegistration