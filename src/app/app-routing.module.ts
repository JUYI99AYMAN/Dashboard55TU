import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilControllerComponent } from './accueil-controller/accueil-controller.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';
import { AddChargeComponent } from './modules/add-charge/add-charge.component';
import { CalculateComponent } from './modules/calculate/calculate.component';
import { CarriersComponent } from './modules/carriers/carriers.component';
import { ChargesComponent } from './modules/charges/charges.component';
import { ContactsComponent } from './modules/contacts/contacts.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ReportsComponent } from './modules/reports/reports.component';
import { ShipmentsComponent } from './modules/shipments/shipments.component';
import { TrackingComponent } from './modules/tracking/tracking.component';
import { UpdateChargeComponent } from './modules/update-charge/update-charge.component';
import { HomeComponent } from './shared/components/home/home.component';




const routes: Routes = [
  {
    path: 'acceuil',
    component: AccueilControllerComponent,
  },
  { 
    
      path:'',
      component: LoginComponent
  },
    

  { 
  
  path: '',
  component: DefaultComponent,
  children: [{

    path: 'dashboard',
    component: DashboardComponent
  }, 
  {
    path: 'shipments',
    component: ShipmentsComponent
  },
  {
    path: 'tracking',
    component: TrackingComponent
  },
  {
    path: 'carriers',
    component: CarriersComponent
  },
  {
    path: 'calculate',
    component: CalculateComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'charges',
    component: ChargesComponent
  },
  {
    path: 'add-charge',
    component: AddChargeComponent
  },
  {
    path: 'updateCharge/:id',
    component:  UpdateChargeComponent
  },
  
  
  ]
  
  }]; 
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
