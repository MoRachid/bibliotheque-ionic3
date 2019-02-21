import { Book } from './../../models/Book';
import { DataService } from './../../servives/data.service';
import { LendBookPage } from './../lend-book/lend-book';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuController, ModalController, ToastController, LoadingController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage implements OnInit, OnDestroy{

  booksList: Book[];
  booksSubscription: Subscription;

  constructor(private modalCtrl: ModalController,
              private booksService: DataService,
              private menuCtrl: MenuController,
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.booksSubscription = this.booksService.books$.subscribe(
      (books: Book[]) => {
        this.booksList = books.slice();
      }
    );
      this.booksService.emitBooks();
  }

  onLoadBook(index: number) {
    let modal = this.modalCtrl.create(LendBookPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }

  onSaveList() {
    let loader = this.loadingCtrl.create({
      content: 'Sauvegarde en cours…'
    });
    loader.present();
    this.booksService.saveBook().then(
      () => {
        loader.dismiss();
        this.toastCtrl.create({
          message: 'Données sauvegardées !',
          duration: 3000,
          position: 'bottom'
        }).present();
      },
      (error) => {
        loader.dismiss();
        this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'bottom'
        }).present();
      }
    );
  }

  onFetchList() {
    let loader = this.loadingCtrl.create({
      content: 'Récuperation en cours…'
    });
    loader.present();
    this.booksService.retreiveBook().then(
      () => {
        loader.dismiss();
        this.toastCtrl.create({
          message: 'Données récupérées !',
          duration: 3000,
          position: 'bottom'
        }).present();
      },
      (error) => {
        loader.dismiss();
        this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'bottom'
        }).present();
      }
    );
  }
}
