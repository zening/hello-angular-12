import { Component, VERSION } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JSnackbarComponent } from './j-snackbar/j-snackbar.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  data = { 
    message: 'Can’t upload file. Retry in 5 seconds.', 
    action: 'Action'
  };
  snackbarClass = 'janison-snackbar';
  constructor(public snackBar: MatSnackBar) {}
  showSnackbar() {
    this.openSnackBar(this.data, this.snackbarClass);
  }

  openSnackBar(data: {}, panelClass: string) {
    this.snackBar.openFromComponent(JSnackbarComponent, {
      data: data,
      panelClass: panelClass
      // duration: 10000
    });
  }
}
