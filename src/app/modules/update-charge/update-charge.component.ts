import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ChargeService } from 'src/app/service/charge.service';
import { Charge } from '../model/charge.model';

@Component({
  selector: 'app-update-charge',
  templateUrl: './update-charge.component.html',
  styleUrls: ['./update-charge.component.scss']
})
export class UpdateChargeComponent implements OnInit {
  
  currentCharge = new Charge();

  constructor( private activatedRoute: ActivatedRoute,
                    
                private router :Router,

               private chargeService: ChargeService) { }

  ngOnInit() {
    //console.log(this.activatedRoute.snapshot.params.id);

    this.currentCharge = this.chargeService.consulterCharge(this.activatedRoute.snapshot.params.id);
       console.log(this.currentCharge);
  }

  updateCharge(){
    //console.log(this.currentCharge);
    this.chargeService.updateCharge(this.currentCharge);
    this.router.navigate(["charges"]);
  }

}
