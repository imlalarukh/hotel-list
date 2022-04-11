import { render, screen } from "@testing-library/react";
import Rating from "../rating";
import "@testing-library/jest-dom";

test("renders all full rating icons", () => {
  const { container } = render(<Rating type="star" rating={5}></Rating>);
  expect(container.getElementsByClassName("full-icon").length).toBe(5);
  expect(container.getElementsByClassName("half-icon").length).toBe(0);
  expect(container.getElementsByClassName("empty-icon").length).toBe(0);
});

test("renders all empty rating icons", () => {
  const { container } = render(<Rating type="star" rating={0}></Rating>);
  expect(container.getElementsByClassName("full-icon").length).toBe(0);
  expect(container.getElementsByClassName("half-icon").length).toBe(0);
  expect(container.getElementsByClassName("empty-icon").length).toBe(5);
});

test("renders full rating & empty icons", () => {
  const { container } = render(<Rating type="star" rating={3}></Rating>);
  expect(container.getElementsByClassName("full-icon").length).toBe(3);
  expect(container.getElementsByClassName("half-icon").length).toBe(0);
  expect(container.getElementsByClassName("empty-icon").length).toBe(2);
});

test("renders full, half & empty rating icons", () => {
  const { container } = render(<Rating type="star" rating={3.5}></Rating>);
  expect(container.getElementsByClassName("full-icon").length).toBe(3);
  expect(container.getElementsByClassName("half-icon").length).toBe(1);
  expect(container.getElementsByClassName("empty-icon").length).toBe(1);
});

test("renders full & half rating icons", () => {
  const { container } = render(<Rating type="star" rating={4.5}></Rating>);
  expect(container.getElementsByClassName("full-icon").length).toBe(4);
  expect(container.getElementsByClassName("half-icon").length).toBe(1);
  expect(container.getElementsByClassName("empty-icon").length).toBe(0);
});

/*
test("star icon is rendered based on type", () => {
  render(<Rating type="star" rating={1}></Rating>);
  const starIconElement = screen.getByText("\u2605");
  expect(starIconElement).toBeInTheDocument();
});
*/
