import { Item } from "../types/item.type";
import Group from "./Group";
import {useForm, FormProvider} from "react-hook-form";
import { Form, useSubmit } from "@remix-run/react";

interface Props {
  item: Item;
}

const Step = ({ item }: Props) => {
  const submit = useSubmit();
  const methods = useForm();

  const onSubmit = (data: Object) => {
    console.log("client");
    console.log(data);

    // @ts-ignore
    submit(data, { method: "POST" });
  };

  return (
    <FormProvider {...methods}>
        <h1>{item.title}</h1>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          {item.childrenItemList?.map((groupItem) => (
            <Group key={groupItem.title} item={groupItem} />
          ))}
          <button type="submit">제출</button>
        </Form>
    </FormProvider>
  );
};

export default Step;
