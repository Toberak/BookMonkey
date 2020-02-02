import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bm-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {


  @Input() book: Book;
  constructor() { }

  ngOnInit() {
  }

}
