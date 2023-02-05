import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  DisabledContainerIfDirective,
  DisabledControlIfDirective,
} from './disabled-if.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DisabledControlIfDirective,
    DisabledContainerIfDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
