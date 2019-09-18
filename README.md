## 2019 Site Test

Website for Bryte fall 2019

Run ```npm i``` from root folder

Run ```npm start``` to start dev server

Run ```npm run build:dev``` to build for development

Run ```npm run build:prod``` to build for production

### Contains:
- **webpack: ^4.39.1**

   Webpack is a tool wherein you use a configuration to explain to the builder how to load specific things. You describe to Webpack how to load *.js files, or how it should look at .scss files, etc. Then, when you run it, it goes into your entry point and walks up and down your program and figures out exactly what it needs, in what order it needs it, and what each piece depends on. It will then create bundles — as few as possible, as optimized as possible, that you include as the scripts in your application.

- **webpack-cli: ^3.3.6**

   Activates command line interface for webpack to use with npm scripts.

- **webpack-dev-server: ^3.7.2**

   The webpack-dev-server is a little Node.js Express server, which uses the webpack-dev-middleware to serve a webpack bundle. It also has a little runtime which is connected to the server via Sock.js. The server emits information about the compilation state to the client, which reacts to those events.

- **webpack-merge: ^4.2.1**

   Merges config files together.

- **html-webpack-plugin: ^3.2.0**

  Copies html from src to build folder.

- **copy-webpack-plugin: ^5.0.4**

  Copies individual files or entire directories, which already exist, to the build directory.

- **clean-webpack-plugin: ^3.0.0**

  Overwrites builds after running the build command.

- **@babel/core: ^7.5.5**

  Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

- **@babel/preset-env: ^7.5.5**

  A smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s).

- **babel-loader: ^8.0.6**

  Transpiles JS code given the presets.

- **@babel/preset-react: ^7.0.0**

  Used to convert React JSX to backwards compatible code.

- **@babel/plugin-proposal-class-properties: ^7.5.5**

   Enables experimental react code (like not having to bind functions to the keyword 'this' anymore, by using arrow functions).

- **babel-polyfill: ^6.26.0**

   Enables async await logic

- **cross-env: ^5.2.0**

  Insures that environment variable is set properly in every platform.

- **file-loader: ^4.1.0**

  The file-loader resolves import/require() on a file into a url and emits the file into the output directory.

- **css-loader: ^3.1.0**

  Interprets @import and url() like import/require() and will resolve them.

- **style-loader: ^0.23.1**

  Adds CSS to the DOM by injecting a ```<style>``` tag.

- **mini-css-extract-plugin: ^0.8.0**

  Extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.

- **sass-loader: ^7.1.0**

  Compiles SASS files to CSS using node-sass bindings.

- **node-sass: ^4.12.0**

  Used by sass-loader.

- **postcss-loader: ^3.0.0**

  Loader for webpack to process CSS with PostCSS. Needed for plugins like autoprefixer.

- **autoprefixer: ^9.6.1**

  A CSS post processor. It combs through compiled CSS files to add or remove vendor prefixes like -webkit and -moz after checking the code against caniuse.com.

- **uglifyjs-webpack-plugin: ^2.2.0**

  Uglifies Javascript.

- **optimize-css-assets-webpack-plugin: ^5.0.3**

  Minifies CSS.

- **axios: ^0.19.0**
   
  Promise based HTTP client for the browser and node.js

- **@svgr/webpack: ^4.3.2**

   Import svg as a Component

- **uuid: ^3.3.2**

   Simple, fast generation of RFC4122 UUIDS.

  This [tutorial](https://hackernoon.com/lets-start-with-webpack-4-91a0f1dba02e) helped a lot and is 95% flawless.
  Also [this one](https://developerhandbook.com/webpack/how-to-configure-scss-modules-for-webpack/) with configuring CSS-Modules for SCSS.


  ## BUGS: none rn (I hope)




