export interface Item {
  itemType: string;
  title: string;
  childrenItemList?: Item[];
  value?: string;
  placeholder?: string;
}
