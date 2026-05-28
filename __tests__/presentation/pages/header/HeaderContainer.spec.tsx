import { fireEvent, screen } from "@testing-library/react";
import { HeaderContainer } from "@/presentation/pages/header/HeaderContainer";
import { renderWithI18n } from "@tests/utils/render-with-i18n";

describe("HeaderContainer", () => {
  beforeEach(() => {
    document.body.style.overflow = "";
  });

  it("should open mobile navigation when menu toggle is clicked", () => {
    renderWithI18n(<HeaderContainer />);

    const toggle = screen.getByRole("button", { name: /open navigation menu/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("navigation", { name: /mobile navigation/i })).toBeInTheDocument();
    expect(document.body.style.overflow).toBe("hidden");
  });

  it("should close mobile navigation when close control is clicked", () => {
    renderWithI18n(<HeaderContainer />);

    fireEvent.click(screen.getByRole("button", { name: /open navigation menu/i }));
    fireEvent.click(screen.getAllByRole("button", { name: /close navigation menu/i })[0]);

    expect(screen.queryByRole("navigation", { name: /mobile navigation/i })).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("");
  });

  it("should expose section navigation targets", () => {
    renderWithI18n(<HeaderContainer />);

    expect(screen.getByRole("navigation", { name: /main navigation/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /dashboard/i })).toHaveAttribute("href", "#hero");
    expect(screen.getByRole("link", { name: /skills/i })).toHaveAttribute("href", "#capabilities");
  });
});
