import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {



  constructor() { }

  

  cards() {
    return [71, 78, 39, 66];
  }

  
  
}
