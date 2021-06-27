import { Injectable } from '@angular/core';
import { Charge } from '../model/charge.model';


@Injectable({
  providedIn: 'root'
})
export class ChargeService {

  charges : Charge[];

  constructor() { }
}
