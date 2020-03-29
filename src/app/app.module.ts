import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  entryComponents: [HelloWorldComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    // define custom component using the HelloWorldComponent
    const custom = createCustomElement(HelloWorldComponent, { injector: injector });
    // define custom component's tag
    customElements.define('app-hello-world', custom);
  }
}
