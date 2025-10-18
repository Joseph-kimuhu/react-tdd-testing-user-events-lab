import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../App";

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  render(<App />);

  const nameInput = screen.getByPlaceholderText(/enter your name/i);
  const emailInput = screen.getByPlaceholderText(/enter your email/i);

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  render(<App />);

  expect(screen.getByLabelText(/coding/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/design/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/marketing/i)).toBeInTheDocument();
});

test("the checkboxes are initially unchecked", () => {
  render(<App />);

  expect(screen.getByLabelText(/coding/i)).not.toBeChecked();
  expect(screen.getByLabelText(/design/i)).not.toBeChecked();
  expect(screen.getByLabelText(/marketing/i)).not.toBeChecked();
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  render(<App />);

  const nameInput = screen.getByPlaceholderText(/enter your name/i);
  const emailInput = screen.getByPlaceholderText(/enter your email/i);

  userEvent.type(nameInput, "Jane Doe");
  userEvent.type(emailInput, "jane@example.com");

  expect(nameInput).toHaveValue("Jane Doe");
  expect(emailInput).toHaveValue("jane@example.com");
});

test("checked status of checkboxes changes when user clicks them", () => {
  render(<App />);

  const codingCheckbox = screen.getByLabelText(/coding/i);
  const designCheckbox = screen.getByLabelText(/design/i);

  userEvent.click(codingCheckbox);
  expect(codingCheckbox).toBeChecked();

  userEvent.click(designCheckbox);
  expect(designCheckbox).toBeChecked();

  userEvent.click(codingCheckbox);
  expect(codingCheckbox).not.toBeChecked();
});

test("a message is displayed when the user clicks the Submit button", () => {
  render(<App />);

  const nameInput = screen.getByPlaceholderText(/enter your name/i);
  const emailInput = screen.getByPlaceholderText(/enter your email/i);
  const submitButton = screen.getByRole("button", { name: /submit/i });

  userEvent.type(nameInput, "Alex");
  userEvent.type(emailInput, "alex@example.com");

  userEvent.click(submitButton);

  expect(screen.getByText(/thanks for signing up, alex/i)).toBeInTheDocument();
  expect(
    screen.getByText(/we'll contact you at alex@example.com/i)
  ).toBeInTheDocument();
});
