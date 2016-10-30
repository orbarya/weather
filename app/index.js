var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var sentryKey = '6e305b999e1e477da9dc4f9f31f2f64d';
var sentryApp = '107318';
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp;

var _APP_INFO = {
	name: 'Github Battle',
	branch: 'video4',
	version: '1.0'
}

ReactDOM.render(routes, document.getElementById('app'));