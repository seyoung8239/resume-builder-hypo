import {TextField} from "./textField";
import {NumberField} from "./numberField";
import {MultiSelectField, SingleSelectField} from "./selectField";

export {MANDATORY_TYPE, QUESTION_TYPE} from "./@common";

export {TextField, NumberField, SingleSelectField, MultiSelectField};
export type FieldItem = TextField | NumberField | SingleSelectField | MultiSelectField;