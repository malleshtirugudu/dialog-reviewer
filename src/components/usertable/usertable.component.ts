import { Component, ViewChild, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class UsertableComponent implements OnInit {
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  columnsToDisplay = ['userId', 'timestamp', 'conversation', 'rating', 'feedBack', 'reviewStatus'];
  expandedElement: PeriodicElement | null;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }  
}

export interface PeriodicElement {
  timestamp: string;
  userId: number;
  conversation: string;
  rating: string;
  feedBack: string,
  reviewStatus: string,
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    userId: 1,
    timestamp: '20-02-2020 00:24:59',
    conversation: '12 Total Converation',
    rating: '1 Star',
    feedBack: 'Good',
    reviewStatus: 'Partially Completed',
    description: `Conversation Log comes here`
  }, {
    userId: 2,
    timestamp: '20-02-2020 03:10:10',
    conversation: '4 Total Converation',
    rating: '2 Star',
    feedBack: 'Ok',
    reviewStatus: 'Completed',
    description: `Conversation Log comes here`
  }, {
    userId: 3,
    timestamp: '20-02-2020 05:04:13',
    conversation: '10 Total Converation',
    rating: '5 Star',
    feedBack: 'Not Bad',
    reviewStatus: 'Not Started',
    description: `Conversation Log comes here`
  }, {
    userId: 4,
    timestamp: '20-02-2020 06:00:05',
    conversation: '13 Total Converation',
    rating: '3 Star',
    feedBack: 'Bad',
    reviewStatus: 'Not Started',
    description: `Conversation Log comes here`
  }, {
    userId: 5,
    timestamp: '20-02-2020 07:24:59',
    conversation: '14 Total Converation',
    rating: '1 Star',
    feedBack: 'Good',
    reviewStatus: 'Completed',
    description: `Conversation Log comes here`
  }, {
    userId: 6,
    timestamp: '20-02-2020 08:10:10',
    conversation: '12 Total Converation',
    rating: '5 Star',
    feedBack: 'Not Bad',
    reviewStatus: 'Completed',
    description: `Conversation Log comes here`
  }, {
    userId: 7,
    timestamp: '20-02-2020 08:24:13',
    conversation: '9 Total Converation',
    rating: '1 Star',
    feedBack: 'Good',
    reviewStatus: 'Completed',
    description: `Conversation Log comes here`
  }, {
    userId: 8,
    timestamp: '20-02-2020 09:00:05',
    conversation: '11 Total Converation',
    rating: '3 Star',
    feedBack: 'Good',
    reviewStatus: 'Partially Completed',
    description: `Conversation Log comes here`
  }, {
    userId: 9,
    timestamp: '9,20-02-2020 12:24:59,',
    conversation: '4 Total Converation',
    rating: '4 Star',
    feedBack: 'Not Bad',
    reviewStatus: 'Completed',
    description: `Conversation Log comes here`
  }, {
    userId: 10,
    timestamp: '20-02-2020 09:00:05',
    conversation: '8 Total Converation',
    rating: '5 Star',
    feedBack: 'Bad',
    reviewStatus: 'Partially Completed',
    description: `Conversation Log comes here`
  },
];
