/// <reference path='../../src/index.d.ts'/>
import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import * as sinon from 'sinon';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import { UserForm } from '../../src/components/UserForm';
import { User } from '../../src/domain/User';

describe('UserForm', () => {
  before(() => {
    configure({ adapter: new Adapter() });
  });

  it('should save user', () => {
    const clickSpy = sinon.spy();

    const user: User = {
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'email@example.com',
      password: '12345'
    }
    const sut = shallow(<UserForm user={user} onSave={clickSpy} />);

    const button = sut.find('button');
    button.simulate('click');

    expect(clickSpy.args.length).to.equal(1);
    expect(clickSpy.args[0][0]).to.eql(user);
  });
});
