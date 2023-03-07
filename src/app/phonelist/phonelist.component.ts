import { Component, OnInit } from '@angular/core';
import phoneData from '/Users/s2201201/Documents/portfolio/angularin-perusteet/angular-projektit/datan-hakeminen-json-tiedostosta/src/assets/phones/phones.json';
interface Phone {
  age: Number;
  id: String;
  imageUrl: String;
  name: String;
  snippet: String;
}

@Component({
  selector: 'app-phonelist',
  templateUrl: './phonelist.component.html',
  styleUrls: ['./phonelist.component.css'],
})
export class PhonelistComponent implements OnInit {
  constructor() {}

  phones: Phone[] = phoneData;

  ngOnInit(): void {}
}
