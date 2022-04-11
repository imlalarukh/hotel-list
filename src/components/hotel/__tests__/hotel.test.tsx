import { render, screen } from "@testing-library/react";
import Hotel from "../hotel";
import "@testing-library/jest-dom";
import hotelMockData from "../__mocks__/hotelData.json";
import hotelMockDataWithoutCancellation from "../__mocks__/hotelDataWithoutCancellation.json";

test("renders hotel info", () => {
  let hotelTitle = "Courtyard by Marriott Sydney-North Ryde";
  let hotelRoomName = "Deluxe Balcony Room";

  render(<Hotel hotelData={hotelMockData}></Hotel>);
  const hotelTitleElement = screen.getByText(hotelTitle);
  const hotelRoomNameElement = screen.getByText(hotelRoomName);
  expect(hotelTitleElement).toBeInTheDocument();
  expect(hotelRoomNameElement).toBeInTheDocument();
});

test("renders cancellation info when available", () => {
  const { container } = render(<Hotel hotelData={hotelMockData}></Hotel>);
  expect(container.getElementsByClassName("cancellation-text").length).toBe(1);
});

test("does not render cancellation info when not available", () => {
  const { container } = render(
    <Hotel hotelData={hotelMockDataWithoutCancellation}></Hotel>
  );
  expect(container.getElementsByClassName("cancellation-text").length).toBe(0);
});

test("renders savings amount when available", () => {
  const { container } = render(<Hotel hotelData={hotelMockData}></Hotel>);
  expect(container.getElementsByClassName("savings-amount").length).toBe(1);
});

test("does not render savings amount when not available", () => {
  const { container } = render(
    <Hotel hotelData={hotelMockDataWithoutCancellation}></Hotel>
  );
  expect(container.getElementsByClassName("savings-amount").length).toBe(0);
});
