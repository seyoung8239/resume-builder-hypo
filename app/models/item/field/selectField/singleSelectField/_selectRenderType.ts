export const _SELECT_RENDER_TYPE = {
  DROP_DOWN : 'DROP_DOWN',
  RADIO : 'RADIO',
  TAB : 'TAB',
} as const;

export type _SELECT_RENDER_TYPE = typeof _SELECT_RENDER_TYPE[keyof typeof _SELECT_RENDER_TYPE];

export const SELECT_RENDER_TYPE_NAME: Record<
  _SELECT_RENDER_TYPE,
  string
> = {
  [_SELECT_RENDER_TYPE.DROP_DOWN]: '드롭다운',
  [_SELECT_RENDER_TYPE.RADIO]: '라디오',
  [_SELECT_RENDER_TYPE.TAB]: '탭',
} as const;

