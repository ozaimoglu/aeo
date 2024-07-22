import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";

const UnitList = ({ units }) => {
  const navigate = useNavigate();

  const handleRowClick = (unitId) => {
    navigate(`/units/${unitId}`);
  };

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
          {units.length > 0 ? (
            units.map((unit) => (
              <TableRow
                key={unit.id}
                style={{ cursor: "pointer" }}
                onClick={() => handleRowClick(unit.id)}
              >
                <TableCell>{unit.name}</TableCell>
                <TableCell>{unit.age}</TableCell>
                <TableCell>
                  {Object.entries(unit.cost || {}).map(([key, value]) => (
                    <span key={key}>
                      {key}: {value} <br />
                    </span>
                  ))}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} align="center">
                No units available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

UnitList.propTypes = {
  units: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.string.isRequired,
      cost: PropTypes.objectOf(PropTypes.number)
    })
  ).isRequired
};

export default UnitList;
