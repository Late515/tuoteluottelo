import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PhonelistComponent } from './phonelist/phonelist.component';
import { SharedModule } from './shared/shared.module';
import { PhonesComponent } from './phones/phones.component';
import { FilterTextboxComponent } from './phonelist/filter-textbox.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './shared/search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PhonelistComponent,
    PhonesComponent,
    FilterTextboxComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
