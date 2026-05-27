"use client";

import { useState, type MouseEvent } from "react";

export interface SpotlightCoords {
  readonly x: number;
  readonly y: number;
}

export interface SpotlightCoordsState {
  readonly coords: SpotlightCoords;
  readonly hovered: boolean;
  readonly onMouseMove: (event: MouseEvent<HTMLDivElement>) => void;
  readonly onMouseEnter: () => void;
  readonly onMouseLeave: () => void;
}

export const useSpotlightCoords = (): SpotlightCoordsState => {
  const [coords, setCoords] = useState<SpotlightCoords>({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setCoords({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return {
    coords,
    hovered,
    onMouseMove,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };
};
