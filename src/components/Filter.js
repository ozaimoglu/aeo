import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  FormGroup,
  MenuItem,
  Select,
  Slider,
  Box,
  Typography
} from "@mui/material";

const Filter = ({ filters, setFilters }) => {
  const ages = ["All", "Dark", "Feudal", "Castle", "Imperial"];
  const costs = ["Wood", "Food", "Gold"];

  const handleAgeChange = (e) => {
    setFilters({ ...filters, age: e.target.value });
  };

  const handleCostCheckboxChange = (costType) => {
    const newCosts = { ...filters.costs, [costType]: !filters.costs[costType] };
    setFilters({ ...filters, costs: newCosts });
  };

  const handleSliderChange = (costType, newValue) => {
    const newCostRanges = { ...filters.costRanges, [costType]: newValue };
    setFilters({ ...filters, costRanges: newCostRanges });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Ages
      </Typography>
      <FormControl
        variant="outlined"
        style={{ marginBottom: "20px", minWidth: 120 }}
      >
        <Select value={filters.age} onChange={handleAgeChange}>
          {ages.map((age) => (
            <MenuItem key={age} value={age}>
              {age}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography variant="h6" gutterBottom>
        Costs
      </Typography>
      <FormGroup>
        {costs.map((cost) => (
          <Box key={cost} mb={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={filters.costs[cost]}
                  onChange={() => handleCostCheckboxChange(cost)}
                />
              }
              label={cost}
            />
            {filters.costs[cost] && (
              <Box px={2}>
                <Typography gutterBottom>{cost} Range</Typography>
                <Slider
                  data-testid={cost}
                  value={filters.costRanges[cost]}
                  onChange={(e, newValue) => handleSliderChange(cost, newValue)}
                  valueLabelDisplay="auto"
                  min={0}
                  max={200}
                />
              </Box>
            )}
          </Box>
        ))}
      </FormGroup>
    </Box>
  );
};

Filter.propTypes = {
  filters: PropTypes.shape({
    age: PropTypes.string.isRequired,
    costs: PropTypes.shape({
      Wood: PropTypes.bool.isRequired,
      Food: PropTypes.bool.isRequired,
      Gold: PropTypes.bool.isRequired
    }).isRequired,
    costRanges: PropTypes.shape({
      Wood: PropTypes.arrayOf(PropTypes.number).isRequired,
      Food: PropTypes.arrayOf(PropTypes.number).isRequired,
      Gold: PropTypes.arrayOf(PropTypes.number).isRequired
    }).isRequired
  }).isRequired,
  setFilters: PropTypes.func.isRequired
};

export default Filter;
