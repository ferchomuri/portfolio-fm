import { fireEvent, render, screen } from "@testing-library/react";
import { HeaderContainer } from "@/presentation/pages/header/HeaderContainer";

describe("HeaderContainer", () => {
  beforeEach(() => {
    document.body.style.overflow = "";
  });

  it("should open mobile navigation when menu toggle is clicked", () => {
    render(<HeaderContainer />);

    const toggle = screen.getByRole("button", { name: /open navigation menu/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("navigation", { name: /mobile navigation/i })).toBeInTheDocument();
    expect(document.body.style.overflow).toBe("hidden");
  });

  it("should close mobile navigation when close control is clicked", () => {
    render(<HeaderContainer />);

    fireEvent.click(screen.getByRole("button", { name: /open navigation menu/i }));
    fireEvent.click(screen.getAllByRole("button", { name: /close navigation menu/i })[0]);

    expect(screen.queryByRole("navigation", { name: /mobile navigation/i })).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("");
  });

  it("should expose section navigation targets", () => {
    render(<HeaderContainer />);

    expect(screen.getByRole("navigation", { name: /main navigation/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /dashboard/i })).toHaveAttribute("href", "#hero");
    expect(screen.getByRole("link", { name: /skills/i })).toHaveAttribute("href", "#capabilities");
  });
});
