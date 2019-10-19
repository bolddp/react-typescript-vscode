import * as React from 'react';

export interface TextboxProps {
  type: string;
  value: string,
  placeholder?: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Textbox: React.FC<TextboxProps> = (props) => {
  return (
    <div>
      <input type={props.type} placeholder={props.placeholder} value={props.value}
        onChange={props.onChange} />
    </div>
  );
}

export const useTextbox = (initialValue: string, type: string = 'text') => {
  const [value, setValue] = React.useState(initialValue);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  return {
    type,
    value,
    onChange: handleChange
  }
}

export const usePasswordTextbox = (initialValue: string) => {
  return useTextbox(initialValue, 'password');
}

