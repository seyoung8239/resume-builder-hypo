import { UseFormRegister, FieldValues } from "react-hook-form";
import { Item } from "../types/item.type";
import Field from "./Field";

interface Props {
  item: Item;
}
const Group = ({ item }: Props) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <div>
        {item.childrenItemList?.map((fieldItem) => (
          <Field key={fieldItem.title} item={fieldItem} />
        ))}
      </div>
    </div>
  );
};

export default Group;
