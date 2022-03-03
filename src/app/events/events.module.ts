import { NgModule } from '@angular/core';
import { EventsListComponent } from './components/events-list/events-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EventsListComponent],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EventsModule { }
