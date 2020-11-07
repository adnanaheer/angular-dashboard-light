import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

//   myControl = new FormControl();
//   options: string[] = [
//     'One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three',
//     'One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three'
// ];
//   filteredOptions: Observable<string[]>;
  
  constructor() { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  toppings = new FormControl();
  
  toppingList: string[] = [
    'Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato',
    'Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato',
    'Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato',
    'Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'
];

  // ngOnInit(): void {
  //   this.filteredOptions = this.myControl.valueChanges
  //     .pipe(
  //       startWith(''),
  //       map(value => this._filter(value))
  //     );
  // }

//  private _filter(value: string): string[] {
//     const filterValue = value.toLowerCase();

//     return this.options.filter(option => option.toLowerCase().includes(filterValue));
//   }

}
