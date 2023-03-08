import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PhonelistComponent } from './phonelist/phonelist.component';
import { SharedModule } from './shared/shared.module';
import { PhonesComponent } from './phones/phones.component';
import { FilterTextboxComponent } from './phonelist/filter-textbox.component';

@NgModule({
  declarations: [
    AppComponent,
    PhonelistComponent,
    PhonesComponent,
    FilterTextboxComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
