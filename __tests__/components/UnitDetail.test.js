import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UnitDetail from "../../src/components/UnitDetail";

const unit = {
  name: "Archer",
  age: "Feudal",
  cost: { Wood: 25, Gold: 45 },
  description: "Quick and light."
};

describe("UnitDetail Component", () => {
  test("renders unit details correctly", () => {
    render(<UnitDetail unit={unit} />);
    expect(screen.getByText("Archer", { selector: "div" })).toBeInTheDocument();
    expect(screen.getByText(/age/i)).toBeInTheDocument();
    expect(screen.getByText(/feudal/i)).toBeInTheDocument();
    expect(screen.getByText(/wood: 25/i)).toBeInTheDocument();
    expect(screen.getByText(/gold: 45/i)).toBeInTheDocument();
    const descriptionElements = screen.getAllByText(/quick and light/i);
    expect(descriptionElements[0]).toBeInTheDocument();
  });
});
