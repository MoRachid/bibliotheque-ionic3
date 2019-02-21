import { OnInit, OnDestroy } from '@angular/core';
import { Cd } from './../../models/Cd';
import { DataService } from './../../servives/data.service';
import { LendCdPage } from './../lend-cd/lend-cd';
import { Component } from '@angular/core';
import { MenuController, ModalController, ToastController, LoadingController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage implements OnInit, OnDestroy{

  cdList: Cd[];
  cdsSubscription: Subscription;

  constructor(private modalCtrl: ModalController,
              private cdsService: DataService,
              private menuCtrl: MenuController,
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.cdsSubscription = this.cdsService.cds$.subscribe(
      (cds: Cd[]) => {
        this.cdList = cds.slice();
      }
    );
    this.cdsService.emitCds();
  
  }

  onLoadCd(index: number) {
    let modal = this.modalCtrl.create(LendCdPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  ngOnDestroy() {
    this.cdsSubscription.unsubscribe();
  }

  onSaveList() {
    let loader = this.loadingCtrl.create({
      content: 'Sauvegarde en cours…'
    });
    loader.present();
    this.cdsService.saveCd().then(
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
    this.cdsService.retreiveCd().then(
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
