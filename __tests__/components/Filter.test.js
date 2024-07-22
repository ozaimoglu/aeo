import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Filter from "../../src/components/Filter";

let filters;
let setFilters;

beforeEach(() => {
  filters = {
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
  };

  setFilters = jest.fn();
});

describe("Filter Component", () => {
  test("renders the filter component", () => {
    render(<Filter filters={filters} setFilters={setFilters} />);
    expect(screen.getByText("Ages")).toBeInTheDocument();
    expect(screen.getByText("Costs")).toBeInTheDocument();
  });

  test("changes age filter", () => {
    render(<Filter filters={filters} setFilters={setFilters} />);
    const combobox = screen.getByRole("combobox");

    // Open the dropdown
    fireEvent.mouseDown(combobox);

    // Select the desired option
    fireEvent.click(screen.getByText(/Feudal/i));

    expect(setFilters).toHaveBeenCalledWith({ ...filters, age: "Feudal" });
  });

  test("changes cost filter", () => {
    render(<Filter filters={filters} setFilters={setFilters} />);
    fireEvent.click(screen.getByLabelText("Wood"));
    expect(setFilters).toHaveBeenCalledWith({
      ...filters,
      costs: { ...filters.costs, Wood: true }
    });
  });
});
