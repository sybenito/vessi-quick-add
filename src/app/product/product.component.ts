import { Component, Input, OnInit } from '@angular/core';
import Shoes from '../data';

interface Ishoe {
  name: string;
  price: string;
  color: string;
  sizes: Array<string>;
  image1: string;
  image2: string;
  bestSeller: boolean;
  new: boolean;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})


export class ProductComponent implements OnInit {

  @Input() shoe: Ishoe = {
    name: '',
    price: '',
    color: '',
    sizes: [],
    image1: '',
    image2: '',
    bestSeller: false,
    new: false
  };

  isQuickAdd = false;
  sizeSelected = '';
  tileImage = this.shoe.image1;

  ngOnInit(): void {
  }

  toggleIsQuickAdd() {
    this.isQuickAdd = !this.isQuickAdd;
  }

  toggleShoe(toggle: boolean) {
    this.tileImage =  (toggle)? this.shoe.image2 : this.shoe.image1;
  }

}