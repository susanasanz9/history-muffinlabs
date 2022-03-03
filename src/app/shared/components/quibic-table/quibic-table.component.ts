import { Component, Input, OnInit } from '@angular/core';

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
  page: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
