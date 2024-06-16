import { useLoaderData } from "@remix-run/react";
import { Item } from "../types/item.type";
import { step1data } from "../config/step1.config";
import Step from "../components/Step";
import { ActionFunctionArgs } from "@remix-run/node";

const getData = async () => new Promise((res) => res(step1data));

export const loader = async () => await getData();
export const action = async ({ request }: ActionFunctionArgs) => {
  console.log("server");

  const formData = await request.formData();
  console.log(formData);

  return null;
};

const Step1 = () => {
  const item = useLoaderData<typeof loader>() as Item;
  return <Step item={item} />;
};

export default Step1;
