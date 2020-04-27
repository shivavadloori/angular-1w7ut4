import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HiddenDirective} from './customdirectives/hidden.directive';
import {UnderLineDirective} from './customdirectives/underline.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ,HiddenDirective,UnderLineDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
