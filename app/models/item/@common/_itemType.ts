export const _ITEM_TYPE = {
  GROUP: 'GROUP',
  FIELD: 'FIELD',
}

export type _ITEM_TYPE = typeof _ITEM_TYPE[keyof typeof _ITEM_TYPE];