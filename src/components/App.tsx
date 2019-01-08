import * as React from "react";

// Strongly typed App component props
export interface AppProps { compiler: string; framework: string; }

export class App extends React.Component<AppProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}