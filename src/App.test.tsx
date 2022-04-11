import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("renders hotels", () => {
  render(<App />);
  const linkElement = screen.getByText(/hotels/i);
  expect(linkElement).toBeInTheDocument();
});
