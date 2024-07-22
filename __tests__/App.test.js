import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../src/App";

test("renders Age of Empires Units link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Age of Empires Units/i);
  expect(linkElement).toBeInTheDocument();
});
