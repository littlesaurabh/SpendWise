import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import {LoginPage} from '../login/login'
  import { from } from 'rxjs';
  import {AppComponent} from '../../app.component'
  import {PopUpComponent} from '../pop-up/pop-up.component'
// import { PopoverComponent } from '../../component/popover/popover.component';

@Component({
  selector: 'tran',
  templateUrl: './tran.page.html',
  styleUrls: ['./tran.page.scss'],
})
export class TranPage implements OnInit {

  constructor(public alertController: AlertController,public popoverController: PopoverController) { }

  ngOnInit() {
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopUpComponent,
      animated:true,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Split',
      inputs: [
        {
          label:'Saurabh',
          name: 'username',
          placeholder: 'Username'
        },
        {
          label:'Saurabh',
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}

