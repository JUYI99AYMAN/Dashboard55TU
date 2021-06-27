import { Charge } from './../model/charge.model';
import { ChargeService } from './../../service/charge.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.scss']
})
export class ChargesComponent implements OnInit {

  charges : Charge[];

  constructor(private chargeService: ChargeService ) {
        this.charges = chargeService.listeCharge();
    }
    

  ngOnInit() {
  }

  supprimerCharge(charg: Charge)
{
    //console.log(charg);
    let conf = confirm("Etes-vous sûr ?");
      if (conf)
    this.chargeService.supprimerCharge(charg);
}


}
