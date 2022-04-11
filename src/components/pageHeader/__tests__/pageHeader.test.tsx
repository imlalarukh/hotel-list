import { render, screen } from "@testing-library/react";
import PageHeader from "../pageHeader";
import "@testing-library/jest-dom";

test("renders learn react link", () => {
  let testData = "Lala testing";
  render(<PageHeader>{testData}</PageHeader>);
  const linkElement = screen.getByText(testData);
  expect(linkElement).toBeInTheDocument();
});
