# Gatsby TypeScript starter with Styled Components & linters

Gatsby + TS + styled-components boilerplate with stylelint and eslint configs. Mainly for my personal projects.

## Includes:

* `GlobalStyle` component with a customized CSS reset,
* a global `Layout` component wrapper,
* `polished` for SASS-like functions in Styled Components,
* `sanitize-html` for sanitizing your innerHTML from APIs,
* a `tsconfig.json` with basic config for the stack that's used, plus a `paths` config for aliasing `src/` to `@/`,
* some basic breakpoints for RWD,
* ESLint & StyleLint configs for TypeScript & Styled Components


## Quick-start 🏎:

  _note:_ Gatsby v5, which is used here, requires Node to be at least at v18

### Clone the repo 👯:

	```sh
	git clone git@github.com:kjhank/gatsby-boilerplate.git
	```

### Install everything

	```sh
	yarn install
	```
    or
    ```sh
    npm install
    ```

### Start your development environment: 💻

	```sh
	cd gatsby-boilerplate
	yarn dev
	```
    or
    ```sh
    npm run dev
    ```

	Now you can navigate to `http://localhost:8000` in your browser and view the basic layout.

### Start coding! 👩‍💻

	Open any of the files in your favorite editor and see any changes you make as soon as you save the file.


## Troubleshooting:
* In case you're getting the following error:

```
  Module build failed (from ./node_modules/@pmmmwh/react-refresh-webpack-plugin/loader/index.js):
  Error: You must provide the URL of lib/mappings.wasm by calling SourceMapConsumer.initialize({ 'lib/mappings.wasm': ... }) before using SourceMapConsumer
```

disable native `fetch` from node by running `export NODE_OPTIONS=--no-experimental-fetch` before the `dev` commands.
## TODO:

* get rid of pre-commit hooks and set up linting in CI,
* refactor files & directories structure,
* improve theme,
* improve RWD - research first.