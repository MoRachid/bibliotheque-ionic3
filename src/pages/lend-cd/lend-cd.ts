import { NgForm } from '@angular/forms';
import { DataService } from './../../servives/data.service';
import { Cd } from './../../models/Cd';
import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage {

  index: number;
  cd: Cd;

  constructor(public navParams: NavParams, 
              public viewCtrl: ViewController, 
              public cdService: DataService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.cdService.cdList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleCd() {
    this.cd.isLendCd = !this.cd.isLendCd;
    if(!this.cd.isLendCd){
      this.cd.namePerson = '';
    }
  }

  onSubmitForm(form: NgForm) {
    console.log(form.value);
    this.dismissModal();
  }

  onDeleteName() {
    this.cd.namePerson = '';
  }

}
