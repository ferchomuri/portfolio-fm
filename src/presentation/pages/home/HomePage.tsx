"use client";

import type { ReactNode } from "react";
import { HOME_PAGE_CONFIG } from "@/presentation/pages/home/HomePageConfig";

export interface HomePageProps {
  readonly customCursor: ReactNode;
  readonly header: ReactNode;
  readonly main: ReactNode;
  readonly footer: ReactNode;
}

export function HomePage({ customCursor, header, main, footer }: HomePageProps) {
  return (
    <>
      {customCursor}
      <div className={HOME_PAGE_CONFIG.SHELL_CLASS}>
        {header}
        <main className={HOME_PAGE_CONFIG.MAIN_CLASS}>{main}</main>
        {footer}
      </div>
    </>
  );
}
