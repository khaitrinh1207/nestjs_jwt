##[setting husky and lint-staged](https://duncanlew.medium.com/getting-started-with-husky-and-lint-staged-for-pre-commit-hooks-c2764d8c9ae)

> Make sure each code commit is up to par and professional

## Installation

requires [Husky](https://www.npmjs.com/package/husky) and [Lint-staged](https://www.npmjs.com/package/lint-staged).

Install the dependencies and devDependencies and start the server.

```sh
npm i husky lint-staged --save-dev
```

Automatic (require npm version > 7)
```sh
npx husky-init
```

After executing the command successfully, we need to take a look at the directory tree to make sure .husky/pre-commit is there.
##### [docs](https://dev.to/maithanhdanh/configuration-for-husky-pre-commit-1fo5)
```
.husky
│   ├── 
│   │   ├── .gitignore
│   │   └── husky.sh
│   └── pre-commit

```
The pre-commit hook will run `npm test` by default for every git-commit action.

After the installation is complete, open the package.json file, in the scripts you add at the end of the lint-staged configuration file package.json:
```json
"lint-staged": {
    "*.{js,ts,jsx,tsx}": [
      "npm run lint",
      "npm run format"
    ]
  }
```
Above we define the command npm run lint:staged

```json
"scripts": {
    ...
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
    "lint-staged": "npx lint-staged",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    ...
  },
```

edit `pre-commit` in folder `.husky` :
```shell
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint-staged
```
