import { useEffect, useState } from 'react';
import { Form, Button, Row, Card, Col, Tabs, Tab } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import FormControl from 'react-bootstrap/FormControl';
import { getFrequencyList, getFilterList } from '../../services/dashboard';

const CreateWorkspace = () => {
  const [form, setForm] = useState({
    projectName: '',
    referenceNumber: '',
    projectPreferenceName: '',
    projectDescription: '',
    projectWatchFrequency: '',
    emailNotification: false,
    IssueStartDate: '',
    IssueEndDate: '',
  });
  const [frequency, setFrequency] = useState({});
  const [filters, setFilters] = useState({});

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
  console.log('filters', filters);
  const handleChangeForm = (key, val) => {
    setForm({ ...form, [key]: val });
  };

  const fieldColumn = [
    {
      label: 'Applicant',
      value: '',
      condition: '',
    },
    {
      label: 'Assignee',
      value: '',
      condition: '',
    },
    {
      label: 'Applicant/Assignee',
      value: '',
      condition: '',
    },
    {
      label: 'title',
      value: '',
      condition: '',
    },
    {
      label: 'Abstract',
      value: '',
      condition: '',
    },
    {
      label: 'Title/Abstract',
      value: '',
      condition: '',
    },
  ];

  const [key, setKey] = useState('Structured Search');
  const [fields, setFields] = useState([fieldColumn[0]]);

  const handleAppendConfig = (label) => {
    const field = fieldColumn.find((item) => item.label === label);
    setFields([...fields, field]);
  };
  const handleRemoveConfig = (ind) => {
    const arr = fields.filter((_, i) => i != ind);
    setFields(arr);
  };
  const handleChangeInput = (val, i) => {
    const updatedFields = JSON.parse(JSON.stringify([...fields]));
    updatedFields[i].value = val;
    setFields(updatedFields);
  };
  const handleChangeConditionInput = (val, i) => {
    const updatedFields = JSON.parse(JSON.stringify([...fields]));
    updatedFields[i].condition = val;
    setFields(updatedFields);
  };
  const handleChangeSelection = (val, i) => {
    const updatedFields = JSON.parse(JSON.stringify([...fields]));
    updatedFields[i].label = val;
    setFields(updatedFields);
  };
  //phase 2
  const fieldColumn2 = [
    {
      label: 'Inventor',
      value: '',
      condition: 'AND',
    },
    {
      label: 'IPC',
      value: '',
      condition: 'AND',
    },
  ];

  const [fields2, setFields2] = useState([fieldColumn2[0]]);
  const handleAppendConfig2 = (label) => {
    const field = fieldColumn2.find((item) => item.label === label);
    setFields2([...fields2, field]);
  };
  const handleRemoveConfig2 = (ind) => {
    const arr = fields.filter((_, i) => i != ind);
    setFields(arr);
  };
  const handleChangeInput2 = (val, i) => {
    const updatedFields = JSON.parse(JSON.stringify([...fields2]));
    updatedFields[i].value = val;
    setFields2(updatedFields);
  };
  const handleChangeConditionInput2 = (val, i) => {
    const updatedFields = JSON.parse(JSON.stringify([...fields2]));
    updatedFields[i].condition = val;
    setFields2(updatedFields);
  };
  const handleChangeSelection2 = (val, i) => {
    const updatedFields = JSON.parse(JSON.stringify([...fields2]));
    updatedFields[i].label = val;
    setFields2(updatedFields);
  };

  const handleSubmit = () => {
    const condition = {
      Applicant: '',
      Assignee: '',
      'Applicant/Assignee': '',
      title: '',
      Abstract: '',
      'Title/Abstract': '',
    };
    const applicant = fields.filter((item) => item.label === 'Applicant');
    if (applicant.length > 0) {
      for (const [index, item] of applicant.entries()) {
        if (index === 0) {
          applicant[index].condition = '';
        }
        condition['Applicant'] =
          condition[item.label] +
          `${item.condition ? item.condition + ' ' : ''}` +
          `(${item.value})* `;
      }
    }
    const assignee = fields.filter((item) => item.label === 'Assignee');
    if (assignee.length > 0) {
      for (const [index, item] of assignee.entries()) {
        if (index === 0) {
          assignee[index].condition = '';
        }
        condition['Assignee'] =
          condition[item.label] +
          `${item.condition ? item.condition + ' ' : ''}` +
          `(${item.value})* `;
      }
    }
    const applicant_assignee = fields.filter(
      (item) => item.label === 'Applicant/Assignee'
    );
    if (applicant_assignee.length > 0) {
      for (const [index, item] of applicant_assignee.entries()) {
        if (index === 0) {
          applicant_assignee[index].condition = '';
        }
        condition['Applicant/Assignee'] =
          condition[item.label] +
          `${item.condition ? item.condition + ' ' : ''}` +
          `(${item.value})* `;
      }
    }
    const title = fields.filter((item) => item.label === 'title');
    if (title.length > 0) {
      for (const [index, item] of title.entries()) {
        if (index === 0) {
          title[index].condition = '';
        }
        condition['title'] =
          condition[item.label] +
          `${item.condition ? item.condition + ' ' : ''}` +
          `(${item.value})* `;
      }
    }
    const abstract = fields.filter((item) => item.label === 'Abstract');
    if (abstract.length > 0) {
      for (const [index, item] of abstract.entries()) {
        if (index === 0) {
          abstract[index].condition = '';
        }
        condition['Abstract'] =
          condition[item.label] +
          `${item.condition ? item.condition + ' ' : ''}` +
          `(${item.value})* `;
      }
    }
    const title_abstract = fields.filter(
      (item) => item.label === 'Title/Abstract'
    );
    if (title_abstract.length > 0) {
      for (const [index, item] of title_abstract.entries()) {
        if (index === 0) {
          title_abstract[index].condition = '';
        }
        condition['Title/Abstract'] =
          condition[item.label] +
          `${item.condition ? item.condition + ' ' : ''}` +
          `(${item.value})* `;
      }
    }
    console.log('condition', condition);
    console.log('form', form);
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
              <Form.Group controlId="projectWatchFrequency" className="mb-3">
                <Form.Label>Project Watch Frequency</Form.Label>
                <Form.Select
                  name="projectWatchFrequency"
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
                          <Form.Select
                            onChange={(e) =>
                              handleChangeConditionInput(e.target.value, i)
                            }
                          >
                            <option value="" disabled selected>
                              Select Condition
                            </option>
                            <option
                              value="AND"
                              selected={ele?.condition === 'AND'}
                            >
                              AND
                            </option>
                            <option
                              value="OR"
                              selected={ele?.condition === 'OR'}
                            >
                              OR
                            </option>
                          </Form.Select>
                        </Col>
                      )}
                    </Row>
                    <Row className="mb-2">
                      <Col sm={2}>
                        <Form.Select
                          onChange={(e) =>
                            handleChangeSelection(e.target.value, i)
                          }
                        >
                          {fieldColumn.map((el, ind) => {
                            return (
                              <option
                                key={ind}
                                value={el?.label}
                                selected={ele?.label == el?.label}
                              >
                                {el?.label}
                              </option>
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
                            <Button
                              variant="danger"
                              onClick={() => handleRemoveConfig(i)}
                            >
                              Remove
                            </Button>
                            &nbsp;&nbsp;
                          </>
                        )}
                        <Button
                          variant="primary"
                          onClick={() => handleAppendConfig(ele?.label, i)}
                        >
                          Add
                        </Button>
                      </Col>
                    </Row>
                  </div>
                );
              })}
            </Card>
            <Card className="p-3 mb-2">
              {fields2.map((ele, i) => {
                return (
                  <div key={i + i}>
                    <Row className="mb-2">
                      {i != 0 && (
                        <Col sm={2} className="my-2">
                          <Form.Select
                            onChange={(e) =>
                              handleChangeConditionInput2(e.target.value)
                            }
                          >
                            <option value="" disabled selected>
                              Select Condition
                            </option>
                            <option
                              value="AND"
                              selected={ele?.condition === 'AND'}
                            >
                              AND
                            </option>
                            <option
                              value="OR"
                              selected={ele?.condition === 'OR'}
                            >
                              OR
                            </option>
                          </Form.Select>
                        </Col>
                      )}
                    </Row>
                    <Row className="mb-2">
                      <Col sm={2}>
                        <Form.Select
                          onChange={(e) =>
                            handleChangeSelection2(e.target.value, i)
                          }
                        >
                          {fieldColumn2.map((el, ind) => {
                            return (
                              <option key={ind} value={el?.label}>
                                {el?.label}
                              </option>
                            );
                          })}
                        </Form.Select>
                      </Col>
                      <Col sm={8}>
                        <Form.Control
                          placeholder="Enter value"
                          as="textarea"
                          rows={1}
                          onChange={(e) =>
                            handleChangeInput2(e.target.value, i)
                          }
                          value={ele?.value}
                        />
                      </Col>
                      <Col sm={2}>
                        {i != 0 && (
                          <>
                            <Button
                              variant="danger"
                              onClick={() => handleRemoveConfig2(i)}
                            >
                              Remove
                            </Button>
                            &nbsp;&nbsp;
                          </>
                        )}
                        <Button
                          variant="primary"
                          onClick={() => handleAppendConfig2(ele.label, i)}
                        >
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
                        value={form.from}
                        onChange={(e) =>
                          handleChangeForm('IssueStartDate', e.target.value)
                        }
                      />
                    </Col>
                    <Col sm={6}>
                      <FormControl
                        type="date"
                        value={form.to}
                        onChange={(e) =>
                          handleChangeForm('IssueEndDate', e.target.value)
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
            <Form.Control placeholder="Enter value" as="textarea" rows={5} />
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
