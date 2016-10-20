import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { HallView } from '../pages/hall-view/hall-view';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    MyApp,
    HallView,
    Home
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HallView,
    Home
  ],
  providers: []
})
export class AppModule {}
