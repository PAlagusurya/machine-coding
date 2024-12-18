import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import holidayDestinations from "./data";

describe("App Component", () => {
  test("should render a checkbox and its label", () => {
    render(<App />);

    expect(
      screen.getByLabelText("Allow multiple accordions to open simultaneously?")
    ).toBeInTheDocument();

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  test("toggles allowMultipleOpen state when checkbox is clicked", () => {
    render(<App />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test("check if all the data is loaded in the accordian", () => {
    render(<App />);

    holidayDestinations.map((destination) => {
      expect(screen.getByText(destination.title)).toBeInTheDocument();
    });
  });

  test("restricts multiple accordian panels from opening when checkbox is unchecked", () => {
    render(<App />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();

    const [firstAccordianButton, secondAccordianButton] =
      screen.getAllByRole("button");

    fireEvent.click(firstAccordianButton);
    expect(firstAccordianButton).toHaveTextContent("-");

    fireEvent.click(secondAccordianButton);
    expect(firstAccordianButton).toBeInTheDocument("+");
    expect(secondAccordianButton).toHaveTextContent("-");
  });

  test("allows multiple accordian panels to open when checkbox is checked", () => {
    render(<App />);

    const [firstAccordianButton, secondAccordianButton] =
      screen.getAllByRole("button");

    fireEvent.click(firstAccordianButton);
    expect(firstAccordianButton).toHaveTextContent("-");

    fireEvent.click(secondAccordianButton);
    expect(firstAccordianButton).toHaveTextContent("-");
    expect(secondAccordianButton).toHaveTextContent("-");
  });
});
