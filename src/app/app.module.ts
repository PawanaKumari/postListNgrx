import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routingModule';
import { HeaderComponent } from './shared/components/header/header.component';
// import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { appReducer } from './store/app.state';

import { PostEffects } from './posts/post-list/state/post.effect';
import { PostModule } from './posts/post.module';
import { CounterModule } from './counter/counter.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PostModule,
    CounterModule,
    RouterModule,
    HttpClientModule,
 
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  // exports:[PostModule,CounterModule],
  bootstrap: [AppComponent],

})
export class AppModule {}
