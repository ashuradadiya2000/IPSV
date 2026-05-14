import { Badge, Col, Form, Row } from "react-bootstrap"
import StatisticsWidget from "../../components/StatisticsWidget"
import { GoSearch } from "react-icons/go";

const ViewAllWorkspace = () => {
    return (
        <div className="boxs mt-4">
            <Row className="mb-2">
                <Col sm={9}>
                    <h3>My Workspaces<Badge bg="primary" pill className="ms-1">8</Badge></h3>
                </Col>
                <Col sm={3}>
                    <div className="input-group has-validation">
                        <Form.Control type="text" placeholder="Search Workspace..." />
                        <button className="input-group-text" id="inputGroupPrepend"><GoSearch size={20} /></button>
                    </div>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col md={6} xl={3}>
                    <StatisticsWidget
                        title="Reference# Workspace Title"
                        stats="50"
                        trend={{
                            label: "Total income",
                            value: "50",
                            variant: "success",
                            trendStats: "Review",
                        }}
                        counterOptions={{
                            prefix: "",
                        }}
                    />
                </Col>
                <Col md={6} xl={3}>
                    <StatisticsWidget
                        title="Reference# Workspace Title"
                        stats="20"
                        trend={{
                            label: "Total sales",
                            value: "2398",
                            variant: "danger",
                            trendStats: "Review",
                        }}
                    />
                </Col>
                <Col md={6} xl={3}>
                    <StatisticsWidget
                        title="Reference# Workspace Title"
                        stats="75"
                        trend={{
                            label: "Reference# Workspace Title",
                            value: "121",
                            variant: "success",
                            trendStats: "Review",
                        }}
                    />
                </Col>
                <Col md={6} xl={3}>
                    <StatisticsWidget
                        title="Reference# Workspace Title"
                        stats="150"
                        trend={{
                            label: "Total revenue",
                            value: "$1.2 M",
                            variant: "success",
                            trendStats: "Review",
                        }}
                        counterOptions={{
                            prefix: "",
                        }}
                    />
                </Col>
                <Col md={6} xl={3}>
                    <StatisticsWidget
                        title="Reference# Workspace Title"
                        stats="43"
                        trend={{
                            label: "Total revenue",
                            value: "$1.2 M",
                            variant: "success",
                            trendStats: "Review",
                        }}
                        counterOptions={{
                            prefix: "",
                        }}
                    />
                </Col>
                <Col md={6} xl={3}>
                    <StatisticsWidget
                        title="Reference# Workspace Title"
                        stats="43"
                        trend={{
                            label: "Total revenue",
                            value: "$1.2 M",
                            variant: "success",
                            trendStats: "Review",
                        }}
                        counterOptions={{
                            prefix: "",
                        }}
                    />
                </Col>
                <Col md={6} xl={3}>
                    <StatisticsWidget
                        title="Reference# Workspace Title"
                        stats="43"
                        trend={{
                            label: "Total revenue",
                            value: "$1.2 M",
                            variant: "success",
                            trendStats: "Review",
                        }}
                        counterOptions={{
                            prefix: "",
                        }}
                    />
                </Col>
                <Col md={6} xl={3}>
                    <StatisticsWidget
                        title="Reference# Workspace Title"
                        stats="43"
                        trend={{
                            label: "Total revenue",
                            value: "$1.2 M",
                            variant: "success",
                            trendStats: "Review",
                        }}
                        counterOptions={{
                            prefix: "",
                        }}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default ViewAllWorkspace