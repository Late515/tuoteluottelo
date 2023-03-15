import { Component, OnInit } from '@angular/core';
import { IPhone, phoneItem } from '../shared/interfaces';
import { PhoneService } from '../core/phone.service';
import { ActivatedRoute } from '@angular/router';
import { FilterPipeModule } from 'ngx-filter-pipe';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css'],
})
export class PhonesComponent implements OnInit {
  phoneId: any = '';
  chosenPhone: any = '';
  allReady = false;
  phones: phoneItem[] = [];
  phone: IPhone = null as any;
  data: any = '';

  constructor(
    private phoneService: PhoneService,
    private route: ActivatedRoute // private location: Location
  ) {}

  ngOnInit() {
    // let id = Number(this.route.snapshot.paramMap.get('id'));
    this.phoneId = this.route.snapshot.params['id'];
    this.route.params.subscribe((params) => {
      this.phoneId = params['id'];
    });
    this.phoneService.getProduct(this.phoneId).subscribe((data: any) => {
      this.chosenPhone = data;
      this.allReady = true;
    });
  }
}
