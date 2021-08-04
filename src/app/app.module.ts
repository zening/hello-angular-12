import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { DemoMaterialModule } from './material-module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TabsComponent } from './tabs/tabs.component';
import { JSnackbarComponent } from './j-snackbar/j-snackbar.component';
import { CarouselComponent } from './carousel/carousel.component';

// import { FlickityModule } from 'ngx-flickity';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AlertDialogComponent, AlertDialogTemplate } from './alert-dialog/alert-dialog.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DemoMaterialModule,
    AppRoutingModule,
    // FlickityModule,
    IvyCarouselModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TabsComponent,
    JSnackbarComponent,
    CarouselComponent,
    AlertDialogComponent,
    AlertDialogTemplate,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
