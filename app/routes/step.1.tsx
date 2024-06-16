import { useLoaderData } from "@remix-run/react";
import { Item } from "../types/item.type";
import { step1data } from "../config/step1.config";
import Step from "../components/Step";

const getData = async () => new Promise((res) => res(step1data));

export const loader = async () => await getData();

const Step1 = () => {
  const item = useLoaderData<typeof loader>() as Item;
  return <Step item={item} />;
};

export default Step1;
