/*!
 * get-tz | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/get-tz
*/
'use strict';

const util = require('util');

const getZonetab = require('get-zonetab');
const parseZonetab = require('parse-zonetab');

module.exports = function getTz(options) {
  if (options && options.encoding) {
    return Promise.reject(new TypeError(
      '`encoding` option is not supported, but ' +
      util.inspect(options.encoding) +
      ' was provided.'
    ));
  }

  return getZonetab(options).then(parseZonetab);
};
