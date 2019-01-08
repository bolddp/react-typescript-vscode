import * as React from "react";
import { User } from '../domain/User';
import { UserForm } from "./UserForm";

// Strongly typed App component props
export interface AppProps { user?: User }

export class App extends React.Component<AppProps, {}> {
    userSaved(user: User) {
        alert(`Saved user (email: ${user.email}, firstName: ${user.firstName}, lastName: ${user.lastName})`);
    }

    render() {
        return <div>
            <h2>User input form</h2>
            <UserForm user={this.props.user} onSave={this.userSaved.bind(this)} />
        </div>;
    }
}