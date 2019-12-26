import {registerApplication, start} from 'single-spa';

function pathPrefix(prefix) {
  return function(location) {
      return location.pathname.startsWith(prefix);
  }
}
registerApplication(
  'home',
  () => import('./src/home/home.spa-config.js'),
  () => location.pathname === "/home" ||  location.pathname =="/" ||
    location.pathname.startsWith('/home')
);

registerApplication(
  'react',
  () => import('./src/react/react.spa-config.js'),
  () => location.pathname ==="/react" 
);
registerApplication(
  'navBar', 
  () => import('./src/navBar/navbar.spa-config.js').then(module => module.navBar),
  () => true
);
registerApplication(
  'angularJS', 
  () => import ('./src/angularJS/angularJS.spa-config.js'),
  pathPrefix('/angularJS')
);
registerApplication(
  'angular',
  ()=> import ('./src/angular/angular.spa-config.js').then(module => {}),
  pathPrefix('/angularTs')
);

start();
