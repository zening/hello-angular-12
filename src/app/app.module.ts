import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { DemoMaterialModule } from './material-module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TabsComponent } from './tabs/tabs.component';
import { JanisonSnackbarComponent } from './janison-snackbar/janison-snackbar.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DemoMaterialModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TabsComponent,
    JanisonSnackbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
