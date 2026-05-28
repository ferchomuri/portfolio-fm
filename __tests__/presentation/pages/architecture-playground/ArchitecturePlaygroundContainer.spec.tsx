import { fireEvent, screen } from "@testing-library/react";
import { ARCHITECTURE_PLAYGROUND_CONFIG } from "@/presentation/pages/architecture-playground/ArchitecturePlaygroundConfig";
import { ArchitecturePlaygroundContainer } from "@/presentation/pages/architecture-playground/ArchitecturePlaygroundContainer";
import { renderWithI18n } from "@tests/utils/render-with-i18n";

describe("ArchitecturePlaygroundContainer", () => {
  it("should render default microfrontend architecture mode", () => {
    renderWithI18n(<ArchitecturePlaygroundContainer />);

    expect(
      screen.getByText(ARCHITECTURE_PLAYGROUND_CONFIG.EXPLANATIONS.mfe),
    ).toBeInTheDocument();
    expect(screen.getByText(/Loosely Federated/i)).toBeInTheDocument();
  });

  it("should switch architecture mode when a mode button is clicked", () => {
    renderWithI18n(<ArchitecturePlaygroundContainer />);

    fireEvent.click(
      screen.getByRole("button", { name: /clean architecture/i }),
    );

    expect(
      screen.getByText(ARCHITECTURE_PLAYGROUND_CONFIG.EXPLANATIONS.clean),
    ).toBeInTheDocument();
    expect(screen.getByText(/Strict Concentric/i)).toBeInTheDocument();
    expect(
      screen.queryByText(ARCHITECTURE_PLAYGROUND_CONFIG.EXPLANATIONS.mfe),
    ).not.toBeInTheDocument();
  });

  it("should update selected node telemetry when a node is clicked", () => {
    renderWithI18n(<ArchitecturePlaygroundContainer />);

    fireEvent.click(
      screen.getByRole("button", { name: /clean architecture/i }),
    );
    fireEvent.click(screen.getByText("Domain Core"));

    expect(screen.getByText("DOMAIN")).toBeInTheDocument();
    expect(screen.getAllByText("Pure Entities").length).toBeGreaterThan(0);
  });
});
