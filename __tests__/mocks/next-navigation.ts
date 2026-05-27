import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const mockPush = jest.fn<
  ReturnType<AppRouterInstance["push"]>,
  Parameters<AppRouterInstance["push"]>
>();
export const mockReplace = jest.fn<
  ReturnType<AppRouterInstance["replace"]>,
  Parameters<AppRouterInstance["replace"]>
>();
export const mockBack = jest.fn<
  ReturnType<AppRouterInstance["back"]>,
  Parameters<AppRouterInstance["back"]>
>();
export const mockForward = jest.fn<
  ReturnType<AppRouterInstance["forward"]>,
  Parameters<AppRouterInstance["forward"]>
>();
export const mockRefresh = jest.fn<
  ReturnType<AppRouterInstance["refresh"]>,
  Parameters<AppRouterInstance["refresh"]>
>();
export const mockPrefetch = jest.fn<
  ReturnType<AppRouterInstance["prefetch"]>,
  Parameters<AppRouterInstance["prefetch"]>
>();

export const mockedUseRouter = jest.fn((): AppRouterInstance => ({
  push: mockPush,
  replace: mockReplace,
  back: mockBack,
  forward: mockForward,
  refresh: mockRefresh,
  prefetch: mockPrefetch,
}));

export const resetNextNavigationMocks = (): void => {
  mockPush.mockReset();
  mockReplace.mockReset();
  mockBack.mockReset();
  mockForward.mockReset();
  mockRefresh.mockReset();
  mockPrefetch.mockReset();
  mockedUseRouter.mockReset();
  mockedUseRouter.mockImplementation(() => ({
    push: mockPush,
    replace: mockReplace,
    back: mockBack,
    forward: mockForward,
    refresh: mockRefresh,
    prefetch: mockPrefetch,
  }));
};
