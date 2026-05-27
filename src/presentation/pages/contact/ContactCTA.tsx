import type { FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Terminal as TerminalIcon, ShieldAlert, Cpu } from "lucide-react";
import { staggerContainer, VIEWPORT_ONCE } from "@/presentation/animations/MotionConfig";
import { CONTACT_CTA_CONFIG } from "@/presentation/pages/contact/ContactCTAConfig";
import type { ContactBootState } from "@/presentation/pages/contact/hooks/useContactBootSequence";

export interface ContactCTAProps {
  readonly bootState: ContactBootState;
  readonly bootLogs: readonly string[];
  readonly email: string;
  readonly message: string;
  readonly submitted: boolean;
  readonly isSending: boolean;
  readonly error: string | null;
  readonly linkedinHref: string;
  readonly onEmailChange: (value: string) => void;
  readonly onMessageChange: (value: string) => void;
  readonly onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}

export function ContactCTA({
  bootState,
  bootLogs,
  email,
  message,
  submitted,
  isSending,
  error,
  linkedinHref,
  onEmailChange,
  onMessageChange,
  onSubmit,
}: ContactCTAProps) {
  return (
    <section
      id={CONTACT_CTA_CONFIG.SECTION_ID}
      className="relative w-full overflow-hidden px-6 py-24 md:px-12 bg-zinc-950/20"
    >
      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mb-12 text-center space-y-4"
        >
          <div className="flex justify-center items-center gap-2 text-indigo-400 font-mono text-xs font-bold tracking-widest">
            <TerminalIcon className="h-4 w-4" />
            <span>{CONTACT_CTA_CONFIG.EYEBROW}</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl">
            {CONTACT_CTA_CONFIG.TITLE}
          </h2>
          <p className="max-w-md mx-auto text-sm text-zinc-400 leading-relaxed font-sans">
            {CONTACT_CTA_CONFIG.DESCRIPTION}
          </p>
        </motion.div>

        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/90 shadow-2xl backdrop-blur-sm"
        >
          <div className="flex items-center justify-between border-b border-zinc-950 bg-black/60 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-indigo-500 animate-pulse" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                {CONTACT_CTA_CONFIG.CONSOLE_LABEL}
              </span>
            </div>
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-zinc-800" />
              <span className="h-2 w-2 rounded-full bg-zinc-800" />
              <span className="h-2 w-2 rounded-full bg-zinc-800" />
            </div>
          </div>

          <div className="p-6">
            <AnimatePresence mode="wait">
              {bootState === "booting" ? (
                <motion.div
                  key="booting"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="font-mono text-[10px] text-zinc-400 space-y-2 min-h-[140px]"
                >
                  <div className="text-zinc-600">{CONTACT_CTA_CONFIG.BOOT_COMMAND}</div>
                  {bootLogs.map((log, i) => {
                    const isSuccess = log.includes("✔");
                    return (
                      <div key={i} className={isSuccess ? "text-emerald-400" : "text-zinc-300"}>
                        {log}
                      </div>
                    );
                  })}
                  <div className="flex items-center gap-0.5">
                    <span className="text-zinc-600">&gt;</span>
                    <span className="inline-block h-3.5 w-1.5 bg-zinc-400 animate-pulse" />
                  </div>
                </motion.div>
              ) : submitted ? (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-8 space-y-4"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                    <Cpu className="h-6 w-6 animate-pulse" />
                  </div>
                  <h3 className="font-mono text-xs font-bold text-zinc-100 uppercase tracking-widest">
                    {CONTACT_CTA_CONFIG.SUCCESS_TITLE}
                  </h3>
                  <p className="max-w-xs mx-auto font-sans text-xs text-zinc-400 leading-relaxed">
                    {CONTACT_CTA_CONFIG.SUCCESS_MESSAGE}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4 font-mono text-[10px]"
                >
                  <div className="flex items-center gap-3 rounded-lg border border-zinc-900 bg-zinc-900/10 px-3.5 py-2.5 text-zinc-500">
                    <ShieldAlert className="h-4 w-4 text-indigo-400/80 shrink-0" />
                    <span>{CONTACT_CTA_CONFIG.HANDSHAKE_WARNING}</span>
                  </div>

                  {error && (
                    <div className="rounded-lg border border-rose-500/20 bg-rose-500/5 px-3.5 py-2.5 text-[10px] text-rose-200">
                      {error}{" "}
                      <a
                        className="underline underline-offset-2 text-rose-100 hover:text-white"
                        href={linkedinHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="pointer"
                      >
                        {CONTACT_CTA_CONFIG.LINKEDIN_FALLBACK_LABEL}
                      </a>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-zinc-500 uppercase font-semibold">
                      {CONTACT_CTA_CONFIG.EMAIL_LABEL}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => onEmailChange(e.target.value)}
                      placeholder={CONTACT_CTA_CONFIG.EMAIL_PLACEHOLDER}
                      className="w-full rounded-lg border border-zinc-900 bg-black/60 px-3 py-2 text-zinc-100 placeholder-zinc-700 transition-all duration-200 focus:border-indigo-500/50 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-zinc-500 uppercase font-semibold">
                      {CONTACT_CTA_CONFIG.MESSAGE_LABEL}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      autoComplete="off"
                      required
                      value={message}
                      onChange={(e) => onMessageChange(e.target.value)}
                      placeholder={CONTACT_CTA_CONFIG.MESSAGE_PLACEHOLDER}
                      className="w-full rounded-lg border border-zinc-900 bg-black/60 px-3 py-2 text-zinc-100 placeholder-zinc-700 transition-all duration-200 focus:border-indigo-500/50 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="group flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-3 text-xs font-bold text-white shadow shadow-indigo-600/10 transition-all duration-300 hover:bg-indigo-500 hover:scale-[1.01] active:scale-[0.99]"
                    data-cursor="pointer"
                  >
                    <span>
                      {isSending
                        ? CONTACT_CTA_CONFIG.SUBMITTING_LABEL
                        : CONTACT_CTA_CONFIG.SUBMIT_LABEL}
                    </span>
                    <Send className="h-3.5 w-3.5 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
