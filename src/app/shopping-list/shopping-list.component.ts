import { Component, OnInit } from '@angular/core';
import { Incredient } from '../shared/incredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  incredients: Incredient[] = [
    new Incredient('Mayonise', 50),
    new Incredient('Cheese', 70),
    new Incredient('Bun', 10),
  ];

  constructor() {}

  ngOnInit(): void {}
}
