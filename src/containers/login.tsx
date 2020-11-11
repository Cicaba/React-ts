import Login from '../view/Login/index';
import * as actions from '../store/actions/index';
import { StateType } from '../store/state/state';
import { connect } from 'react-redux';

export function mapStateToProps({ number, name }: StateType) {
  return {
    number,
    name,
  }
}
export function mapDispatchToProps(dispatch: any) {
  return {
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);