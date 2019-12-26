import singleSpaAngular from 'single-spa-angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';
import AppModule from './main-module.ts';
const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    return platformBrowserDynamic().bootstrapModule(AppModule);
  },
  template: `<ang-app />`,
  Router,
  NgZone: NgZone,
});
export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;