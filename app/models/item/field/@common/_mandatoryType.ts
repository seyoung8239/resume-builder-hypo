export const _MANDATORY_TYPE = {
  MANDATORY: 'MANDATORY',
  OPTION: 'OPTION',
} as const;

export type _MANDATORY_TYPE = typeof _MANDATORY_TYPE[keyof typeof _MANDATORY_TYPE];