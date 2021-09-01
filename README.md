## Vue + tailwind + webpack boilerplate

This boilerplate provides the a simple setup needed to create development and production environments to create Vue apps using tailwind and building them into production with Webpack. Everything is explained step by step so you can understand what is going on and use this as the base to start building your own apps. Every step of the setup is fully explained and documented.

- [Vue + tailwind + webpack boilerplate](#vue--tailwind--webpack-boilerplate)
  - [Quickstart](#quickstart)
  - [Folder structure](#folder-structure)
  - [Installing vue](#installing-vue)
  - [Installing webpack](#installing-webpack)
  - [Installing Vue-loader](#installing-vue-loader)
    - [Related webpack configuration](#related-webpack-configuration)
  - [Installing html-webpack-plugin](#installing-html-webpack-plugin)
    - [Related webpack configuration](#related-webpack-configuration-1)
  - [Installing tailwind](#installing-tailwind)
    - [Related webpack configuration](#related-webpack-configuration-2)
    - [Configuring tailwind](#configuring-tailwind)
    - [Configuring tailwind's purgeCSS](#configuring-tailwinds-purgecss)
  - [Setting up a webpack dev server](#setting-up-a-webpack-dev-server)
    - [Related webpack configuration](#related-webpack-configuration-3)
  - [Setting up MiniCssExtractPlugin](#setting-up-minicssextractplugin)
    - [Related webpack configuration](#related-webpack-configuration-4)
  - [Setting up CssMinimizerPlugin](#setting-up-cssminimizerplugin)
    - [Related webpack configuration](#related-webpack-configuration-5)
  - [Setting up FontAwesome for our icons](#setting-up-fontawesome-for-our-icons)
    - [Configuring font awesome](#configuring-font-awesome)
  - [Setting up dark mode with Tailwind.css](#setting-up-dark-mode-with-tailwindcss)
  - [Troubleshooting](#troubleshooting)
    - [Upgrade version](#upgrade-version)
  - [Other](#other)

### Quickstart

To get started simply install the project using `npm install` and use the following commands:

- `npm run serve:dev` to serve the project locally using the development build
- `npm run serve:prod` to serve the project locally using the production build
- `npm run build:dev` to build the project in development mode, the output will be saved in 📂dist. Good to test the development build files generated or to work using an extension like [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- `npm run build:prod` to build the project in production mode, the output will be saved in 📂dist. Run this command before putting the application live.



### Folder structure

```shell
.
├── 📂dist                    # Distribution folder, contains your latest build
├── 📂node_modules            # Test files (alternatively `spec` or `tests`)
├── 📂public                  # Contains the index.html template
├── 📂src                     # Source code of the application
│   ├── 📂assets              # Any assets used by the application (images, fonts...)
│   ├── 📂components          # Folder with all the Vue components used by the application
│   ├── 📂css                 # All stylesheets used by the Vue components
│   ├── 📜App.vue             # Top level vue component
│   └── 📜main.js             # Our application entry point
├── ⚙️package.json            # Configuration file to manage the project dependencies, scripts, version...
├── ⚙️postcss.config.js       # Configuration file to manage the postCSS configuration and plugins
├── 📜README.md               # This :)
├── ⚙️tailwind.congif.js      # Configuration file to manage tailwind-specific options
└── ⚙️webpack.config.js       # Main webpack's configuration file
```

### Installing vue

The first thing is to install the vue library. to do so simply run the following command:

```shell
npm install vue
``` 

This will install the latest stable version of Vue ([docs](https://vuejs.org/v2/guide/installation.html#NPM))

### Installing webpack

Next thing we will install webpack. From now on all dependencies are used only during development so they will all include the `-D` flag.

```shell
npm install -D webpack webpack-cli
```

- **webpack:** This installs the webpack main functionalities
- **webpack-cli:** Since webpack version 4, the command line interface (CLI) got removed from the main package and added to its own repo and package. If you want to access the `webpack` command install this too. These two first dependencies make up for the most basic local webpack installation ([docs](https://webpack.js.org/guides/getting-started/))

> 📝 **_NOTE:_**  The CLI is linked inside the `node_modules/.bin` folder. This means that you won't be able to use `webpack` normally through the console but your scripts inside `package.json` will access it without issue.

> 📝 **_NOTE:_** You can still access the `webpack` command using the `npx` command shipped with Node 8.2/npm 5.2.0. You can try to run `npx webpack --version` to check if the command works and the installed dependencies versions.

### Installing Vue-loader

Vue loader is a [webpack loader](https://webpack.js.org/concepts/loaders/) that allows us to process Single-File Components (SFC). ([docs](https://vue-loader.vuejs.org/guide/#manual-setup))

```shell
npm install -D vue-loader vue-template-compiler style-loader
```

- **vue-loader:** This installs the main vue-loader functionalities
- **vue-template-compiler:** The vue-template-compiler has two primary functions: converting templates to render() functions and parsing single file componens.
- **style-loader:** Adds CSS to the DOM by injecting a \<style\> tag ([docs](https://github.com/webpack-contrib/style-loader))

> 📝 **_NOTE:_** On the docs it is mentioned to use the `vue-style-loader` but this loader is not well maintained. Instead we will use the `style-loader` provided by webpack.

> 📝 **_NOTE:_** In the webpack configuration we will be using `css-loader` ([docs](https://webpack.js.org/loaders/css-loader/)) too although there is no need to import it on our project since it was importes as a dependency by `vue-loader`

#### Related webpack configuration

```js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {

    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    //other css loaders
                ]
            },
            //other rules
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        //other plugins
    ]
    ...
}
```

### Installing html-webpack-plugin

This plugin will create and dynamically inject the dependencies of our application into the main HTML file. ([docs](https://webpack.js.org/plugins/html-webpack-plugin/))

```shell
npm install --save-dev html-webpack-plugin
```

Since the HTML file created needs to have a \<div id="app"\> tag to load our Vue components in, we will be using a template located in `public/index.html`.

#### Related webpack configuration

```js
const path = require('path')

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        }),
        //other plugins
    ],
}
```

### Installing tailwind

Now we will install the `tailwindCSS` library for our CSS styling on the page ([docs](https://tailwindcss.com/docs/installation))

```shell
npm install -D tailwindcss postcss-loader postcss
```

- **tailwindcss:** Installs the main tailwind functionalities
- **postcss-loader:** A webpack loader to process CSS with PostCSS ([docs](https://webpack.js.org/loaders/postcss-loader/))
- **postcss:** A tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more ([docs](https://github.com/postcss/postcss))

> 📝 **_NOTE:_** In the webpack configuration we will be using `css-loader` ([docs](https://webpack.js.org/loaders/css-loader/)) too although there is no need to import it on our project since it was importes as a dependency by `vue-loader`

#### Related webpack configuration

Aside from the `webpack.config.js` file, we will create the postcss configuration inside the `postcss.config.js` file. The first thing is to call this loader from our webpack file:

`webpack.config.js`
```js
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                        loader: 'css-loader',
                        options: {
                            // 0 => no loaders (default);
                            // 1 => postcss-loader;
                            // 2 => postcss-loader, sass-loader
                            importLoaders: 1
                        }
                    },
                    //other loaders
                    'postcss-loader'
                ]
            },
            //other rules
        ]
    },

}
```

`postcss.config.js` calling the needed plugins to process the tailwindCSS files and loading the tailwind configuration.

```js
module.exports = {
    plugins: [
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer'),
    ],
  }
```

#### Configuring tailwind

In order to integrate tailwind there are additional steps to take, first of all we will initialize its configuration file:

```shell
npx tailwind init
```

This will create the `tailwind.config.js` file. Next we need to create a css file that includes all of the tailwind functionalities. This file is located under `src/css/tailwind.css` and simply contains the following imports:

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

Finally this needs to be imported from our `main.js` file, in this case using the line `import './css/tailwind.css';`


#### Configuring tailwind's purgeCSS

In order to configure purgeCSS, we will use the built in system tailwind comes with. To enable it we just need to modify the `tailwind.config.js` file to add the `purge` key. In there we will configure the files this module needs to look to purge the resulting css file (all the js, and html files):

```js
module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/*.js',
      './src/*.vue',
    ]
  },
  //other configuration
}
```

> 📝 **_NOTE:_** PurgeCSS will not run when we are in development mode. This allows to have shorter build times and allows to tweak the code from the developer console using new classes. This is controlled through the `process.env.NODE_ENV` variable, that is set in our `package.json` through the `--node-env` flag ([more info](https://github.com/webpack/webpack-cli/issues/2362)).

### Setting up a webpack dev server

To test our builds we will set up a simple server used to test our project locally ([docs](https://webpack.js.org/configuration/dev-server/))

```shell
npm install -D webpack-dev-server
```

#### Related webpack configuration

In order to use the development server, we first need to configure a few fields:

- **entry:** This defines the entry point for our webpack process ([docs](https://webpack.js.org/concepts/entry-points/#single-entry-shorthand-syntax))
- **devtool:** This option if and how source maps are generated ([docs](https://webpack.js.org/configuration/devtool/)). They are useful for debugging once a bug is reproduced in a production environment, but will slow down build times.
- **devServer:** The devServer configuration
  - **watchContentBase:** When enabled, it will look for changes on the `entry` file and its dependencies and will trigger a full page reload if it finds any
  - **open:** Tells dev-server to open the browser after server had been started.
  - **writeToDisk:** Tells devServer to write generated assets to the disk.

```js
const path = require('path')

module.exports = {
    entry: path.join(__dirname, 'src/main.js'),
    devServer: {
        watchContentBase: true,
        open: true,
        writeToDisk: true,
    },
}
```

### Setting up MiniCssExtractPlugin

This plugin extracts all our styles into separate `.css` files, one for each `.js` file in our application. In our case this will only generate a sinlge `.css` file from our `main.js` file ([docs](https://webpack.js.org/plugins/mini-css-extract-plugin/)). To install we run:

```shell
npm install -D mini-css-extract-plugin
```

#### Related webpack configuration

Once installed, we only need to configure it on our `webpack.config.js` file:

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            //other rules
            {
                test: /\.css$/,
                use: [
                    // other loaders
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },

                ]
            },
        ]
    },
    plugins: [
        // other plugins
        new MiniCssExtractPlugin(),
    ],
  // other config
}
```

### Setting up CssMinimizerPlugin

Even though or styles files are not huge after using PurgeCSS, we can cut them in half what's left by just minifying their contents. To start first we need to install the dependency ([docs](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/)):

```shell
npm install -D mini-css-extract-plugin
```

#### Related webpack configuration

Following the docs above we only need to configure the CssMinimizerPlugin as an additional optimization step:

```js
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    // other config
    optimization: {
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers
          '...',
          new CssMinimizerPlugin(),
        ],
      },
}
```

Since webpack version >4, the optimizations are set automatically for you, but they can be extended this way. Webpack includes `webpack-terser-plugin` by default in order to minify the `.js` files too. For this reason we want to make sure to uncomment the `'...'` part so the rest of the optimization steps provided by webpack are left as is. The configuration above would be *similar* to the following (*note that webpack takes more optimization steps in addition to minifying the `.js` files*):

```js
// This serves just as an example, webpack provides more optimization steps when using '...'
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    // other config
    optimization: {
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
          new TerserPlugin(),
          new CssMinimizerPlugin(),
        ],
      },
}
```

> 📝 **_NOTE:_** In the docs you can see the `minimize: true` option. This is also set depending on whether you are running in development or productio mode. In this project, the mode is defined through the `--mode` flag on the `package.json` commands and there is no need to include the `minimize` option.

### Setting up FontAwesome for our icons

We will add a few icons to our interface too. To do so the choice is `fontawesome` since it has a nice support for Tree Shaking ([docs](https://fontawesome.com/how-to-use/javascript-api/other/tree-shaking)) as well as a package for vue specifically called `vue-fontawesome`. To get started:

```
npm install -D @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome@latest @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons
``` 

- **@fortawesome/fontawesome-svg-core:** This contains the core javascript api ([docs](https://fontawesome.com/how-to-use/javascript-api/setup/getting-started))
- **@fortawesome/vue-fontawesome@latest:** Has the component we will use on our Vue application to render the icons ([docs](https://github.com/FortAwesome/vue-fontawesome#introduction))
- **@fortawesome/free-solid-svg-icons:** The package of solid icons of fontawesome
- **@fortawesome/free-regular-svg-icons:** The package of regular icons of fontawesome

> 📝 **_NOTE:_** In this case we will work with the *free* icons of font awesome, you can find how to import the solid, regular, brand or **pro** icons on the `"add more styles or pro icons"` section in the [docs](https://github.com/FortAwesome/vue-fontawesome#add-more-styles-or-pro-icons)

#### Configuring font awesome

We want to import the needed icons on each component instead of importing them all globally. To do so we will add the following lines on our `main.js` file:

```js
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.prototype.$library = library
```

First we import the dependencies needed to set up our vue component and our library. The component is created globally to make it accessible everywhere and the library will be made available creating a new instance property ([docs](https://vuejs.org/v2/cookbook/adding-instance-properties.html)).

Once both of these elements are set up, whenever we want to use an icon first we will import it to our component, then add them to the library and finally use them in our template, for example:

```js
<script>
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

export default {
  beforeCreate() {
    this.$library.add(faAddressBook);
  },
};
</script>
```

```html
<template>
  <font-awesome-icon :icon="['fas', 'address-book']" />
</template>
```

> 📝 **_NOTE:_**  I recommend going through the [docs](https://github.com/FortAwesome/vue-fontawesome#the-icon-property) if you've never used font awesome before and you can also search for icons [here](https://fontawesome.com/icons?d=gallery&p=2).

> 📝 **_NOTE:_** There are two things to look our for when using fontAwesome. The first thins is that, while the import name is in `camelCase`, the element itself will use `kebab-case`. The second thing is that you need to make sure that you are using the right prefix (fas for solid, far for regular and fab for brands).

### Setting up dark mode with Tailwind.css

Dark mode support comes built-in with `Tailwind.css` making things much easier to set up ([docs](https://tailwindcss.com/docs/dark-mode)). This mode is disabled by default in order to keep the size at a minimum and needs to be enabled on the `tailwind.config.js` file by setting the `darkMode` option:

`tailwind.config.js`
```js
module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/*.js',
      './src/*.vue',
    ]
  },
  darkMode: 'class', // or 'media' or false
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

Since we want to toggle the dark mode manually through the use of a class we will set the `darkMode` option to `class`. Then on our root element we will set that class dynamically when the user clicks on the moon icon at the bottom-left corner:

`src/App.vue`
```xml
<template>
  <div :class="{ dark: isDarkModeActive }">
    <div class="flex flex-row h-screen antialiased text-gray-800">
      <Sidebar @toggle-dark-mode="isDarkModeActive = !isDarkModeActive" />
      <Chat />
    </div>
  </div>
</template>
```

Using this approach, we will receive an event from the `Sidebar.vue` component (where the moon button is) that will toggle the `isDarkModeActive` variable to activate the `dark` class conditionally, applying the styles on all the page accordingly.

### Troubleshooting

If you are finding any trouble with this project, you can try one of the following methods to try and solve any issues you may be facing:

#### Upgrade version

Having older versions of NPM and node may throw errors. This project has been tested with the following minimum verions ([ref](https://github.com/Aridez/vue-tailwind-webpack-boilerplate/issues/34)):

- Node: 15.6.0
- NPM: 7.4.0

If your project works with previous of Node or NPM [open an issue](https://github.com/Aridez/vue-tailwind-webpack-boilerplate/issues) to fix this section.

### Other

- [Layout by iaminos](https://tailwindcomponents.com/component/messages-ui-layout)