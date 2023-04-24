import * as React from 'react';
import { Input } from 'antd';

export default class CustomizeSetter extends React.Component<{
  onChange: (icon: string | object) => undefined;
}> {
  static displayName = 'CustomizeSetter';
  componentDidMount() {
    console.log(this.props, 'this.props');
  }
  render() {
    return <Input onChange={(e) => this.props.onChange(e.target.value)} />;
  }
}
