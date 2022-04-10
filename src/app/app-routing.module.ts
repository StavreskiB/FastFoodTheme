import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementhomeComponent } from './components/managementhome/managementhome.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainComponent } from './components/main/main.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MenulistComponent } from './components/menulist/menulist.component';
import { MenudetailComponent } from './components/menudetail/menudetail.component';
import { EmployeeslistComponent } from './components/employeeslist/employeeslist.component';
import { AddmenuComponent } from './components/addmenu/addmenu.component';
import { NormativesComponent } from './components/normatives/normatives.component';
import { InvoicelistComponent } from './components/invoicelist/invoicelist.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { NotificationComponent } from './components/notification/notification.component';
import { EventsComponent } from './components/events/events.component';
import { ShiftsComponent } from './components/shifts/shifts.component';
import { ProductstocksComponent } from './components/productstocks/productstocks.component';
import { NewinvoiceComponent } from './components/newinvoice/newinvoice.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: ManagementhomeComponent, 
    children: [
      {path : 'main', component : MainComponent},
      {path : 'profile', component : ProfileComponent},
      {path : 'menulist', component : MenulistComponent},
      {path : 'menudetail', component : MenudetailComponent},
      {path : 'employees', component : EmployeeslistComponent},
      {path : 'addmenu', component : AddmenuComponent},
      {path : 'normatives', component : NormativesComponent}, 
      {path : 'invoicelist', component : InvoicelistComponent},
      {path : 'statistics', component : StatisticsComponent},
      {path : 'notification', component : NotificationComponent},
      {path : 'events', component : EventsComponent},
      {path : 'shifts', component : ShiftsComponent},
      {path : 'productstocks', component : ProductstocksComponent},
      {path : 'newinvoice', component : NewinvoiceComponent},
      {path : 'settings', component : SettingsComponent}



  ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
