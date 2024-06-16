import { Item } from "../types/item.type";
import Group from "./Group";

interface Props {
  item: Item;
}
const Step = ({ item }: Props) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <div>
        {item.childrenItemList?.map((groupItem) => (
          <Group item={groupItem} />
        ))}
      </div>
    </div>
  );
};

export default Step;
