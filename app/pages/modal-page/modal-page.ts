import { Component } from '@angular/core';
import { LoadingController, ViewController } from 'ionic-angular';

/*
  Generated class for the ModalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/modal-page/modal-page.html',
})
export class ModalPage {

  constructor(
    private viewCtrl: ViewController,
    private loadCtrl: LoadingController) {

  }

  close() {
    this.viewCtrl.dismiss();
  }

  loadAndDismissOne() {
    let loader = this.loadCtrl.create({
      content: 'Loading...'
    });

    loader.onDidDismiss = () => {
      this.close();
    };

    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 3000);
  }

  loadAndDismissTwo() {
    let loader = this.loadCtrl.create({
      content: 'Loading...'
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();

      this.close();
    }, 3000);
  }

}
