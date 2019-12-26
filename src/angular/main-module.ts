import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {enableProdMode} from '@angular/core';

try {
    enableProdMode();
} catch (err) {
    console.info('EnableProdMode already set')
}

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export default class AppModule {
}
