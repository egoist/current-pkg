# current-pkg [![NPM version](https://img.shields.io/npm/v/current-pkg.svg)](https://npmjs.com/package/current-pkg) [![NPM downloads](https://img.shields.io/npm/dm/current-pkg.svg)](https://npmjs.com/package/current-pkg) [![Build Status](https://img.shields.io/circleci/project/egoist/current-pkg/master.svg)](https://circleci.com/gh/egoist/current-pkg)

> Load package.json from current work directory.

## Install

```bash
$ npm install --save current-pkg
```

## Usage

```js
const currentPkg = require('current-pkg')

currentPkg()
/*
{
	pkg: {name: 'packageName', version...}
}
*/

currentPkg(path.join(__dirname, '../another-package'))
/*
{
	pkg: {name: 'otherPackageName', version...}
}
*/

// not found
currentPkg()
/*
{
	error: new Error('Cannot find module ...')
}
*/
```

## License

MIT © [EGOIST](https://github.com/egoist)
