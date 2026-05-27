import "@testing-library/jest-dom";
import type { PropsWithChildren, ReactNode } from "react";
import { createElement, forwardRef } from "react";

const motionPropKeys = new Set([
  "initial",
  "animate",
  "exit",
  "transition",
  "variants",
  "whileInView",
  "whileHover",
  "viewport",
  "layout",
  "layoutId",
]);

const createMotionComponent = (tag: string) => {
  const MotionComponent = forwardRef<HTMLElement, PropsWithChildren>(
    ({ children, ...props }, ref) => {
      const domProps = Object.fromEntries(
        Object.entries(props as Record<string, unknown>).filter(
          ([key]) => !motionPropKeys.has(key),
        ),
      );
      return createElement(tag, { ...domProps, ref }, children);
    },
  );
  MotionComponent.displayName = `Motion${tag}`;
  return MotionComponent;
};

const motionTags = [
  "div",
  "span",
  "header",
  "nav",
  "section",
  "form",
  "button",
  "path",
  "h2",
  "h3",
  "p",
] as const;

const motion = motionTags.reduce(
  (accumulator, tag) => {
    accumulator[tag] = createMotionComponent(tag);
    return accumulator;
  },
  {} as Record<string, ReturnType<typeof createMotionComponent>>,
);

jest.mock("framer-motion", () => ({
  motion,
  AnimatePresence: ({ children }: { children: ReactNode }) => children,
  useMotionValue: (initial: number) => ({
    get: () => initial,
    set: jest.fn(),
  }),
  useSpring: (value: unknown) => value,
  useScroll: () => ({
    scrollYProgress: { get: () => 0 },
  }),
  useTransform: () => 0,
}));

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

class IntersectionObserverMock {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: IntersectionObserverMock,
});
