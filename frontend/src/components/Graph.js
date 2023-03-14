import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { makeStyles } from '@material-ui/core/styles';

const data = [
    { name: 'Emma', cases: 100, cashGenerated: 50 },
    { name: 'Noah', cases: 200, cashGenerated: 100 },
    { name: 'Olivia', cases: 150, cashGenerated: 80 },
    { name: 'Liam', cases: 300, cashGenerated: 150 },
    { name: 'Ava', cases: 200, cashGenerated: 120 },
    { name: 'William', cases: 250, cashGenerated: 180 },
    { name: 'Sophia', cases: 200, cashGenerated: 90 },
  ];
  

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '300px', // Set the height of the parent container explicitly
  },
});

const Graph = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" label={{ value: 'Number of Cases per Employee', angle: -90, position: 'insideLeft' }} />
          <YAxis yAxisId="right" orientation="right" label={{ value: 'Cash Generated ($)', angle: -90, position: 'insideRight' }} />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="cases" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="cashGenerated" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
