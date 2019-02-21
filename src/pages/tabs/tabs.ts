import { BookListPage } from './../book-list/book-list';
import { CdListPage } from './../cd-list/cd-list';
import { Component } from '@angular/core';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  cdsPage = CdListPage;
  booksPage = BookListPage;
  
  constructor() {
  }

}
