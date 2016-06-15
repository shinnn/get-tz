'use strong';

const getTz = require('.');
const test = require('tape');

test('getTz()', t => {
  t.plan(5);

  t.strictEqual(getTz.name, 'getTz', 'should have a function name.');

  getTz().then(rows => {
    t.strictEqual(
      rows.every(row => typeof row === 'object'),
      true,
      'should be fulfilled with an array of objects.'
    );
  }).catch(t.fail);

  getTz({}).then(rows => {
    t.strictEqual(
      rows.length,
      421,
      'should be fulfilled with 421 rows.'
    );
  }).catch(t.fail);

  getTz({encoding: 'foo'}).then(t.fail, err => {
    t.strictEqual(
      err.message,
      '`encoding` option is not supported, but \'foo\' was provided.',
      'should fail when `encoding` option is provided.'
    );
  }).catch(t.fail);

  getTz({baseUrl: 'https://example.org'}).then(t.fail, err => {
    t.strictEqual(
      err.message,
      '404 Not Found',
      'should fail when it cannot get zone.tab file.'
    );
  }).catch(t.fail);
});
