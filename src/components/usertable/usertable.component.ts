import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

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

export class UsertableComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['UserId', 'Timestamp', 'Conversation', 'Rating', 'FeedBack', 'ReviewStatus'];
  expandedElement: PeriodicElement | null;
}

export interface PeriodicElement {
  Timestamp: string;
  UserId: number;
  Conversation: string;
  Rating: string;
  FeedBack: string,
  ReviewStatus: string,
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    UserId: 1,
    Timestamp: '20-02-2020 00:24:59',
    Conversation: '12 Total Converation',
    Rating: '1 Star',
    FeedBack: 'Good',
    ReviewStatus: 'Partially Completed',
    description: `Conversation Log comes here`
  }, {
    UserId: 2,
    Timestamp: '20-02-2020 03:10:10',
    Conversation: '4 Total Converation',
    Rating: '2 Star',
    FeedBack: 'Ok',
    ReviewStatus: 'Completed',
    description: `Conversation Log comes here`
  }, {
    UserId: 3,
    Timestamp: '20-02-2020 05:04:13',
    Conversation: '10 Total Converation',
    Rating: '5 Star',
    FeedBack: 'Not Bad',
    ReviewStatus: 'Not Started',
    description: `Conversation Log comes here`
  }, {
    UserId: 4,
    Timestamp: '20-02-2020 06:00:05',
    Conversation: '13 Total Converation',
    Rating: '3 Star',
    FeedBack: 'Bad',
    ReviewStatus: 'Not Started',
    description: `Conversation Log comes here`
  }, {
    UserId: 5,
    Timestamp: '20-02-2020 07:24:59',
    Conversation: '14 Total Converation',
    Rating: '1 Star',
    FeedBack: 'Good',
    ReviewStatus: 'Completed',
    description: `Conversation Log comes here`
  }, {
    UserId: 6,
    Timestamp: '20-02-2020 08:10:10',
    Conversation: '12 Total Converation',
    Rating: '5 Star',
    FeedBack: 'Not Bad',
    ReviewStatus: 'Completed',
    description: `Conversation Log comes here`
  }, {
    UserId: 7,
    Timestamp: '20-02-2020 08:24:13',
    Conversation: '9 Total Converation',
    Rating: '1 Star',
    FeedBack: 'Good',
    ReviewStatus: 'Completed',
    description: `Conversation Log comes here`
  }, {
    UserId: 8,
    Timestamp: '20-02-2020 09:00:05',
    Conversation: '11 Total Converation',
    Rating: '3 Star',
    FeedBack: 'Good',
    ReviewStatus: 'Partially Completed',
    description: `Conversation Log comes here`
  }, {
    UserId: 9,
    Timestamp: '9,20-02-2020 12:24:59,',
    Conversation: '4 Total Converation',
    Rating: '4 Star',
    FeedBack: 'Not Bad',
    ReviewStatus: 'Completed',
    description: `Conversation Log comes here`
  }, {
    UserId: 10,
    Timestamp: '20-02-2020 09:00:05',
    Conversation: '8 Total Converation',
    Rating: '5 Star',
    FeedBack: 'Bad',
    ReviewStatus: 'Partially Completed',
    description: `Conversation Log comes here`
  },
];
