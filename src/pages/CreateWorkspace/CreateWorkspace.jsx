import { useEffect, useState } from 'react';
import { Form, Button, Row, Card, Col, Tabs, Tab } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import FormControl from 'react-bootstrap/FormControl';

import { getFrequencyList, getFilterList, createProject } from '../../services/dashboard';

import { filterListJson } from './static';
import moment from 'moment';

const CreateWorkspace = () => {
    const [form, setForm] = useState({
        projectName: '',
        referenceNumber: '',
        projectPreferenceName: '',
        projectDescription: '',
        watchFrequency: '',
        emailNotification: false,
    });
    const [queryText, setQueryText] = useState('');
    const [frequency, setFrequency] = useState({});
    const [filters, setFilters] = useState(filterListJson);
    const [date, setDate] = useState({
        from: '',
        to: ''
    })
    useEffect(() => {
        getFrequency();
        getFilters()
    }, []);

    const getFrequency = async () => {
        try {
            const { status, data } = await getFrequencyList();
            if (status === 200) {
                setFrequency(data);
            }
        } catch (error) {
            console.log('error', error);
        }
    };

    const getFilters = async () => {
        try {
            const { status, data } = await getFilterList();
            if (status === 200) {
                setFilters(data);
            }
        } catch (error) {
            console.log('error', error);
        }
    };

    const handleChangeForm = (key, val) => {
        setForm({ ...form, [key]: val });
    };

    const fieldColumn = {
        label: '',
        value: '',
        condition: '',
    };

    const [key, setKey] = useState('Structured Search');
    const [fields, setFields] = useState([fieldColumn]);

    const handleChangeSelection = (val, i) => {
        const updatedFields = JSON.parse(JSON.stringify([...fields]));
        updatedFields[i].label = val;
        setFields(updatedFields);
    };
    console.log('fields', fields);

    const handleChangeConditionInput = (val, i) => {
        const updatedFields = JSON.parse(JSON.stringify([...fields]));
        updatedFields[i].condition = val;
        setFields(updatedFields);
    };
    const handleChangeInput = (val, i) => {
        const updatedFields = JSON.parse(JSON.stringify([...fields]));
        updatedFields[i].value = val;
        setFields(updatedFields);
    };

    const handleAppendConfig = () => {
        setFields([...fields, fieldColumn]);
    };

    const handleRemoveConfig = (ind) => {
        const arr = fields.filter((_, i) => i != ind);
        setFields(arr);
    };
    //phase 2

    function validateItem(item) {
        if (!item.label || typeof item.value !== 'string') {
            console.warn(`Skipping invalid item: ${JSON.stringify(item)}`);
            return false;
        }
        return true;
    }

    function convertObjectToArray(objectFormat) {
        return Object.keys(objectFormat).map(key => ({
            filterId: parseInt(key, 10),
            value: objectFormat[key]
        }));
    }

    const handleSubmit = async () => {
        try {
            const result = {};
            if (fields && fields.length > 0) {
                fields.forEach(item => {
                    if (!validateItem(item)) return;
                    const { label, value, condition } = item;
                    if (!result[label]) {
                        result[label] = '';
                    }
                    if (result[label] && condition) {
                        result[label] += ` ${condition} `;
                    }
                    result[label] += `(${value})*`;
                });
                console.log('Final fields result:', result);
            }
            const payload = {
                ...form,
            };
            if (key === 'Structured Search') {
                payload['filters'] = convertObjectToArray(result)
            }
            if (key === 'Query Text Editor') {
                payload['query_serach'] = ''
            }
            if (date.from && date.to) {
                payload['filters'].push({
                    filterId: 4,
                    value: `[${moment(date.from).format('DD/MM/YYYY')} TO ${moment(date.to).format('DD/MM/YYYY')}]`
                })
            }
            console.log('payload', payload);
            const { status, data } = await createProject(payload)
            if (status === 200) {
                alert(data.message)
                console.log('data', data);
            }
        } catch (error) {
            console.log('error', error);
        }
    };

    return (
        <div className="mt-4">
            <h4 className="mb-2">Create Project</h4>
            <Card className="p-3">
                <h5 className="mb-3">Project Summary</h5>
                <Form>
                    <Row>
                        <Col sm={3} className="mb-3">
                            <Form.Group controlId="formProjectName">
                                <Form.Label>Project Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter project name"
                                    required
                                    name="projectName"
                                    value={form.projectName}
                                    onChange={(e) =>
                                        handleChangeForm(e.target.name, e.target.value)
                                    }
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={3} className="mb-3">
                            <Form.Group controlId="formReferenceNumber">
                                <Form.Label>Reference Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter project reference number"
                                    required
                                    name="referenceNumber"
                                    value={form.referenceNumber}
                                    onChange={(e) =>
                                        handleChangeForm(e.target.name, e.target.value)
                                    }
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={3} className="mb-3">
                            <Form.Group controlId="formProjectPreferenceName">
                                <Form.Label>Project Preference Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter project preference name"
                                    required
                                    name="projectPreferenceName"
                                    value={form.projectPreferenceName}
                                    onChange={(e) =>
                                        handleChangeForm(e.target.name, e.target.value)
                                    }
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={3} className="mb-3">
                            <Form.Group controlId="watchFrequency" className="mb-3">
                                <Form.Label>Project Watch Frequency</Form.Label>
                                <Form.Select
                                    name="watchFrequency"
                                    onChange={(e) =>
                                        handleChangeForm(e.target.name, e.target.value)
                                    }
                                >
                                    {frequency &&
                                        frequency.length > 0 &&
                                        frequency.map((item, index) => {
                                            return (
                                                <option key={index} value={item.frequencyId}>
                                                    {item.title}
                                                </option>
                                            );
                                        })}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col sm={6} className="mb-3">
                            <Form.Group controlId="formProjectDescription">
                                <Form.Label>Project Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Enter some brief about project"
                                    required
                                    name="projectDescription"
                                    value={form.projectDescription}
                                    onChange={(e) =>
                                        handleChangeForm(e.target.name, e.target.value)
                                    }
                                />
                            </Form.Group>
                        </Col>

                        <Col sm={3} className="mb-3">
                            <Form.Group controlId="formEmailNotification">
                                <Form.Label>Enable / Disable Email Notification</Form.Label>
                                <Form.Check
                                    type="checkbox"
                                    label="Email Notification"
                                    name="emailNotification"
                                    checked={form.emailNotification}
                                    onChange={(e) =>
                                        handleChangeForm(e.target.name, e.target.checked)
                                    }
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Card>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="p-0"
            >
                <Tab eventKey="Structured Search" title="Structured Search">
                    <div>
                        <Card className="p-3 mb-2">
                            <h5 className="mb-3">Create Project Config</h5>
                            {fields.map((ele, i) => {
                                return (
                                    <div key={ele.label + i}>
                                        <Row className="mb-2">
                                            {i != 0 && (
                                                <Col sm={2} className="my-2">
                                                    <Form.Select onChange={(e) => handleChangeConditionInput(e.target.value, i)} >
                                                        <option value="" disabled selected> Select Condition </option>
                                                        <option value="AND" selected={ele?.condition === 'AND'} >AND</option>
                                                        <option value="OR" selected={ele?.condition === 'OR'} > OR </option>
                                                    </Form.Select>
                                                </Col>
                                            )}
                                        </Row>
                                        <Row className="mb-2">
                                            <Col sm={2}>
                                                <Form.Select onChange={(e) => handleChangeSelection(e.target.value, i)} value={fields[i].label}>
                                                    <option>Select</option>
                                                    {filters && filters.length > 0 && filters.map((el, ind) => {
                                                        return (
                                                            <option key={ind} value={el?.filterId}>{el?.title}</option>
                                                        );
                                                    })}
                                                </Form.Select>
                                            </Col>
                                            <Col sm={8}>
                                                <Form.Control
                                                    placeholder="Enter value"
                                                    as="textarea"
                                                    rows={1}
                                                    onChange={(e) => handleChangeInput(e.target.value, i)}
                                                    value={ele?.value}
                                                />
                                            </Col>
                                            <Col sm={2}>
                                                {i != 0 && (
                                                    <>
                                                        <Button variant="danger" onClick={() => handleRemoveConfig(i)}>Remove</Button>
                                                        &nbsp;&nbsp;
                                                    </>
                                                )}
                                                <Button variant="primary" onClick={handleAppendConfig}>
                                                    Add
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                );
                            })}
                        </Card>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="m-0">Date Range</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col sm={6}>
                                            <FormControl
                                                type="date"
                                                value={date.from}
                                                onChange={(e) =>
                                                    setDate({ ...date, from: e.target.value })
                                                }
                                            />
                                        </Col>
                                        <Col sm={6}>
                                            <FormControl
                                                type="date"
                                                value={date.to}
                                                onChange={(e) =>
                                                    setDate({ ...date, to: e.target.value })
                                                }
                                            />
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Tab>

                <Tab eventKey="Query Text Editor" title="Query Search">
                    <Card className="p-3">
                        <h5>Patent Query = All Documents</h5>
                        <hr className="mt-1 mb-2" />
                        <Form.Label>Query Status:</Form.Label>
                        <Form.Control placeholder="Enter value" as="textarea" rows={5} onChange={(e) => setQueryText(e.target.value)} value={queryText} />
                    </Card>
                </Tab>
            </Tabs>
            <div className="mt-4">
                <Button variant="primary" onClick={handleSubmit}>
                    Create
                </Button>
                &nbsp; &nbsp;
                <Button variant="secondary" className="ml-2">
                    Cancel
                </Button>
            </div>
        </div>
    );
};

export default CreateWorkspace;
