import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './components/events-list/events-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [EventsListComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class EventsModule { }
