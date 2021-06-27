import { Charge } from './../modules/model/charge.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChargeService {

  charges : Charge[];
  Charge = new Charge();


  constructor() { 
    this.charges = [
      {idCharge : 1, statusCharge : "Arriving today", truckNumberCharge : "TR09AADFF33", originCharge : "BGR", deliveryPointCharge : " Latvia ", estimatedPointCharge : "12 Apr 2021", costCharge : " $ 97.09", dateCreation : new Date("01/14/2011")},
      {idCharge : 2, statusCharge : "Package's been shiped", truckNumberCharge : "TR09AA34F", originCharge : "TUR", deliveryPointCharge : " Monaco ", estimatedPointCharge : "12 Apr 2021", costCharge : " $ 97.09", dateCreation : new Date("01/14/2011")},
      {idCharge : 5, statusCharge : "Delivered", truckNumberCharge : "TR09220404401G", originCharge : "HKG", deliveryPointCharge : " New Zealand ", estimatedPointCharge : "12 Apr 2021", costCharge : " $ 97.09", dateCreation : new Date("01/14/2011")},
      {idCharge : 13, statusCharge : "Package is ready to sent ", truckNumberCharge : "TR09AA34033", originCharge : "BGR", deliveryPointCharge : " Latvia ", estimatedPointCharge : "12 Apr 2021", costCharge : " $ 97.09", dateCreation : new Date("01/14/2011")},
      {idCharge : 12, statusCharge : "Package's been shiped", truckNumberCharge : "TR09AA343", originCharge : "TUR", deliveryPointCharge : " Latvia ", estimatedPointCharge : "12 Apr 2021", costCharge : " $ 97.09", dateCreation : new Date("01/14/2011")},
      {idCharge : 11, statusCharge : "Arriving today", truckNumberCharge : "TR09AA3RRE", originCharge : "BGR", deliveryPointCharge : " Mexico ", estimatedPointCharge : "12 Apr 2021", costCharge : " $ 97.09", dateCreation : new Date("01/14/2011")},
      {idCharge : 16, statusCharge : "Arriving today", truckNumberCharge : "TR09AA340RR", originCharge : "SVN", deliveryPointCharge : " Latvia ", estimatedPointCharge : "12 Apr 2021", costCharge : " $ 97.09", dateCreation : new Date("01/14/2011")},
      {idCharge : 15, statusCharge : "Package's been shiped", truckNumberCharge : "TR09AA34GGF", originCharge : "BGR", deliveryPointCharge : " Latvia ", estimatedPointCharge : "12 Apr 2021", costCharge : " $ 97.09", dateCreation : new Date("01/14/2011")},
      {idCharge : 119, statusCharge : "Arriving today", truckNumberCharge : "TR09AA34T", originCharge : "BGR", deliveryPointCharge : " Latvia ", estimatedPointCharge : "12 Apr 2021", costCharge : " $ 97.09", dateCreation : new Date("01/14/2011")},
      {idCharge : 22, statusCharge : "Arriving today", truckNumberCharge : "TR09AA340", originCharge : "HKG", deliveryPointCharge : " Latvia ", estimatedPointCharge : "12 Apr 2021", costCharge : " $ 97.09", dateCreation : new Date("01/14/2011")},
      {idCharge : 143, statusCharge : "Package's been shiped", truckNumberCharge : "TR09AA30G", originCharge : "BGR", deliveryPointCharge : " Latvia ", estimatedPointCharge : "12 Apr 2021", costCharge : " $ 97.09", dateCreation : new Date("01/14/2011")},
      {idCharge : 10, statusCharge : "Delivered", truckNumberCharge : "TR09AA34R", originCharge : "TUR", deliveryPointCharge : " colombia ", estimatedPointCharge : "12 Apr 2021", costCharge : " $ 97.09", dateCreation : new Date("01/14/2011")},

       ];

  }

  listeCharge():Charge[] {
    return this.charges;
    }

  ajouterCharge(charge : Charge){
      this.charges.push(charge);

    }

  supprimerCharge( charg : Charge){
      //supprimer le produit prod du tableau produits
      const index = this.charges.indexOf(charg, 0);
      if (index > -1) {
      this.charges.splice(index, 1);
      }
      //ou Bien
      /* this.produits.forEach((cur, index) => {
      if(prod.idProduit === cur.idProduit) {
      this.produits.splice(index, 1);
      }
      }); */
      }

  consulterCharge(id:number): Charge{
    return this.charges.find(p => p.idCharge == id);
        
        }

  updateCharge(charg: Charge) {
    // console.log(p);
    this.supprimerCharge(charg);
    this.ajouterCharge(charg);
  }

  trierProduits() {
    this.charges = this.charges.sort((n1, n2) => {
      if (n1.idCharge > n2.idCharge) {
        return 1;
      }
      if (n1.idCharge < n2.idCharge) {
        return -1;
      }
      return 0;
    });
  }
}
