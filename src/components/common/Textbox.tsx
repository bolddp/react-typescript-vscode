import * as React from 'react';

export interface TextboxProps { text: string, onChange: ((event: any) => void) }

class Textbox extends React.Component<TextboxProps, {}> {
  render() {
    return (
      <input type="text" value={this.props.text} onChange={event => this.props.onChange} />
    );
  }
}