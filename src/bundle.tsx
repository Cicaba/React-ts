import * as React from 'react';
interface Props {
  load: Function;
  children: Function | any;
}

export default class Bundle extends React.Component<Props>{
  state: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      mod: null
    };
  }

  componentWillMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load(props: Props) {
    this.setState({
      mod: null
    });
    //注意这里，使用Promise对象; mod.default导出默认
    props.load().then((mod: any) => {
      this.setState({
        mod: mod.default ? mod.default : mod
      });
    });
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null;
  }
}