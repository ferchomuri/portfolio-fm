export const ARCHITECTURE_MODES = {
  MFE: "mfe",
  CLEAN: "clean",
  MVC: "mvc",
} as const;

export type ArchitectureMode =
  (typeof ARCHITECTURE_MODES)[keyof typeof ARCHITECTURE_MODES];

export type ArchitectureNodeType = "indigo" | "emerald" | "zinc";

export interface ArchitectureNode {
  readonly id: string;
  readonly label: string;
  readonly x: number;
  readonly y: number;
  readonly type: ArchitectureNodeType;
  readonly role: string;
}

export interface ArchitectureConnection {
  readonly from: { readonly x: number; readonly y: number };
  readonly to: { readonly x: number; readonly y: number };
  readonly color: string;
}

export interface ArchitectureModeOption {
  readonly id: ArchitectureMode;
  readonly label: string;
}

export interface ArchitectureStat {
  readonly label: string;
  readonly val: string;
}
