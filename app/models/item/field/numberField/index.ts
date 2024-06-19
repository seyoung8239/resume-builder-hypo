import {FieldItemBase, QUESTION_TYPE, QuestionSettingBase} from "../@common";
import {ACTIVE_STATUS} from "../../../../shares/activeStatus";

interface NumberQuestion extends QuestionSettingBase {
  placeholder: string;
  unitName: string;
  maxLength: number;
  maxLengthActiveStatus: ACTIVE_STATUS;
}

export interface NumberField extends FieldItemBase {
  questionType: typeof QUESTION_TYPE.NUMBER;
  questionNumberItemSetting: NumberQuestion;
}