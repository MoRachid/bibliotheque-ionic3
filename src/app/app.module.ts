import { AuthPage } from './../pages/auth/auth';
import { AuthService } from './../servives/auth.service';
import { TabsPage } from './../pages/tabs/tabs';
import { SettingsPage } from './../pages/settings/settings';
import { LendCdPage } from './../pages/lend-cd/lend-cd';
import { LendBookPage } from './../pages/lend-book/lend-book';
import { CdListPage } from './../pages/cd-list/cd-list';
import { BookListPage } from './../pages/book-list/book-list';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DataService } from '../servives/data.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookListPage,
    CdListPage,
    LendBookPage,
    LendCdPage,
    SettingsPage,
    TabsPage,
    AuthPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookListPage,
    CdListPage,
    LendBookPage,
    LendCdPage,
    SettingsPage,
    TabsPage,
    AuthPage
  ],
  providers: [
    DataService,
    AuthService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
