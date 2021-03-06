import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') inputValue?: ElementRef;
  @ViewChild('amountInput') amountValue?: ElementRef;
  @Output() addIngredient = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  addButton() {
    const iName = this.inputValue?.nativeElement.value;
    const iAmount = this.amountValue?.nativeElement.value;
    const newIngredient = new Ingredient(iName, iAmount);
    this.addIngredient.emit(newIngredient);
  }
}
