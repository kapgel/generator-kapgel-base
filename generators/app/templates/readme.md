# <%= appTitle %>
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![DevDependency Status][daviddm-dev-image]][daviddm-dev-url]
[![PeerDependency Status][daviddm-peer-image]][daviddm-peer-url]
[![Coverage percentage][coveralls-image]][coveralls-url]
> <%= appDescription %>

[npm-image]: https://badge.fury.io/js/<%= appName %>.svg
[npm-url]: https://npmjs.org/package/<%= appName %>
[travis-image]: https://travis-ci.org/<%= orgName %>/<%= appName %>.svg?branch=master<% if (isPrivate) { %>&token=<%= travisToken %> <% } %>
[travis-url]: https://travis-ci.org/<%= orgName %>/<%= appName %>
[daviddm-image]: https://david-dm.org/<%= orgName %>/<%= appName %>.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/<%= orgName %>/<%= appName %>
[daviddm-dev-image]: https://david-dm.org/<%= orgName %>/<%= appName %>/dev-status.svg.svg?theme=shields.io
[daviddm-dev-url]: https://david-dm.org/<%= orgName %>/<%= appName %>#info=devDependencies
[daviddm-peer-image]: https://david-dm.org/<%= orgName %>/<%= appName %>/peer-status.svg.svg?theme=shields.io
[daviddm-peer-url]: https://david-dm.org/<%= orgName %>/<%= appName %>#info=peerDependencies
[coveralls-image]: https://coveralls.io/repos/<%= orgName %>/<%= appName %>/badge.svg
[coveralls-url]: https://coveralls.io/r/<%= orgName %>/<%= appName %>
