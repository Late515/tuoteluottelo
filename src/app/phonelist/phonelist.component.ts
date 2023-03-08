import { Component, OnInit } from '@angular/core';
import phoneData from '/Users/s2201201/Documents/portfolio/angularin-perusteet/angular-projektit/datan-hakeminen-json-tiedostosta/src/assets/phones/phones.json';
import { IPhone } from '../shared/interfaces';

@Component({
  selector: 'app-phonelist',
  templateUrl: './phonelist.component.html',
  styleUrls: ['./phonelist.component.css'],
})
export class PhonelistComponent implements OnInit {
  filteredPhones: IPhone[] = [];
  constructor() {}

  phones: IPhone[] = phoneData;

  ngOnInit() {}
}
