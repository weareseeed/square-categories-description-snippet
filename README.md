# Square Categories Description Snippet

Snippet to use the SEO descriptions in Square Online Categories

## Build

Requirements:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

If you have both installed, you can run

```bash
yarn build
```

To install dependencies and then:

```bash
yarn build
```

To generate the final script

This will output a `dist` folder which will contain an `index.js` and `index.js.map`. The `index.js` file will contain the code to run as snippet on Square Online

## Install

You can follow Square Online Docs on this regard to [add a snippet to a site](https://developer.squareup.com/docs/snippets-api/add-a-snippet)

## To Do

- Replace timeouts preferably for Mutation Observer, both to insert the snippet inside the page and to watch changes on meta tag
- Much room for improvement on routing handling
- Linting and formating setup
- Styles customization

## Contribute

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://github.com/weareseeed/react-square-web-payments-sdk/blob/main/LICENSE)
