import * as React from 'react';

export interface TextboxProps {
  text: string,
  placeholder?: string,
  onChange: ((text: string) => void)
}

export class Textbox extends React.Component<TextboxProps, {}> {
  render() {
    return (
      <div>
        <input type="text" placeholder={this.props.placeholder} value={this.props.text} onChange={event => this.props.onChange(event.target.value)} />
      </div>
    );
  }
}