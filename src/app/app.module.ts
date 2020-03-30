import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  entryComponents: [HelloWorldComponent],
  providers: []
})
export class AppModule {
  constructor(injector: Injector) {
    // define custom component using the HelloWorldComponent
    const custom = createCustomElement(HelloWorldComponent, { injector: injector });
    // define custom component's tag
    customElements.define('app-hello-world', custom);
  }
  
  ngDoBootstrap() { }
}
