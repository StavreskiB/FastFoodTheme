import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from '../app/components/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { ManagementhomeComponent } from './components/managementhome/managementhome.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MainComponent } from './components/main/main.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgApexchartsModule } from "ng-apexcharts";
import { MatTableModule } from '@angular/material/table';
import { ProfileComponent } from './components/profile/profile.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MenulistComponent } from './components/menulist/menulist.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MenudetailComponent } from './components/menudetail/menudetail.component';
import { MatDividerModule } from '@angular/material/divider';
import { EmployeeslistComponent } from './components/employeeslist/employeeslist.component';
import { AddmenuComponent } from './components/addmenu/addmenu.component';
import { MatSelectModule } from '@angular/material/select';
import { NormativesComponent } from './components/normatives/normatives.component';
import { InvoicelistComponent } from './components/invoicelist/invoicelist.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { NotificationComponent } from './components/notification/notification.component';
import { EventsComponent } from './components/events/events.component';
import { ShiftsComponent } from './components/shifts/shifts.component';
import { ProductstocksComponent } from './components/productstocks/productstocks.component';
import { NewinvoiceComponent } from './components/newinvoice/newinvoice.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    MenuComponent,
    HeaderComponent,
    ManagementhomeComponent,
    MainComponent,
    ProfileComponent,
    MenulistComponent,
    MenudetailComponent,
    EmployeeslistComponent,
    AddmenuComponent,
    NormativesComponent,
    InvoicelistComponent, 
    StatisticsComponent,
    NotificationComponent,
    EventsComponent,
    ShiftsComponent,
    ProductstocksComponent,
    NewinvoiceComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,  
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatProgressBarModule,
    NgApexchartsModule,
    MatTableModule,
    MatTabsModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatSelectModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [    
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
