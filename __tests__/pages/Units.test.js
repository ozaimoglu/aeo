import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
import Units from "../../src/pages/Units";
import "@testing-library/jest-dom";

const mockStore = configureStore([]);

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

jest.mock("../../src/store/slices/unitSlice", () => ({
  ...jest.requireActual("../../src/store/slices/unitSlice"),
  fetchUnitsRequest: jest.fn()
}));

describe("Units Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      units: { units }
    });

    store.dispatch = jest.fn();
  });

  test("renders the Units component", () => {
    render(
      <Provider store={store}>
        <Router>
          <Units />
        </Router>
      </Provider>
    );

    expect(screen.getByText("Archer")).toBeInTheDocument();
    expect(screen.getByText("Knight")).toBeInTheDocument();
  });

  test("filters units based on age", () => {
    render(
      <Provider store={store}>
        <Router>
          <Units />
        </Router>
      </Provider>
    );

    const combobox = screen.getByRole("combobox");

    // Open the dropdown
    userEvent.click(combobox);

    // Select the "Feudal" option
    const feudalOption = screen.getAllByRole("option", { name: "Feudal" }).find(
      (option) => option.textContent === "Feudal"
    );
    userEvent.click(feudalOption);

    expect(screen.getByText("Archer")).toBeInTheDocument();
    expect(screen.queryByText("Knight")).not.toBeInTheDocument();
  });

  test("filters units based on cost", async () => {
    render(
      <Provider store={store}>
        <Router>
          <Units />
        </Router>
      </Provider>
    );

    // Select the "Wood" checkbox
    const woodCheckbox = screen.getByLabelText(/Wood/i);
    userEvent.click(woodCheckbox);

    const sliderInput = screen.getByTestId("Wood")

    // simulate slider as bigger to change its value by mouse
    sliderInput.getBoundingClientRect = jest.fn(() => {
      return {
        bottom: 286.22918701171875,
        height: 28,
        left: 19.572917938232422,
        right: 583.0937919616699,
        top: 258.22918701171875,
        width: 563.5208740234375,
        x: 19.572917938232422,
        y: 258.22918701171875,
      }
    })
    expect(sliderInput).toBeInTheDocument();
    await fireEvent.mouseDown(sliderInput, { clientX: 60, clientY: 339 })

    expect(screen.queryByText("Archer")).toBeInTheDocument();
    expect(screen.queryByText("Knight")).not.toBeInTheDocument();
  });
});
