import { Card } from 'react-bootstrap';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Analytics = () => {
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
    <Card className="border-1 m-0">
      <Card.Header as='h4' className='p-2 text-primary'>Cras justo odio</Card.Header>

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

          <Legend iconType='rect' verticalAlign="top" align='left' wrapperStyle={{top:-15, left:15}} />
          <CartesianGrid strokeDasharray="3" />
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
  );
};

export default Analytics;
