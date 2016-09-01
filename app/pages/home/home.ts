import {Component} from '@angular/core';
import {ModalController} from 'ionic-angular';
import {ModalPage} from '../modal-page/modal-page'

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(
    private modalCtrl: ModalController) {

  }

  ionViewDidEnter() {
    let modal = this.modalCtrl.create(ModalPage);

    modal.fireOtherLifecycles = false;

    modal.present();
  }
}
