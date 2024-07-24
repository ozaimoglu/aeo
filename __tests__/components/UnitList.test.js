import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import UnitList from "../../src/components/UnitList";
import "@testing-library/jest-dom";

const units = [
  {
    id: 1,
    name: "Archer",
    age: "Feudal",
    cost: { Wood: 25, Gold: 45 }
  },
  {
    id: 2,
    name: "Knight",
    age: "Castle",
    cost: { Food: 60, Gold: 75 }
  }
];

describe("UnitList Component", () => {
  test("renders the unit list", () => {
    render(
      <Router>
        <UnitList units={units} />
      </Router>
    );
    expect(screen.getByText("Archer")).toBeInTheDocument();
    expect(screen.getByText("Knight")).toBeInTheDocument();
    expect(screen.getByText("Feudal")).toBeInTheDocument();
    expect(screen.getByText("Castle")).toBeInTheDocument();
  });

  test("handles row click", () => {
    const { container } = render(
      <Router>
        <UnitList units={units} />
      </Router>
    );
    const firstRow = container.querySelector("tbody tr");
    fireEvent.click(firstRow);
    expect(window.location.pathname).toBe("/units/1");
  });

  test("renders unit costs", () => {
    render(
      <Router>
        <UnitList units={units} />
      </Router>
    );
    expect(screen.getByText(/Wood: 25/i)).toBeInTheDocument();
    expect(screen.getByText(/Gold: 45/i)).toBeInTheDocument();
    expect(screen.getByText(/Food: 60/i)).toBeInTheDocument();
    expect(screen.getByText(/Gold: 75/i)).toBeInTheDocument();
  });

  test("renders empty state", () => {
    render(
      <Router>
        <UnitList units={[]} />
      </Router>
    );
    expect(screen.getByText(/no units available/i)).toBeInTheDocument();
  });
});
