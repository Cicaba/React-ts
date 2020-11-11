import * as React from 'react';
import './index.styl';
// import axios from '../../axios/config';

export interface Props {
  name: string;
  number?: any;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

class Index extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  componentWillMount() { }
  public render() {
    return (
      <div className="index">
        <div className="greeting">
          Hello {this.props.name + getExclamationMarks(this.props.number)}
        </div>
        <div>
          <button onClick={this.props.onDecrement}>-</button>
          <button onClick={this.props.onIncrement}>+</button>
        </div>
      </div>
    );
  }

}
export default Index;


function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}