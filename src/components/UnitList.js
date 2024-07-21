import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const UnitList = ({ units }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {units.map((unit) => (
            <TableRow key={unit.id}>
              <TableCell component={Link} to={`/units/${unit.id}`}>{unit.name}</TableCell>
              <TableCell>{unit.age}</TableCell>
              <TableCell>
                {Object.entries(unit.cost || {}).map(([key, value]) => (
                  <span key={key}>
                    {key}: {value} <br />
                  </span>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UnitList;
