import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Tab, Nav, Col, Row, Button, Badge } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { IoAdd } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineDiscount } from "react-icons/md";
import { Link } from 'react-router-dom';
import { SlLayers } from "react-icons/sl";

// DocumentDetails
const DocumentDetails = ({ selectedProject }) => {
  // const [details, setDetails] = useState();

  // useEffect(() => {
  //   if (documentId) {
  //     setDetails(bibliographic?.[documentId]);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [documentId]);
  console.log('selectedProject', selectedProject);
  
  return (
    <>
      <Tab.Container defaultActiveKey="biblographic">
        <Card className='border-1'>
          <div className='p-1 card-header d-flex justify-content-between'>
            <h5 className='m-0 align-self-center'>Citation Analysis</h5>
            <div>
              <Button variant="success"><IoAdd size={20}/> Add To Report</Button>&nbsp;
              <Button variant="light"><FiExternalLink size={20}/> Link</Button>&nbsp;
              <Button variant="light" as={Link} to=''><SlLayers size={18}/> Family <Badge bg="secondary">9</Badge></Button>
              <Button variant="light" as={Link} to='/annotation'><MdOutlineDiscount size={20}/> Annotation <Badge bg="secondary">9</Badge></Button>
            </div>
          </div>
          <Card.Body className="p-0">
            <Nav variant="pills" className="bg-light p-1" as="ul">
              <Nav.Item as="li">
                <Nav.Link
                  href="#"
                  className="cursor-pointer px-3 py-2"
                  eventKey="biblographic"
                >
                  <i className="mdi mdi-image font-18 d-md-none d-block"></i>
                  <span className="d-none d-md-block">Biblographic</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link
                  href="#"
                  className="cursor-pointer px-3 py-2"
                  eventKey="claim"
                >
                  <i className="mdi mdi-book-open-variant font-18 d-md-none d-block"></i>
                  <span className="d-none d-md-block">Claim</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link
                  href="#"
                  className="cursor-pointer px-3 py-2"
                  eventKey="Legal Events"
                >
                  <i className="mdi mdi-pencil-box-multiple font-18 d-md-none d-block"></i>
                  <span className="d-none d-md-block">Legal Events</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link
                  href="#"
                  className="cursor-pointer px-3 py-2"
                  eventKey="Drawings"
                >
                  <i className="mdi mdi-pencil-box-multiple font-18 d-md-none d-block"></i>
                  <span className="d-none d-md-block">Drawings</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content className="pt-0 border-1">
              <Tab.Pane eventKey="biblographic">
                <Card.Body>
                  <h3 className="mt-0 font-20 mb-3">
                    {'Biblographic Details'.toUpperCase()}
                  </h3>
                  <Row>
                    <Col sm={5}>
                      <p className="text-dark mb-2">
                        <b>Publication No: </b>
                        {selectedProject?.pubnum}
                      </p>
                      <p className="text-dark mb-2">
                        <b>Legal Status: </b>
                        {selectedProject?.legal_status_current}
                      </p>
                      <p className="text-dark mb-2">
                        <b>Application No: </b>
                        {selectedProject?.appnum}
                      </p>
                      <p className="text-dark mb-2">
                        <b>Assignee(s): </b>
                        {selectedProject?.assignee_curr}
                      </p>
                      <p className="text-dark mb-2">
                        <b>Inventor(s): </b>
                        {selectedProject?.inventors}
                      </p>
                      <p className="text-dark mb-2">
                        <b>Application Date: </b>
                        {selectedProject?.appdate}
                      </p>
                      <p className="text-dark mb-2">
                        <b>Publication Date: </b>
                        {selectedProject?.pubdate}
                      </p>
                      <p className="text-dark mb-2">
                        <b>Priority Date: </b>
                        {selectedProject?.prioritydate}
                      </p>
                      <p className="text-dark mb-2">
                        <b>Title: </b>
                        {selectedProject?.title}
                      </p>
                      <p className="text-dark mb-2">
                        <b>Abstract: </b>
                        {selectedProject?.abs                        }
                      </p>
                    </Col>
                    <Col sm={7}>
                      <p className="text-dark mb-2">
                        <b>Class Codes: </b>
                        {selectedProject?.publicationNo}
                      </p>
                      <p className="text-dark mb-2">
                        <b>CPC: </b>{selectedProject?.cpcclass}
                      </p>
                      <p className="text-dark mb-2">
                        <b>IPC: </b>{selectedProject?.ipcclass}
                      </p>
                      <p className="text-dark mb-2">
                        <b>US: </b>{selectedProject?.usclass}
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Tab.Pane>
              <Tab.Pane eventKey="claim" className="p-3">
                <div className="comment-area-box">
                  <h3 className="mt-0 font-20 mb-3">
                    {'ALL CLAIMS:'.toUpperCase()}
                  </h3>
                  <p className="text-black mb-2">
                    {selectedProject?.claims}
                  </p>
                  <p className="text-black mb-2">
                    2. The wastewater treatment process according to claim 1,
                    wherein the wastewater is organic wastewater capable of
                    being treated biochemically.
                  </p>
                  <p className="text-black mb-2">
                    3. The wastewater treatment process according to claim 1,
                    wherein the electricigenic microbe comprise Geobacter and
                    Shewanella.
                  </p>
                  <p className="text-black mb-2">
                    4. The wastewater treatment process according to claim 1,
                    wherein the saline water comprises: sea water or brackish
                    water with a salt content of 5-35 g/L.
                  </p>
                  <p className="text-black mb-2">
                    5. The wastewater treatment process according to claim 1,
                    wherein the electron acceptor comprises oxygen and potassium
                    ferricyanide for chemically catalytic reduction as well as
                    oxygen, nitrate and carbon dioxide for microbially catalytic
                    reduction.
                  </p>
                  <p className="text-black mb-2">
                    6. A wastewater treatment device for generating current and
                    desalting simultaneously, comprising: a microbial fuel cell
                    being divided into an anode compartment, a middle desalting
                    compartment and a cathode compartment by an anion exchange
                    membrane and a cation exchange membrane provided therein; an
                    anode disposed in the anode compartment with an
                    electricigenic biofilm disposed on the anode; a cathode
                    disposed in the cathode compartment with an electron
                    acceptor; and an external circuit connecting the cathode and
                    the anode, wherein wastewater is supplied into the anode
                    compartment whereas saline water is continuously flowing
                    into the middle desalting compartment.
                  </p>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Legal Events" className="p-3">
                <>
                  <h3 className="mt-0 font-20 mb-3">
                    {'Legal Events:'.toUpperCase()}
                  </h3>
                  <Table responsive bordered hover>
                    <thead>
                      <tr className="bg-light">
                        <th>Date</th>
                        <th>+/-</th>
                        <th>Code</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                    </tbody>
                  </Table>
                </>
              </Tab.Pane>
              <Tab.Pane eventKey="Drawings" className="p-3">
                <div>
                  <h3 className="mt-0 font-20 mb-3">
                    {'Drawings:'.toUpperCase()}
                  </h3>
                  <img src="https://ars.els-cdn.com/content/image/1-s2.0-S0960148118312114-egi10RSXFMC5W1.jpg" />
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Card.Body>
        </Card>
      </Tab.Container>
    </>
  );
};
DocumentDetails.propTypes = {
  bibliographic: PropTypes.object,
  documentId: PropTypes.string,
};
export default DocumentDetails;
