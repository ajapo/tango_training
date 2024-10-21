import { render, screen } from "@testing-library/react";
import Form from "./Form";
import userEvent from "@testing-library/user-event";

describe("Form", () => {
  it("初期状態ではテキストは空欄", () => {
    render(<Form />);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  it("入力したテキストが佐文っとされる", async () => {
    render(<Form />);
    const user = userEvent.setup();
    const input = screen.getByPlaceholderText("Enter text");
    await user.type(input, "Test Text");
    expect(screen.getByDisplayValue("Test Text")).toBeInTheDocument();
    const button = screen.getByRole("button");
    await user.click(button);
  });
});
