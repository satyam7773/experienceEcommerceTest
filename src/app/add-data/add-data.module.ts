import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDataPageRoutingModule } from './add-data-routing.module';

import { AddDataPage } from './add-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddDataPageRoutingModule
  ],
  declarations: [AddDataPage]
})
export class AddDataPageModule {}
