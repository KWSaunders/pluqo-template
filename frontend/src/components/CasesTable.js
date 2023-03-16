import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    borderCollapse: 'separate',
    borderSpacing: '0 5px',
    height: '100%',
  },
  headerCell: {
    fontWeight: 'bold',
    backgroundColor: '#f2f2f2',
    borderBottom: '1px solid #ddd',
  },
  rowCell: {
    borderBottom: '1px solid #ddd',
  },
});

const rows = [
  { client: 'Client A', responsibleAttorney: 'John Doe', originalAttorney: 'Jane Smith', practiceArea: 'Corporate Law', caseDate: '01/01/2023' },
  { client: 'Client B', responsibleAttorney: 'Jane Smith', originalAttorney: 'John Doe', practiceArea: 'Intellectual Property', caseDate: '02/15/2023' },
  { client: 'Client C', responsibleAttorney: 'Bob Johnson', originalAttorney: 'John Doe', practiceArea: 'Real Estate', caseDate: '03/01/2023' },
];

function TableComponent() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.headerCell} align="left">Client</TableCell>
            <TableCell className={classes.headerCell} align="left">Responsible Attorney</TableCell>
            <TableCell className={classes.headerCell} align="left">Original Attorney</TableCell>
            <TableCell className={classes.headerCell} align="left">Practice Area</TableCell>
            <TableCell className={classes.headerCell} align="left">Case Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.client}>
              <TableCell className={classes.rowCell} align="left">{row.client}</TableCell>
              <TableCell className={classes.rowCell} align="left">{row.responsibleAttorney}</TableCell>
              <TableCell className={classes.rowCell} align="left">{row.originalAttorney}</TableCell>
              <TableCell className={classes.rowCell} align="left">{row.practiceArea}</TableCell>
              <TableCell className={classes.rowCell} align="left">{row.caseDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
