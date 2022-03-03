import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { QuibicTableComponent } from './components/quibic-table/quibic-table.component';


@NgModule({
  declarations: [
    QuibicTableComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    QuibicTableComponent
  ]
})
export class SharedModule { }
