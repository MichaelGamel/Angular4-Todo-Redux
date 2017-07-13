import { CompletedOnlyPipe } from './shared/pipes/completed-count.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { IAppState, rootReducer, INITIAL_STATE } from './root.reducer';
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { DevToolsExtension } from 'ng2-redux';
import logger from 'redux-logger';
import { Store, createStore } from 'redux';



@NgModule({
  declarations: [
    AppComponent
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
  constructor(private ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    let devToolEnhancer = isDevMode ? devTools.enhancer() : undefined;
    let logging = isDevMode ? [logger] : [];
    // let store = createStore(rootReducer, devToolEnhancer) as Store<IAppState>
    ngRedux.configureStore(rootReducer, INITIAL_STATE, logging, devToolEnhancer);
    // ngRedux.provideStore(store);
  }
}
