import { Item } from "../types/item.type";
import Group from "./Group";

interface Props {
  item: Item;
}
const Field = ({ item }: Props) => {
  const { title, value, placeholder } = item;
  return (
    <div>
      <div>{title}</div>
      <input type="text" value={value} placeholder={placeholder} />
    </div>
  );
};

export default Field;
