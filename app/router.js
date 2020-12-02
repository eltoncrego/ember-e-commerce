import EmberRouter from '@ember/routing/router';
import config from 'ember-e-commerce/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('clothes', function() {
    this.route('t-shirt');
  });
  this.route('item', { path: '/item/:item_id'});
  this.route('not-found', {path: '/*path'});
});