import { Component, Inject } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-janison-snackbar',
  templateUrl: './j-snackbar.component.html',
  styleUrls: ['./j-snackbar.component.scss']
})
export class JSnackbarComponent {
  constructor(
    public snackBarRef: MatSnackBarRef<JSnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}
}
