import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { DemoMaterialModule } from './material-module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [BrowserModule, FormsModule, DemoMaterialModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, TabsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
