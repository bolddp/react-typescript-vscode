import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";

ReactDOM.render(
    <App user={{ email: 'test@example.com', firstName: 'John', lastName: 'Smith' }} />,
    document.getElementById("example")
);