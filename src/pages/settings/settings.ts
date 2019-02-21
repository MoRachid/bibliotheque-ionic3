import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private menuCtrl: MenuController) {
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

}
