import { Component, OnDestroy, OnInit } from '@angular/core';
import { stock } from 'src/app/models/stock.model';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit, OnDestroy {
  stockObj!: stock;
  // public name!: string;
  // public code!: string;
  // public price!: number;
  // public previousPrice!: number;
  // public positiveChange!: boolean;
  // public favorite!: boolean;

  //we comment this because upgrade to class
  ngOnInit(): void {
    // this.name = 'Test Stock Company';
    // this.code = 'TSC';
    // this.price = 85;
    // this.previousPrice = 80;
    // this.positiveChange = this.price >= this.previousPrice;
    // this.favorite = false;
    this.stockObj = new stock('Test Stock Company', 'TSC', 85, 80);
  }

  toggleFavorite(event: Event) {
    console.log('We are toggling the favorite state for this stock', event);
    //this.favorite = !this.favorite;
    this.stockObj.favorite = !this.stockObj.favorite;
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
