import {FieldItemBase, QUESTION_TYPE, QuestionSettingBase} from "../../@common";
import {SelectOption} from "../@common";

interface MultiSelectQuestion extends QuestionSettingBase {
  placeholder?: string;
  selectItemList: SelectOption[];
}

export interface MultiSelectField extends FieldItemBase {
  questionType: typeof QUESTION_TYPE.SINGLE_SELECT;
  questionMultiSelectItemSetting: MultiSelectQuestion;
}
