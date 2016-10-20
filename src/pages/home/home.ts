import { Component } from '@angular/core';
import { HallView } from '../hall-view/hall-view';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'home.html'
})
export class Home {
    names: any;
    title: string;
    pushPage: any;

  constructor(public navCtrl: NavController) {
      this.names=[
          {"title":"The Great Bahrain hall","type":"Reception","charge":"120","address":"Manama","img_src":"img1.png"},
          {"title":"The not so great hall","type":"Birthday","charge":"220","address":"East Riffa","img_src":"img2.png"},
          {"title":"The Awesome hall","type":"Party","charge":"320","address":"West Riffa","img_src":"img3.png"},
          {"title":"The Sexy hall","type":"Reception","charge":"420","address":"Muharraq","img_src":"img4.png"},
          {"title":"The bleh hall","type":"Birthday","charge":"520","address":"Zallaq","img_src":"img5.png"},
        ];

      console.log("constructor working !!");
      this.title="Paco";
  }
  open(obj){
      this.navCtrl.push(HallView,{
        hall: obj
      });

  }

  ionViewDidLoad() {
    console.log('Hello Home Page');

  }

}
