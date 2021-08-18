import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  tabIndex: number = 0;
  cards_0 = [1, 2, 3, 4, 5];
  cards_1 = [5, 6, 7, 8, 9];
  cards_2 = [1, 0, 1, 0, 1];

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.tabIndex = tabChangeEvent.index;
  }
}
