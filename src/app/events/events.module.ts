import { NgModule } from '@angular/core';
import { EventsListComponent } from './components/events-list/events-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EventsListComponent],
  imports: [
    SharedModule
  ]
})
export class EventsModule { }
