import { createContext, useState } from "react";
import { Item } from "../types/item.type";
import Group from "./Group";
import { useForm, FieldValues, type UseFormRegister } from "react-hook-form";

interface Props {
  item: Item;
}
export const RegisterContext =
  createContext<UseFormRegister<FieldValues> | null>(null);

const Step = ({ item }: Props) => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data: Object) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <h1>{item.title}</h1>
      <RegisterContext.Provider value={register}>
        {item.childrenItemList?.map((groupItem) => (
          <Group key={groupItem.title} item={groupItem} />
        ))}
        <button type="submit" onClick={handleSubmit(onSubmit)}>
          제출
        </button>
      </RegisterContext.Provider>
    </div>
  );
};

export default Step;
