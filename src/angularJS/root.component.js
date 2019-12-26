import angular from 'angular';
import template from './root.template.html';
angular
.module('angularApp')
.component('root', {
  template,
  controller: function() {
    window.dispatchEvent(new CustomEvent('showAlert', { detail: { type: 'info', message: 'Angular loaded', title: 'Information' } }));
  }
});