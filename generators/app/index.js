'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var namePrefix = 'kapgel-';
var orgName = 'kapgel';

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the outstanding ' + chalk.red('kapgel-base') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name?',
        default: this.appname // Default to current folder name
      },
      {
        type: 'input',
        name: 'appDescription',
        message: 'Could you describe your project?',
        default: 'Just an another useful project by KapGel Developers'
      },
      {
        type: 'confirm',
        name: 'isPrivate',
        message: 'Is this project private?',
        default: true
      },
      {
        type: 'input',
        name: 'travisToken',
        message: 'If your project is private, please give your Travis Token to us?',
        default: ''
      }
    ];

    return this.prompt(prompts).then(function (props) {
      if (props.name.indexOf(namePrefix) !== 0) {
        props.name = namePrefix + props.name;
      }
      if (!props.isPrivate) {
        delete props.travisToken;
      }
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.copy('.editorconfig');
    this.copy('.eslintrc');
    this.copy('.gitignore');
    this.copy('.npmignore');
    this.copy('.travis.yml');
    this.copy('index.js');
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        appName: _.kebabCase(this.props.name),
        appDescription: this.props.appDescription,
        orgName: orgName
      }
    );
    this.fs.copyTpl(
      this.templatePath('readme.md'),
      this.destinationPath('readme.md'),
      {
        appName: _.kebabCase(this.props.name),
        appDescription: this.props.appDescription,
        travisToken: this.props.travisToken,
        isPrivate: this.props.isPrivate,
        appTitle: _.startCase(this.props.name),
        orgName: orgName
      }
    );
    this.fs.copy(
      this.templatePath('test.js'),
      this.destinationPath('test/test.js')
    );
    this.fs.copy(
      this.templatePath('dummyFile.txt'),
      this.destinationPath('lib/index.js')
    );
    this.mkdir('lib');
    this.mkdir('test');
  }
});
