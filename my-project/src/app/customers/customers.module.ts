import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CustomersComponent } from './customers.component';
import {CustomerListComponent} from './customers-list/customers-list.component';
import {FilterComponent} from './customers-list/filter.component';
import {SharedModule} from '../shared/shared.module';
import {CustomersRoutingModule} from './customers-routing.module';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerListComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CustomersRoutingModule
  ],
  exports: [CustomersComponent],
  providers: [],
})
export class CustomersModule { }
