import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { AddLineNumberComponent } from './add-line-number/add-line-number.component';
import { CaseConverterComponent } from './case-converter/case-converter.component';
import { NormalizeToNfcComponent } from './normalize-to-nfc/normalize-to-nfc.component';
import { TextConverterRoutingModule } from './text-converter-routing.module';

@NgModule({
  imports: [
    SharedModule,
    TextConverterRoutingModule
  ],
  declarations: [
    AddLineNumberComponent,
    CaseConverterComponent,
    NormalizeToNfcComponent
  ]
})
export class TextConverterModule { }
