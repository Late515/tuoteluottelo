import { Component, OnInit } from '@angular/core';
import phoneData from '/Users/s2201201/Documents/portfolio/angularin-perusteet/angular-projektit/datan-hakeminen-json-tiedostosta/src/assets/phones/phones.json';
import { IPhone } from '../shared/interfaces';

@Component({
  selector: 'app-phonelist',
  templateUrl: './phonelist.component.html',
  styleUrls: ['./phonelist.component.css'],
})
export class PhonelistComponent implements OnInit {
  title!: string;
  phones: IPhone[] = phoneData;

  constructor() {}

  filteredPhones: IPhone[] = phoneData;

  ngOnInit() {
    this.title = 'Phones';
  }

  filter(data: string) {
    if (data) {
      this.filteredPhones = this.filteredPhones.filter((phone: IPhone) => {
        return phone.name.toLowerCase().indexOf(data.toLowerCase()) > -1;
      });
    } else {
      this.filteredPhones = this.phones;
    }
  }
}
