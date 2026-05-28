import { act, fireEvent, screen, waitFor } from "@testing-library/react";
import { sendContactMessage } from "@/data/repositories/contact-repository";
import { CONTACT_CTA_CONFIG } from "@/presentation/pages/contact/ContactCTAConfig";
import { ContactCTAContainer } from "@/presentation/pages/contact/ContactCTAContainer";
import { renderWithI18n } from "@tests/utils/render-with-i18n";

jest.mock("@/data/repositories/contact-repository");

const mockedSendContactMessage = jest.mocked(sendContactMessage);

const totalBootMs =
  CONTACT_CTA_CONFIG.BOOT_LOGS.length * CONTACT_CTA_CONFIG.BOOT_LOG_DELAY_MS +
  CONTACT_CTA_CONFIG.BOOT_READY_DELAY_MS;

const advanceBootSequence = (): void => {
  act(() => {
    jest.advanceTimersByTime(totalBootMs);
  });
};

const renderContactFormReady = (): void => {
  jest.useFakeTimers();
  renderWithI18n(<ContactCTAContainer />);
  advanceBootSequence();
  jest.useRealTimers();
};

describe("ContactCTAContainer", () => {
  beforeEach(() => {
    mockedSendContactMessage.mockReset();
    mockedSendContactMessage.mockResolvedValue(undefined);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should render boot sequence before showing the contact form", () => {
    jest.useFakeTimers();
    renderWithI18n(<ContactCTAContainer />);

    expect(screen.getByText(CONTACT_CTA_CONFIG.BOOT_COMMAND)).toBeInTheDocument();
    expect(screen.queryByLabelText(CONTACT_CTA_CONFIG.EMAIL_LABEL)).not.toBeInTheDocument();

    advanceBootSequence();

    expect(screen.getByLabelText(CONTACT_CTA_CONFIG.EMAIL_LABEL)).toBeInTheDocument();
    expect(screen.getByLabelText(CONTACT_CTA_CONFIG.MESSAGE_LABEL)).toBeInTheDocument();
  });

  it("should submit contact payload when form is completed", async () => {
    renderContactFormReady();

    fireEvent.change(screen.getByLabelText(CONTACT_CTA_CONFIG.EMAIL_LABEL), {
      target: { value: "operator@system.io" },
    });
    fireEvent.change(screen.getByLabelText(CONTACT_CTA_CONFIG.MESSAGE_LABEL), {
      target: { value: "Ready to collaborate on platform work." },
    });

    fireEvent.click(
      screen.getByRole("button", { name: new RegExp(CONTACT_CTA_CONFIG.SUBMIT_LABEL, "i") }),
    );

    await waitFor(() => {
      expect(mockedSendContactMessage).toHaveBeenCalledWith({
        fromEmail: "operator@system.io",
        message: "Ready to collaborate on platform work.",
      });
    });

    expect(
      screen.getByRole("heading", { name: new RegExp(CONTACT_CTA_CONFIG.SUCCESS_TITLE, "i") }),
    ).toBeInTheDocument();
  });

  it("should render configuration error when email pipeline is unavailable", async () => {
    mockedSendContactMessage.mockRejectedValue(new Error("EMAIL_CONFIG_MISSING"));

    renderContactFormReady();

    fireEvent.change(screen.getByLabelText(CONTACT_CTA_CONFIG.EMAIL_LABEL), {
      target: { value: "operator@system.io" },
    });
    fireEvent.change(screen.getByLabelText(CONTACT_CTA_CONFIG.MESSAGE_LABEL), {
      target: { value: "Need help with architecture." },
    });

    fireEvent.click(
      screen.getByRole("button", { name: new RegExp(CONTACT_CTA_CONFIG.SUBMIT_LABEL, "i") }),
    );

    await waitFor(() => {
      expect(screen.getByText(CONTACT_CTA_CONFIG.CONFIG_ERROR)).toBeInTheDocument();
    });
  });
});
