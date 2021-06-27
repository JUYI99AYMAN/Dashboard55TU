import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { DataService } from 'src/app/service/data.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
     
  dashboard:any;


 
  //cards = [];
 

  

  //@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  //constructor(private dashboardService: DashboardService) { }
  constructor(private dataService:DataService) { }



  ngOnInit(): void{
   // this.cards = this.dashboardService.cards();
    this.getDashboardData();

    
  }

  getDashboardData(){
    this.dataService.getData().subscribe(res => {
       this.dashboard = res;
    })
  }

  

}
