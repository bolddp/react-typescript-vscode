/// <reference path='../../src/index.d.ts'/>
import * as React from 'react';
import { configure, EnzymeAdapter, shallow } from "enzyme";
import { UserForm } from '../../src/components/UserForm'
import { User } from "../../src/domain/User";
import { expect } from 'chai';

describe('UserForm', () => {
  let sut: UserForm;
  let onSave: (user: User) => void;

  before(() => {
    configure({ adapter: new EnzymeAdapter() });
  });

  it('should set state', () => {
    sut = shallow<UserForm>(<UserForm user={{
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'email@example.com'
    }} onSave={onSave} />).instance();

    expect(sut.state.firstName).to.equal('firstName');

  });
});
