export const _ACTIVE_STATUS = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
} as const;

export type _ACTIVE_STATUS = typeof _ACTIVE_STATUS[keyof typeof _ACTIVE_STATUS];