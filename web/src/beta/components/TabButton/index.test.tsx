import { expect, test } from "vitest";

import { render, screen } from "@reearth/test/utils";

import TabButton from ".";

const handleClick = () => {
  console.log("Button has been clicked");
};

test("1. should be rendered", () => {
  render(<TabButton label="test1" onClick={handleClick} selected={false} />);
});

test("2. should display button label", () => {
  render(<TabButton label="test2" onClick={handleClick} selected={false} />);
  expect(screen.getByTestId("atoms-tabbutton")).toBeInTheDocument();
  expect(screen.getByText(/test2/)).toBeInTheDocument();
});

test("3. should disabled true button", () => {
  render(<TabButton label="test3" onClick={handleClick} selected={true} />);
  expect(screen.getAllByTestId("atoms-tabbutton")[0]).toBeDisabled();
});

test("4. should disabled false button", () => {
  render(<TabButton label="test4" onClick={handleClick} selected={false} />);
  expect(screen.getAllByTestId("atoms-tabbutton")[0]).not.toBeDisabled();
});
