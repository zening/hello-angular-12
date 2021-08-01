import { Component, VERSION } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JanisonSnackbarComponent } from './janison-snackbar/janison-snackbar.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  message = 'Pizza party!!! 🍕';
  snackbarClass = 'janison-snackbar';
  constructor(public snackBar: MatSnackBar) {}
  pizzaParty() {
    this.openSnackBar(this.message, this.snackbarClass);
  }

  openSnackBar(message: string, panelClass: string) {
    this.snackBar.openFromComponent(JanisonSnackbarComponent, {
      data: message,
      panelClass: panelClass
      // duration: 10000
    });
  }
}
