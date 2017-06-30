import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { IAppStore, rootReducer, INITIAL_STATE } from './store';
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { DevToolsExtension } from 'ng2-redux';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppStore>, devTools: DevToolsExtension) {
    this.ngRedux.configureStore(rootReducer, INITIAL_STATE, [], [devTools.enhancer()]);
  }
}
