import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Box, Pagination } from "@mui/material";
import Header from "../components/Header";
import Filter from "../components/Filter";
import UnitList from "../components/UnitList";
import { fetchUnitsRequest } from "../store/slices/unitSlice";

const Units = () => {
  const dispatch = useDispatch();
  const units = useSelector((state) => state.units.units);
  const [filters, setFilters] = useState({
    age: "All",
    costs: {
      Wood: false,
      Food: false,
      Gold: false
    },
    costRanges: {
      Wood: [0, 200],
      Food: [0, 200],
      Gold: [0, 200]
    }
  });
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    dispatch(fetchUnitsRequest());
  }, [dispatch]);

  const filteredUnits = units.filter((unit) => {
    if (filters.age !== "All" && unit.age !== filters.age) return false; // Filter by age
    return Object.entries(filters.costs).every(([cost, isChecked]) => {
      // Filter by cost
      if (isChecked) {
        const [min, max] = filters.costRanges[cost];
        const unitCost = unit.cost?.[cost] || 0; // there are null values in cost, so consider 0 if it's null
        return unitCost >= min && unitCost <= max;
      }
      return true;
    });
  });

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const paginatedUnits = filteredUnits.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div>
      <Header />
      <Container>
        <Box my={4}>
          <Filter filters={filters} setFilters={setFilters} />
          <UnitList units={paginatedUnits} />
          <Box display="flex" justifyContent="center" mt={4}>
            <Pagination
              count={Math.ceil(filteredUnits.length / itemsPerPage)}
              page={page}
              onChange={handlePageChange}
            />
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Units;
