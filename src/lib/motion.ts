// Shared motion constants — single source of truth for the "expensive but
// restrained" easing/duration used across Reveal and any new components.
// Mirrors the CSS vars --ease-nv / --duration-reveal / --duration-fast in
// globals.css. Keep both in sync if either changes.

export const EASE_NV = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  reveal: 0.7,
  fast: 0.3,
  slow: 0.9,
} as const;
