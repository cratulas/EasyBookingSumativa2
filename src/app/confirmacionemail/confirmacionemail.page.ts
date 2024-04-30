import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confirmacionemail',
  templateUrl: './confirmacionemail.page.html',
  styleUrls: ['./confirmacionemail.page.scss'],
})
export class ConfirmacionemailPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
   }


   //el goback fallo se ve como si fuera movel en web no utilizar pero tampoco sacar por que veremos este punto
   //en las otra pagina para que el usuario no quede estancado 
  goBack() {
     this.navCtrl.back();
  }

  confirm() {
     this.navCtrl.navigateRoot('/login2');
  }
}