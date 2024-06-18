import { Item } from "../types/item.type";
import {useFormContext} from "react-hook-form";

interface Props {
  item: Item;
}
const Field = ({ item }: Props) => {
  const { title, value, placeholder } = item;
  const { register } = useFormContext();

  return (
    <div>
      <div>{title}</div>
      <input type="text" placeholder={placeholder} {...register(title)} />
    </div>
  );
};

export default Field;
