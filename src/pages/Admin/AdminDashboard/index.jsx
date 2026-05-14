import { Badge, Card, Col, Row } from "react-bootstrap"
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const AdminDashboard = () => {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <Row>
            {['primary', 'success', 'danger', 'warning'].map((ele) => {
                return (
                    <Col sm={3} key={ele}>
                        <Card className="custom-card">
                            <div className="box p-3">
                                <div className="d-flex justify-content-between mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="shopping-cart" className="lucide lucide-shopping-cart stroke-1.5 h-[28px] w-[28px] text-primary"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                                    <div className="ml-auto">
                                        <Badge bg={ele}>Primary</Badge>
                                    </div>
                                </div>
                                <h2>4.710</h2>
                                <p className="m-0">Item Sales</p>
                            </div>
                        </Card>
                    </Col>
                )
            })}
            <Col sm={6}>
                <Card className="custom-card">
                    <Card.Header as='h4' className="p-2 border-0">Total Company</Card.Header>
                    <ResponsiveContainer width="100%" height="100%" aspect={2 / 0.96} className='p-2 pt-4'>
                        <AreaChart
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >

                            <Legend iconType='rect' verticalAlign="top" align='right' wrapperStyle={{ top: -15, left: 15 }} />
                            {/* <CartesianGrid strokeDasharray="3" /> */}
                            <XAxis dataKey="name" tickLine={false} />
                            <YAxis tickLine={false} />
                            <Tooltip />
                            <defs>
                                <linearGradient id="green" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#00E396" stopOpacity="0.4"></stop>
                                    <stop offset="95%" stopColor="#00E396" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                            <defs>
                                <linearGradient id="rose" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#FF4560" stopOpacity="0.4"></stop>
                                    <stop offset="95%" stopColor="#FF4560" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                            <defs>
                                <linearGradient id="indigo" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#6366f1" stopOpacity="0.4"></stop>
                                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                            <Area
                                type="monotone"
                                dataKey="uv"
                                stackId="1"
                                stroke="#FF4560"
                                fill="url(#rose)"
                            />
                            <Area
                                type="monotone"
                                dataKey="pv"
                                stackId="1"
                                stroke="#008ffb"
                                fill="url(#indigo)"
                            />
                            <Area
                                type="monotone"
                                dataKey="amt"
                                stackId="1"
                                stroke="#00E396"
                                fill="url(#green)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </Card>
            </Col>
            <Col sm={6}>
                <Card className="custom-card">
                <Card.Header as='h4' className="p-2 border-0">Total Register Users</Card.Header>
                    <ResponsiveContainer width="100%" height="100%" aspect={2 / 0.96} className='p-2 pt-4'>
                        <AreaChart
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >

                            <Legend iconType='rect' verticalAlign="top" align='right' wrapperStyle={{ top: -15, left: 15 }} />
                            {/* <CartesianGrid strokeDasharray="3" /> */}
                            <XAxis dataKey="name" tickLine={false} />
                            <YAxis tickLine={false} />
                            <Tooltip />
                            <defs>
                                <linearGradient id="green" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#00E396" stopOpacity="0.4"></stop>
                                    <stop offset="95%" stopColor="#00E396" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                            <defs>
                                <linearGradient id="rose" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#FF4560" stopOpacity="0.4"></stop>
                                    <stop offset="95%" stopColor="#FF4560" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                            <defs>
                                <linearGradient id="indigo" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#6366f1" stopOpacity="0.4"></stop>
                                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                            <Area
                                type="monotone"
                                dataKey="uv"
                                stackId="1"
                                stroke="#FF4560"
                                fill="url(#rose)"
                            />
                            <Area
                                type="monotone"
                                dataKey="pv"
                                stackId="1"
                                stroke="#008ffb"
                                fill="url(#indigo)"
                            />
                            <Area
                                type="monotone"
                                dataKey="amt"
                                stackId="1"
                                stroke="#00E396"
                                fill="url(#green)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </Card>
            </Col>
        </Row>
    )
}

export default AdminDashboard