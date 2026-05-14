import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { GoPlus } from 'react-icons/go';
import Statistics from './Statistics';
import { useEffect, useState } from 'react';
import { getProjects } from '../../services/dashboard';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjectList();
  }, []);

  const getProjectList = async () => {
    try {
        setIsLoading(true)
      const { status, data } = await getProjects();
      console.log(status, data);
      if (status === 200) {
        setIsLoading(false)
        setProjects(data.projects);
      }
    } catch (error) {
        setIsLoading(false)
    }
  };
  console.log('projects', projects);
  
  return (
    <>
      <Row className="my-4">
        <div className="d-flex justify-content-between">
          <h3 className="page-title ">Dashboard</h3>
          <Link
            to="/create-workspace"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Button variant="primary" className="waves-effect waves-light">
              <GoPlus size={22} /> Create New Watch Workspace
            </Button>
          </Link>
        </div>
      </Row>
      <div className="boxs">
        <Statistics projects={projects}/>
      </div>
     {!isLoading &&  !projects.length && (
        <div className="p-3 text-center">
          <img src="/workspace.png" width={400} className="m-auto" />
          <h3>You haven&apos;t created any workspaces yet.</h3>
          <p>
            Click to{' '}
            <b>
              <i>Create New Watch Workspace</i>
            </b>{' '}
            button and create your workspaces.
          </p>
        </div>
      )}
      <Row className="mt-2">
        <Col className="text-center">
          <Button
            variant="success"
            as={Link}
            to="/view-all-workspace"
            className="waves-effect waves-light"
          >
            View All My Watch Workspaces
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
