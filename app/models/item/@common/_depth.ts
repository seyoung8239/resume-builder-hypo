export const _DEPTH = {
  STEP: 'STEP',
  BLOCK: 'BLOCK',
  GROUP: 'GROUP',
  FIELD: 'FIELD',
} as const;

export type _DEPTH = typeof _DEPTH[keyof typeof _DEPTH];