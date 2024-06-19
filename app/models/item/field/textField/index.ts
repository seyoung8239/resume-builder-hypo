import {FieldItemBase, QUESTION_TYPE, QuestionSettingBase} from "../@common";
import {ACTIVE_STATUS} from "../../../../shares/activeStatus";

interface TextQuestion extends QuestionSettingBase {
  placeholder: string;
  maxLength: number;
  maxLengthActiveStatus: ACTIVE_STATUS;
}

export interface TextField extends FieldItemBase {
  questionType: typeof QUESTION_TYPE.TEXT;
  questionTextItemSetting: TextQuestion;
}