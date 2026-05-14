import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { GoPlus } from "react-icons/go";


const AnalyzedDocuments = ({projects, setSelectedProject, selectedProject}) => {
    return (
        <Card className='border-1'>
            <Card.Header className="header-title">Analyzed Documents</Card.Header>
            <Card.Body className="p-0">
                <div className="inbox-widget">
                    {projects && projects.length > 0 && projects.map((project, index) => (
                        <div key={index} className={selectedProject.appnum === project.appnum  ? "active inbox-item px-2" : "inbox-item px-2"}>
                            <div onClick={() => setSelectedProject(project)}>
                            <p className="inbox-item-author">{project.appnum}</p>
                            <p className="inbox-item-text">{project.assignee}</p>
                            </div>
                            <p className="inbox-item-date">
                                {project.pubdate}
                                <span className="mx-1"></span>
                                <button type="button" className="btn btn-sm btn-outline-primary p-1">
                                    <GoPlus size={20} />
                                </button>
                            </p>
                        </div>
                    ))}
                </div>
            </Card.Body>
        </Card>
    );
};
AnalyzedDocuments.propTypes = {
    documents: PropTypes.arrayOf(
        PropTypes.shape({
            companyName: PropTypes.string,
            documentId: PropTypes.string,
            year: PropTypes.number,
        })
    ).isRequired,
    setDocumentId: PropTypes.func.isRequired,
};
export default AnalyzedDocuments;
