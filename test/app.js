'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-kapgel-base:app with default params', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .toPromise();
  });

  it('creates folders', function () {
    assert.directory([
      'lib',
      'test'
    ]);
  });

  it('creates files', function () {
    assert.file([
      '.editorconfig',
      '.eslintrc',
      '.gitignore',
      '.npmignore',
      '.travis.yml',
      'index.js',
      'readme.md',
      'test/test.js',
      'lib/index.js'
    ]);
  });
});
