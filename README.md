# react-typescript-vscode
This is a demo project for a setup with React.js development in Typescript with Visual Studio Code as the IDE. Webpack is used to host the web page during development, and also include scripts to package an optimized production build.

It supports debugging and setting breakpoints in VS Code.

The project is also setup with Bootstrap, including SASS styling.

## Getting started
* Clone
* Open in Visual Studio Code
* `npm install`
* `nvm install -g webpack`
* `npm run build` - this compiles the Typescript do the **dist** folder and puts a watch on it to perform automatic recompile on changes.
* `npm run start` - this starts the **webpack-dev-server** to serve the webpage in a normal browser tab.
* Close the tab
* VS Code -> Debug tab -> **Launch web** - this opens the project in a separate web browser instance in debug mode. You should now be able to test the web page and set breakpoints in VS Code as you see fit.
