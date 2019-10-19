/// <reference path='../index.d.ts'/>
import * as React from "react";
import { User } from '../domain/User';
import { UserForm } from "./UserForm";

export const App: React.FC = () => {
  function userSaved(user: User) {
    alert(`Saved user (email: ${user.email}, firstName: ${user.firstName}, lastName: ${user.lastName})`);
  }

  return (
    <div>
      <h2>User input form</h2>
      <UserForm user={{ email: 'email@example.com', firstName: 'Harry', lastName: 'Potter', password: '12345' }} onSave={user => userSaved(user)} />
    </div>
  );
}