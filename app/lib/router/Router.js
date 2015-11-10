/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Stuff"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/students', {
  name: 'Students'
});

Router.route('/textbooks', {
  name: 'Textbooks'
});

Router.route('/buyorders', {
  name: 'BuyOrders'
});

Router.route('/sellorders', {
  name: 'SellOrders'
});

Router.route('/matches', {
  name: 'Matches'
});

Router.route('/help', {
  name: 'Help'
});