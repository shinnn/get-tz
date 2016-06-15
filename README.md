# get-tz

[![NPM version](https://img.shields.io/npm/v/get-tz.svg)](https://www.npmjs.com/package/get-tz)
[![Build Status](https://travis-ci.org/shinnn/get-tz.svg?branch=master)](https://travis-ci.org/shinnn/get-tz)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/get-tz.svg)](https://coveralls.io/github/shinnn/is-gist-starred?branch=master)
[![Dependency Status](https://david-dm.org/shinnn/get-tz.svg)](https://david-dm.org/shinnn/get-tz)
[![devDependency Status](https://david-dm.org/shinnn/get-tz/dev-status.svg)](https://david-dm.org/shinnn/get-tz#info=devDependencies)

A [Node](https://nodejs.org/) module to get time zone data form [IANA Time Zone Database](https://www.iana.org/time-zones)

```javascript
const getTz = require('get-tz');

getTz().then(rows => {
  rows; /* => [
    {
      countryCode: 'AD',
      coordinate: {
        latitude: {sign: '+', degree: 42, minute: 30},
        longitude: {sign: '+', degree: 1, minute: 31}
      },
      id: 'Europe/Andorra'
    },
    {
      countryCode: 'AE',
      coordinate: {
        latitude: {sign: '+', degree: 25, minute: 18},
        longitude: {sign: '+', degree: 55, minute: 18}
      }
      id: 'Asia/Dubai'
    },
    ...
  ] */  
})
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install get-tz
```

## API

```javascript
const getTz = require('get-tz');
```

### getTz([*options*])

*options*: `Object` (directly passed to [`Request`](https://github.com/request/request#requestoptions-callback))  
Return: [`Promise`](http://www.ecma-international.org/ecma-262/6.0/#sec-promise-constructor)

It gets the latest [`zone.tab`](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) file form <https://www.iana.org/time-zones> and returns a promise for an array of [parsed](https://github.com/shinnn/parse-zonetab) TSV data.

## License

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
