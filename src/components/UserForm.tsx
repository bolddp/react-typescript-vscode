import * as React from 'react';
import { Textbox, useTextbox, usePasswordTextbox } from './Textbox';
import { User } from '../domain/User';
import * as se_flag from '../../public/images/se.png';

export interface UserFormProps { user: User; onSave: (user: User) => void }

export const UserForm: React.FC<UserFormProps> = (props) => {
  const email = useTextbox(props.user.email);
  const firstName = useTextbox(props.user.firstName);
  const lastName = useTextbox(props.user.lastName);
  const password = usePasswordTextbox(props.user.password);

  return (
    <div>
      <span>Look, a static asset was successfully imported --> </span><img src={se_flag} />
      <br /> <br />
      <Textbox placeholder="email" {...email} />
      <Textbox placeholder="first name" {...firstName} />
      <Textbox placeholder="last name" {...lastName} />
      <Textbox {...password} />
      <button onClick={() => props.onSave({
        email: email.value,
        firstName: firstName.value,
        lastName: lastName.value,
        password: password.value
      })}>Save user</button>
    </div>
  )
}
