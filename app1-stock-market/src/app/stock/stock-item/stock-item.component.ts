import { Component, OnDestroy, OnInit } from '@angular/core';
import { stock } from 'src/app/models/stock.model';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit, OnDestroy {
  stockObj!: stock;
  public stockClass?: any;
  public stockStyles?: any;
  public stockList!: stock[];
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
    this.stockObj = new stock('Test Stock Company', 'TSC', 80, 10);
    let diff = this.stockObj.price / this.stockObj.previousPrice;
    let largeChange = Math.abs(diff) > 0.1;
    this.stockClass = {
      positive: this.stockObj.isPositiveChange,
      negative: !this.stockObj.isPositiveChange,
      'large-change': largeChange,
      'small-change': !largeChange,
    };
    this.stockStyles = {
      color: this.stockObj.isPositiveChange() ? 'green' : 'red',
      'font-size': largeChange ? '1.2em' : '0.8em',
    };

    this.stockList = [
      new stock('b', 'b', 10, 21),
      new stock('c', 'b', 20, 31),
      new stock('a', 'b', 100, 3),
    ];
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
