# process-usage

<p align="center">
  <br>
  <img src="demo.gif" alt="process-usage">
  <br>
</p>

> Display dynamic real-time information about running Node.js process.

## Install

### as package

```bash
$ npm install process-usage --save
```

### as CLI

```bash
$ npm install process-usage --global
```

or

```bash
$ npx process-usage
```

## Usage

```js
const procStats = require('process-usage')()

// print collector stats
console.log(procStats())

// destroy collector
console.log(procStats.destroy())
```

