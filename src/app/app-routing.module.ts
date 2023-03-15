import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PhonelistComponent } from './phonelist/phonelist.component';
import { PhonesComponent } from './phones/phones.component';

const routes: Routes = [
  { path: 'phones-list', component: PhonelistComponent },
  { path: 'phones/:id', component: PhonesComponent },
  { path: '', redirectTo: 'phones-list', pathMatch: 'full' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
