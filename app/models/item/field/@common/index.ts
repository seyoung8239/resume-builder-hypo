import {ItemBase} from "../../@common";
import {_MANDATORY_TYPE as MANDATORY_TYPE} from "./_mandatoryType";

/** 필수 or 선택 타입 */
export {MANDATORY_TYPE}

/** 기본 필드 타입 */
export {_QUESTION_TYPE as QUESTION_TYPE} from "./_questionType";

export interface FieldItemBase extends ItemBase {
  mandatoryType: MANDATORY_TYPE;
}

export interface QuestionSettingBase {
  sn: number;
}