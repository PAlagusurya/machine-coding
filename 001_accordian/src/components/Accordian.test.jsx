import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Accordian from "./Accordian";

describe("Accordian component", () => {
  const mockToggleFunction = jest.fn();

  const defaultProps = {
    id: 1,
    title: "Test the title",
    info: "Testing with the mock data",
    isOpen: false,
    toggleAccordian: mockToggleFunction,
  };

  test("renders title and information text correctly", () => {
    render(<Accordian {...defaultProps} />);
    expect(screen.getByText("Test the title")).toBeInTheDocument();
    expect(screen.getByText("Testing with the mock data")).toBeInTheDocument();
  });

  test("displays + button when accordian is closed and - button when accordian is open", () => {
    const { rerender } = render(<Accordian {...defaultProps} />);
    expect(screen.getByRole("button")).toHaveTextContent("+");

    rerender(<Accordian {...defaultProps} isOpen={true} />);
    expect(screen.getByRole("button")).toHaveTextContent("-");
  });

  test("invokes toggle function with correct id on button click", () => {
    render(<Accordian {...defaultProps} />);

    fireEvent.click(screen.getByRole("button"));
    expect(mockToggleFunction).toHaveBeenCalledWith(1);
  });

  test("applies 'open' class to content container when accordian is open", () => {
    const { rerender } = render(<Accordian {...defaultProps} />);
    const contentElement = screen.getByText("Testing with the mock data");
    expect(contentElement).not.toHaveClass("open");

    rerender(<Accordian {...defaultProps} isOpen={true} />);
    expect(contentElement).toHaveClass("open");
  });
});
