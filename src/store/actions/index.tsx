import * as constants from '../constants/index'
// 加
export interface IncrementEnthusiasm {
  type: constants.numberPlus;
}
//减
export interface DecrementEnthusiasm {
  type: constants.numberMinus;
}

//联合类型
export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.numberPlus
  }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.numberMinus
  }
}