# weather-api_team
CodersCamp weather API project by Noemi, Tomasz, Grzegorz and Marek

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To develop software you will need:
```
node.js
```
and

```
yarn
```
or
```
npm
```
[Install Node.js](https://nodejs.org/en/download/)

[Install Yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable)

[Install NPM](https://www.npmjs.com/get-npm)

### Installing

To start developing:

```
git clone https://github.com/codersCampSilmarillion/weather-api_team.git
```

then run

```
yarn
```
or
```
npm install
```

Now you are ready to work!

## Running the enviroment

To run Webpack develop scripts just type:

```
yarn dev
```
or
```
npm run dev
```

### Remember!

Only edit files in the src folder!


### What Webpack is doing here?
* Html-Webpack-Plugin generate an HTML file in dist folder from template 
* Babel-loader allows transpiling JavaScript files using Babel 
* Sass-loader Loads a Sass/SCSS file and compiles it to CSS
* Css-loader interprets @import and url() like import/require() and will resolve them
* Mini-Css-Extract-Plugin extracts CSS into separate files (only when you run 'build')
* Webpack-Dev-Server is hot reloading all changes in src folder

## Deployment

To build project when the work is done:

```
yarn build
```
or
```
npm run build
```


