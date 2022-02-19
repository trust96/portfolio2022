import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("Button", () => {
  render(<Button>trust</Button>);
  const button = screen.getByText("trust");
  expect(button).toBeInTheDocument();
});
