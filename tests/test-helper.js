import Application from 'ember-e-commerce/app';
import config from 'ember-e-commerce/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
