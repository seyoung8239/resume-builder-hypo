import { Item } from "../types/item.type";

export const step1data: Item = {
  itemType: "step",
  title: "기본정보",
  childrenItemList: [
    {
      itemType: "group",
      title: "기본정보",
      childrenItemList: [
        {
          title: "이름",
          itemType: "field",
          value: "",
          placeholder: "입력해주세요",
        },
        {
          title: "나이",
          itemType: "field",
          value: "",
          placeholder: "입력해주세요",
        },
        {
          title: "성별",
          itemType: "field",
          value: "",
          placeholder: "입력해주세요",
        },
        {
          title: "지역",
          itemType: "field",
          value: "",
          placeholder: "입력해주세요",
        },
      ],
    },
  ],
};
