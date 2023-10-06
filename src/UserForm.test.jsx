import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import InputName from "./components/inputName";

test("it shows two inputs and a button", () => {
  // Render the component
  // render(<App />);
  render(<InputName />);

  // Find an element in the component
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Make sure the component is doing what is expected to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it makes sure button is clickable", () => {
  // Render the component
  render(<InputName />);

  // Find button element in the component
  const button = screen.getByText("Submit");

  // Check that the button is initially enabled
  expect(button).toBeEnabled();

  // Make sure component is working as expected
  fireEvent.click(button);
});

// test("it collect name and email when form is submitted", () => {
//   // NOT THE BEST IMPLEMENTATION

//   // Try to render my component
//   render(<App />);

//   // Find the two inputs
//   const [nameinput, emailInput] = screen.getAllByRole("textbox");

//   // Simulate typing in a name
//   user.click(nameinput);
//   user.keyboard("jane");

//   // Simulate typing in an email
//   user.click(emailInput);
//   user.keyboard("jane@jane.com");

//   // Find the button
//   const button = screen.getByRole("button");

//   // Simulate clicking the button
//   button.click(button);
// });
