import { fireEvent, screen } from "@testing-library/react";
import { CAPABILITIES_SECTION_CONFIG } from "@/presentation/pages/capabilities/CapabilitiesSectionConfig";
import { CapabilitiesSectionContainer } from "@/presentation/pages/capabilities/CapabilitiesSectionContainer";
import { renderWithI18n } from "@tests/utils/render-with-i18n";

describe("CapabilitiesSectionContainer", () => {
  it("should render default frontend capabilities", () => {
    renderWithI18n(<CapabilitiesSectionContainer />);

    expect(screen.getByText("React / Next.js / TypeScript")).toBeInTheDocument();
    expect(screen.queryByText("Node.js / REST APIs")).not.toBeInTheDocument();
  });

  it("should switch capability category when a tab is clicked", () => {
    renderWithI18n(<CapabilitiesSectionContainer />);

    fireEvent.click(
      screen.getByRole("button", { name: new RegExp(CAPABILITIES_SECTION_CONFIG.CATEGORIES[1].label, "i") }),
    );

    expect(screen.getByText("Node.js / REST APIs")).toBeInTheDocument();
    expect(screen.queryByText("React / Next.js / TypeScript")).not.toBeInTheDocument();
  });
});
