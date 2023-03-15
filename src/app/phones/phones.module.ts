import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonesRoutingModule } from './phones-routing.module';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  declarations: [],
  imports: [CommonModule, PhonesRoutingModule, FilterPipeModule],
})
export class PhonesModule {}
