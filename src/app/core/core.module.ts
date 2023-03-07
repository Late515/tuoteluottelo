import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PhoneService } from './phone.service';
import { SorterService } from './sorter.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [PhoneService, SorterService],
})
export class CoreModule {}
