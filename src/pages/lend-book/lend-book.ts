import { DataService } from './../../servives/data.service';
import { Book } from './../../models/Book';
import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage {

  index: number;
  book: Book;

  constructor(public navParams: NavParams, 
              public viewCtrl: ViewController, 
              public bookService: DataService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.bookService.bookList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleBook() {
    this.book.isLendBook = !this.book.isLendBook;
    if(!this.book.isLendBook){
      this.book.namePerson = '';
    }
  }

  onSubmitForm(form: NgForm) {
    console.log(form.value);
    this.dismissModal();
}

onDeleteName() {
    this.book.namePerson = '';
}
}
