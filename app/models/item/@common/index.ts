import {ACTIVE_STATUS} from "../../../shares/activeStatus";
import {_DEPTH as DEPTH} from "./_depth";
import {_ITEM_TYPE as ITEM_TYPE} from "./_itemType";


/** item depth */
export {DEPTH};

/** 자식 있을 경우 GROUP, 자식 없을 경우 FIELD */
export {ITEM_TYPE}

/** item sharing interface */
export interface ItemBase {
  sn: string;
  itemSn: number; // 일단은..
  parentItemSn: number; // 일단은..
  title: string;
  activeStatus: ACTIVE_STATUS;
  depth: DEPTH;
  itemType: ITEM_TYPE;
}