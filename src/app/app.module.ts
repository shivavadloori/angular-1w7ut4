import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing }        from './app.routing';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HiddenDirective} from './customdirectives/hidden.directive';
import {UnderLineDirective} from './customdirectives/underline.directive';
import {LoginComponent} from './login/login.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,routing],
  declarations: [ AppComponent, HelloComponent ,HiddenDirective,UnderLineDirective,LoginComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
