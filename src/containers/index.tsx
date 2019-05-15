import Index from '../view/Index/index';
import * as actions from '../store/actions/index';
import { StoreState } from '../types/storeState';
import { connect } from 'react-redux';

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName,
  }
}
export function mapDispatchToProps(dispatch: any) {
  return {
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);