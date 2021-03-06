import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { AboutPage } from '../about/about';
import { IntroPage } from '../intro/intro';

@IonicPage()
@Component({
  selector: 'page-sideMenu',
  templateUrl: 'sideMenu.html',
})
export class SideMenuPage {

  rootPage = ProfilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('chamada do Menu Lateral!');
  }

  openProfilePage() {
    this.navCtrl.push(ProfilePage);
  }

  openAboutPage() {
    this.navCtrl.push(AboutPage);
  }

  logout() {        
    this.navCtrl.setRoot(IntroPage);
    window.localStorage.clear();
    window.location.reload();
  }

}
