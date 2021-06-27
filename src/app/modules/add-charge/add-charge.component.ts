import { Component, OnInit } from '@angular/core';
import { ChargeService } from 'src/app/service/charge.service';
import { Charge } from '../model/charge.model';

@Component({
  selector: 'app-add-charge',
  templateUrl: './add-charge.component.html',
  styleUrls: ['./add-charge.component.scss']
})
export class AddChargeComponent implements OnInit {

  newCharge = new Charge();

  message :string;
  constructor(private chargeService: ChargeService ) {

  }

  ngOnInit() {
  }

  addCharge(){
    //console.log(this.newCharge);
    this.chargeService.ajouterCharge(this.newCharge);
    this.message = "Charge " + this.newCharge + " ajouté avec succès !";

    }
    

}
