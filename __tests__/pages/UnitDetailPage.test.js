import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import UnitDetailPage from "../../src/pages/UnitDetailPage";
import "@testing-library/jest-dom";

const mockStore = configureStore([]);

const units = [
  {
    id: 1,
    name: "Archer",
    age: "Feudal",
    cost: { Wood: 25, Gold: 45 },
    description: "Quick and light. Weak at close range; excels at battle from distance."
  },
  {
    id: 2,
    name: "Knight",
    age: "Castle",
    cost: { Food: 60, Gold: 75 },
    description: "Heavy cavalry unit."
  }
];

describe("UnitDetailPage Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      units: { units }
    });
  });

  test("renders unit details correctly with valid unitId", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/units/1"]}>
          <Routes>
            <Route path="/units/:unitId" element={<UnitDetailPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const headings = screen.getAllByText("Archer");
    expect(headings[0]).toBeInTheDocument();
    const description = screen.getAllByText(/quick and light/i);
    expect(description[0]).toBeInTheDocument();
    expect(screen.getByText(/wood: 25/i)).toBeInTheDocument();
    expect(screen.getByText(/gold: 45/i)).toBeInTheDocument();
  });

  test("renders 'Unit not found'", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/units/999"]}>
          <Routes>
            <Route path="/units/:unitId" element={<UnitDetailPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Unit not found")).toBeInTheDocument();
  });
});
