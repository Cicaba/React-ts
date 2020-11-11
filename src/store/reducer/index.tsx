import { EnthusiasmAction } from '../actions/index';
import { StateType } from '../state/state';
import { numberPlus, numberMinus } from '../constants/index';

export function enthusiasm(state: StateType, action: EnthusiasmAction): StateType {
  switch (action.type) {
    case numberPlus:
      return { ...state, number: state.number + 1 };
    case numberMinus:
      return { ...state, number: Math.max(1, state.number - 1) };
  }
  return state;
}