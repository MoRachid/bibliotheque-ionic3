import { OnInit, OnDestroy } from '@angular/core';
import { Cd } from './../../models/Cd';
import { DataService } from './../../servives/data.service';
import { LendCdPage } from './../lend-cd/lend-cd';
import { Component } from '@angular/core';
import { MenuController, ModalController } from 'ionic-angular';
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
              private menuCtrl: MenuController) {}

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
}
