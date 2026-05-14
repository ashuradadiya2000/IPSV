import { Row, Col } from "react-bootstrap";

// components
import StatisticsWidget from "../../components/StatisticsWidget";

const Statistics = ({projects}) => {
  return (
    <>
      <Row>
        {projects && projects.length > 0  && projects.map((ele, i)=>{
          return (
            <Col md={6} xl={3} key={i}>
              <StatisticsWidget
                title={ele.title}
                subtitle={ele.refNumber}
                stats={ele.total_projects}
                projectId={ele.projectId}
                trend={{
                  label: "Total projects",
                  value: ele.total_projects,
                  variant: "success",
                  trendStats: "Review",
                }}
              />
            </Col>
          )
        })}
        {/* <Col md={6} xl={3}> 
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
        </Col> */}
      </Row>
    </>
  );
};

export default Statistics;
