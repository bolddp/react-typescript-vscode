/// <reference path='../../src/index.d.ts'/>
import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import { UserForm } from '../../src/components/UserForm'
import { User } from "../../src/domain/User";
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';

describe('UserForm', () => {
  let sut: UserForm;
  let onSave: (user: User) => void;

  before(() => {
    configure({ adapter: new Adapter() });
  });

  it('should set state', () => {
    sut = shallow<UserForm>(<UserForm user={{
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'email@example.com'
    }} onSave={onSave} />).instance();

    expect(sut.state.firstName).to.equal('firstName');
    expect(sut.state.lastName).to.equal('lastName');
    expect(sut.state.email).to.equal('email@example.com');
  });
});
