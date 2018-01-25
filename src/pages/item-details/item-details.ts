import {Component} from '@angular/core';

import {ActionSheetController, NavController, NavParams} from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  pressedButton: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheet: ActionSheetController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  openActionSheet() {
    let actionSheet = this.actionSheet.create({
      title: 'Prueba de action sheet',
      buttons: [
        {
          text: 'Prueba',
          handler: () => {
            this.pressedButton='Prueba'
          }
        },
        {
          text: 'Prueba 2',
          handler: () => {
            this.pressedButton='Prueba 2'
          }
        },
        {
          text: 'Prueba 3',
          handler: () => {
            this.pressedButton='Prueba 3'
          }
        }
      ]
    });
    actionSheet.present();
  }
}
