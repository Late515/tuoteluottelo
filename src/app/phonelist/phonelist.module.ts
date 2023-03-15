import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PhonelistRoutingModule } from './phonelist-routing.module';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    PhonelistRoutingModule,
    FilterPipeModule,
    FormsModule,
  ],
})
export class PhonelistModule {}
