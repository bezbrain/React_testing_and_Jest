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
  user.click(button);
});

test("it collect name and email when form is submitted", () => {
  // Try to render my component
  render(<InputName />);

  // Find the two inputs
  // const [nameInput, emailInput] = screen.getAllByRole("textbox");
  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });

  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });

  // Simulate typing in a name
  user.click(nameInput); // Check for when name input field is focused
  user.keyboard("jane"); // Check for typing in the name input field

  // Simulate typing in an email
  user.click(emailInput); // Checl for when email input field is focused
  user.keyboard("jane@jane.com"); // Check for typing in the email input field

  // Find the button
  const button = screen.getByRole("button");

  // Simulate clicking the button
  user.click(button);
});
