import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quibic-table',
  templateUrl: './quibic-table.component.html',
  styleUrls: ['./quibic-table.component.scss']
})
export class QuibicTableComponent implements OnInit {

  @Input() rows: string[] = [];
  @Input() items: any[] = [];
  @Input() showRow: boolean = true;
  @Input() pageSize: number = 10;
  @Input() showPaginator: boolean = true;
  @Input() paginatorMaxSize: number = 5;
  @Output() viewClicked = new EventEmitter<number>();

  page: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onClickView(idx: number) {
    this.viewClicked.emit(idx);
  }

}
