import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../core/phone.service';

@Component({
  selector: 'app-phonelist',
  templateUrl: './phonelist.component.html',
  styleUrls: ['./phonelist.component.css'],
})
export class PhonelistComponent implements OnInit {
  productList: any;

  searchText = '';

  constructor(public phoneService: PhoneService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.phoneService.getAllProducts().subscribe(
      (data: any) => {
        this.productList = data;
      },
      (error: any) => {
        console.log('http-error');
        console.log(error);
      }
    );
  }
}
