<% if (isPrivate) { %>
[![Build Status](https://travis-ci.com/<%= orgName %>/<%= appName %>.svg?token=<%= travisToken %>&branch=master)](https://travis-ci.com/<%= orgName %>/<%= appName %>)
<% } %>
<% if (!isPrivate) { %>
[![npm version](https://badge.fury.io/js/<%= appName %>.svg)](http://badge.fury.io/js/<%= appName %>)
[![Dependency Status](https://david-dm.org/<%= orgName %>/<%= appName %>.svg)](https://david-dm.org/<%= orgName %>/<%= appName %>)
[![DevDependency Status](https://david-dm.org/<%= orgName %>/<%= appName %>/dev-status.svg)](https://david-dm.org/<%= orgName %>/<%= appName %>#info=devDependencies)
[![PeerDependency Status](https://david-dm.org/<%= orgName %>/<%= appName %>/peer-status.svg)](https://david-dm.org/<%= orgName %>/<%= appName %>#info=peerDependencies)
[![Build Status](https://travis-ci.org/<%= orgName %>/<%= appName %>.svg?branch=master)](https://travis-ci.org/<%= orgName %>/<%= appName %>)
<% } %>

# <%= appTitle %>

<%= appDescription %>
