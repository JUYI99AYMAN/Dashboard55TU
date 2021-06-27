import { UpdateChargeComponent } from './../../modules/update-charge/update-charge.component';
import { AccueilControllerComponent } from './../../accueil-controller/accueil-controller.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { ShipmentsComponent } from 'src/app/modules/shipments/shipments.component';
import { TrackingComponent } from 'src/app/modules/tracking/tracking.component';
import { CarriersComponent } from 'src/app/modules/carriers/carriers.component';
import { CalculateComponent } from 'src/app/modules/calculate/calculate.component';
import { ReportsComponent } from 'src/app/modules/reports/reports.component';
import { ContactsComponent } from 'src/app/modules/contacts/contacts.component';
import { ChargesComponent } from 'src/app/modules/charges/charges.component';
import { AddChargeComponent } from 'src/app/modules/add-charge/add-charge.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ShipmentsComponent,
    TrackingComponent,
    CarriersComponent,
    CalculateComponent,
    ReportsComponent,
    ContactsComponent,
    AccueilControllerComponent,
    ChargesComponent,
    AddChargeComponent,
    UpdateChargeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
