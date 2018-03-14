import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule } from '@angular/forms';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPageModule } from '../pages/feed/feed.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import { MoovieProvider } from '../providers/movie/movie';
import { SideMenuPageModule } from '../pages/sideMenu/sideMenu.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { AboutPageModule } from '../pages/about/about.module';
import { MovieDetailsPageModule } from '../pages/movie-details/movie-details.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    IntroPageModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    SideMenuPageModule,
    ProfilePageModule,
    AboutPageModule,
    MovieDetailsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen, 
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoovieProvider
  ]
})
export class AppModule {}
