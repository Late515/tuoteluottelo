import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonelistComponent } from './phonelist.component';

const routes: Routes = [{ path: 'phonelist', component: PhonelistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhonelistRoutingModule {}
