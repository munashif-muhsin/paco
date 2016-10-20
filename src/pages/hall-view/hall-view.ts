import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

/*
  Generated class for the HallView page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'hall-view.html'
})
export class HallView {
hall :any;
rate: any;
  constructor(public navCtrl: NavController,public params:NavParams) {
        this.hall=params.get("hall");
        this.rate =4;
  }

  ionViewDidLoad() {
    console.log('Hello HallView Page');
  }

}
