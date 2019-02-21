import { AuthPage } from './../pages/auth/auth';
import { TabsPage } from './../pages/tabs/tabs';
import { SettingsPage } from './../pages/settings/settings';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any = TabsPage;
  settingsPage:any = SettingsPage;
  authPage:any = AuthPage;
  
  @ViewChild('content') content: NavController;

  isAuth: boolean;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen, 
              private menuCtrl: MenuController) {
                
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      let config = {
        apiKey: "AIzaSyAJ5cBp_Mtdh8Lg7d8din9D_R5Y2IjMTdU",
        authDomain: "biblio-a94bf.firebaseapp.com",
        databaseURL: "https://biblio-a94bf.firebaseio.com",
        projectId: "biblio-a94bf",
        storageBucket: "",
        messagingSenderId: "549414030095"
      };
      firebase.initializeApp(config);

      firebase.auth().onAuthStateChanged(
        (user) => {
          if(user){
            this.isAuth = true;
            this.content.setRoot(TabsPage);
          }else{
            this.isAuth = false;
            this.content.setRoot(AuthPage, {mode: 'connect'});
          }
        }
      )
    });
  }

  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
  }

  onDisconnect() {
    firebase.auth().signOut();
    this.menuCtrl.close();
  }
}

