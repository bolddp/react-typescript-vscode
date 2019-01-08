import * as React from 'react';
import { Textbox } from './Textbox';
import { User } from '../domain/User';

export interface UserFormProps { user: User; onSave: (user: User) => void }
export interface UserFormState { email: string; firstName: string, lastName: string }

export class UserForm extends React.Component<UserFormProps, UserFormState> {
  constructor(props: UserFormProps) {
    super(props);
    this.state = {
      email: props.user.email,
      firstName: props.user.firstName,
      lastName: props.user.lastName
    }
  }

  emailChanged(text: string) { this.setState({ ...this.state, email: text}); }

  firstNameChanged(text: string) { this.setState({ ...this.state, firstName: text}); }

  lastNameChanged(text: string) { this.setState({ ...this.state, lastName: text}); }

  btnClick() {
    const user = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    } as User;
    this.props.onSave(user);
  }

  render() {
    return (
      <div>
        <Textbox text={this.state.email} placeholder="email" onChange={text => this.emailChanged(text)} />
        <Textbox text={this.state.firstName} placeholder="first name" onChange={text => this.firstNameChanged(text)} />
        <Textbox text={this.state.lastName} placeholder="last name" onChange={text => this.lastNameChanged(text)} />
        <button onClick={this.btnClick.bind(this)}>Save user</button>
      </div>
    )
  }
}