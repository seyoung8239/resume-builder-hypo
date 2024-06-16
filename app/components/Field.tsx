import { useContext } from "react";
import { Item } from "../types/item.type";
import Group from "./Group";
import { RegisterContext } from "./Step";

interface Props {
  item: Item;
}
const Field = ({ item }: Props) => {
  const { title, value, placeholder } = item;
  const register = useContext(RegisterContext)!;

  return (
    <div>
      <div>{title}</div>
      <input type="text" placeholder={placeholder} {...register(title)} />
    </div>
  );
};

export default Field;
