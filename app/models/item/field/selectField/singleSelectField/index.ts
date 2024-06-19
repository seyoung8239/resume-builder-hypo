import {FieldItemBase, QUESTION_TYPE, QuestionSettingBase} from "../../@common";
import {SelectOption} from "../@common";
import {SELECT_RENDER_TYPE_NAME, _SELECT_RENDER_TYPE as SELECT_RENDER_TYPE} from "./_selectRenderType";

export {SELECT_RENDER_TYPE, SELECT_RENDER_TYPE_NAME}

interface SingleSelectQuestion extends QuestionSettingBase {
  questionSelectType: SELECT_RENDER_TYPE;
  placeholder?: string;
  selectItemList: SelectOption[];
}

export interface SingleSelectField extends FieldItemBase {
  questionType: typeof QUESTION_TYPE.SINGLE_SELECT;
  questionSingleSelectItemSetting: SingleSelectQuestion;
}
