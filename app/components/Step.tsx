import { createContext, useState } from "react";
import { Item } from "../types/item.type";
import Group from "./Group";
import { useForm, FieldValues, type UseFormRegister } from "react-hook-form";
import { Form, useSubmit } from "@remix-run/react";

interface Props {
  item: Item;
}
export const RegisterContext =
  createContext<UseFormRegister<FieldValues> | null>(null);

const Step = ({ item }: Props) => {
  const submit = useSubmit();
  const { handleSubmit, register } = useForm();

  const onSubmit = (data: Object) => {
    console.log("client");
    console.log(data);

    // @ts-ignore
    submit(data, { method: "POST" });
  };

  return (
    <RegisterContext.Provider value={register}>
      <div>
        <h1>{item.title}</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {item.childrenItemList?.map((groupItem) => (
            <Group key={groupItem.title} item={groupItem} />
          ))}
          <button type="submit">제출</button>
        </Form>
      </div>
    </RegisterContext.Provider>
  );
};

export default Step;
