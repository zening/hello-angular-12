import { Component, Inject } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-janison-snackbar',
  templateUrl: './janison-snackbar.component.html',
  styleUrls: ['./janison-snackbar.component.scss']
})
export class JanisonSnackbarComponent {
  constructor(
    public snackBarRef: MatSnackBarRef<JanisonSnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}
}
