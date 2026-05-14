import { useEffect, useState } from 'react';
import { Row, Col, Card, Button, Form, Nav, Tab } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MdModeEdit } from 'react-icons/md';
import { LuHistory } from 'react-icons/lu';

// Components
// import PageTitle from '../../components/PageTitle';
import DocumentDetails from './DocumentDetails';
import AnalyzedDocuments from './AnalyzedDocuments';
import Analytics from './Analytics';
import AnalysisList from './AnalysisList';
import { getProjectsById } from '../../services/dashboard';

// SocialFeed
const WatchDetails = () => {
  const navigate = useNavigate();
  const {id} = useParams()

  const [total, setTotal] = useState();
  const [details, setDetails] = useState();
  const [selectedProject, setSelectedProject] = useState({});
  const [key, setKey] = useState('result');

  useEffect(() => {
    getProjectDetails()
  }, []);
  console.log('key', key);

  const getProjectDetails = async() => {
    try {
      const {status, data} = await getProjectsById(id)
      console.log(status, data);
      if(status === 200){
        setDetails(data.Results)
        setSelectedProject(data.Results[0])
        setTotal(data['Records Count'])
      }
      
    } catch (error) {
      console.log('error', error);
      
    }
  }

  return (
    <>
      <div className="mt-4">
        <Row>
          <Col>
            <Card className="p-2">
              <Row className="justify-content-between">
                <Col md={4}>
                  <h4 className="font-20">
                    Reference No: 1111
                  </h4>
                  <p className="text-muted font-14">
                    {details?.watchDetails?.Title}
                  </p>
                </Col>
                <Col md={6}>
                  <div className="d-flex justify-content-end">
                    <div className="d-flex justify-content-end">
                      <div className="me-3">
                        <h4 className="font-28 text-left">
                          {selectedProject?.total?.AnalysisList}
                        </h4>
                        <hr width="35" className="my-1" />
                        <p className="text-muted font-18 m-0 text-center">
                          Patents
                        </p>
                      </div>
                      <div className="me-3">
                        <h4 className="font-28 text-left">
                          {details?.watchDetails?.Families}
                        </h4>
                        <hr width="35" className="my-1" />
                        <p className="text-muted font-18 m-0 text-center">
                          Families
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-end mt-3 mt-md-0 w-25">
                      <Link to="/edit-info" className="w-50 mb-1">
                        <Button
                          variant="warning"
                          className="waves-effect waves-light w-100"
                        >
                          <MdModeEdit /> Edit/info
                        </Button>
                      </Link>
                      <Link to="/history" className="w-50">
                        <Button
                          variant="light"
                          className="waves-effect waves-light w-100"
                        >
                          <LuHistory /> History
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="result"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Row>
            <Col md={6}>
              <div className="card m-0">
                <Nav variant="underline" className="px-2">
                  <Nav.Item className="text-center custom-tabs">
                    <Nav.Link eventKey="result">Result</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="text-center custom-tabs">
                    <Nav.Link eventKey="analytics">Analytics</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex align-items-end">
                <Form.Select className="height-40">
                  <option>Pool filter dropdown option</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <span className="mx-1"></span>
                <Button
                  variant="info"
                  className="waves-effect waves-light w-25"
                  onClick={() => navigate('/create-report')}
                >
                  <i className="mdi me-1"></i>Create Report
                </Button>
              </div>
            </Col>
          </Row>

          <div className="mt-2">
            {key === 'result' && (
              <Row>
                <Col xl={{ span: 3, order: 1 }} lg={{ span: 6, order: 1 }}>
                  <AnalyzedDocuments
                    projects={details}
                    setSelectedProject={setSelectedProject}
                    selectedProject={selectedProject}

                    // documents={details?.documents}
                    // setDocumentId={setDocumentId}
                  />
                </Col>
                <Col xl={{ span: 9, order: 1 }} lg={{ span: 12, order: 2 }}>
                  <DocumentDetails
                    selectedProject={selectedProject}
                    // documentId={documentId}
                    // bibliographic={details?.bibliographicData?.[0]}
                  />
                </Col>
              </Row>
            )}
            {key === 'analytics' && (
              <Row>
                <Col sm={3}>
                  <AnalysisList/>
                </Col>
                <Col sm={9}>
                  <Analytics />
                </Col>
              </Row>
            )}
          </div>
        </Tab.Container>
      </div>
    </>
  );
};

export default WatchDetails;
