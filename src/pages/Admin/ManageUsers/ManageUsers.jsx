import { Button, Form, Table } from "react-bootstrap"

const ManageUsers = () => {
    return (
        <>
            <div className="d-flex align-items-baseline justify-content-between">
                <h3 className="mb-3">Manage Users</h3>
                <Button>Create New</Button>
            </div>
            <Table responsive bordered hover>
                <thead>
                    <tr className="bg-light">
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Company</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Test Demo</td>
                        <td>Test Demo</td>
                        <td>987654321</td>
                        <td>Google</td>
                        <td>Admin</td>
                        <td>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label='Active/Deactive'
                            />
                        </td>
                        <td>
                            <Button variant="primary" size="sm">Edit</Button>&nbsp;
                            <Button variant="danger" size="sm">Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Test Demo</td>
                        <td>Test Demo</td>
                        <td>987654321</td>
                        <td>Google</td>
                        <td>User</td>
                        <td>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label='Active/Deactive'
                            />
                        </td>
                        <td>
                            <Button variant="primary" size="sm">Edit</Button>&nbsp;
                            <Button variant="danger" size="sm">Delete</Button>
                        </td>
                    </tr>

                </tbody>
            </Table>
        </>
    )
}

export default ManageUsers
