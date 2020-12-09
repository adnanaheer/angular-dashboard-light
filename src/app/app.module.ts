import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { AppComponent } from './app.component';
import { NewChartComponent } from './new-chart/new-chart.component';
import { ChartSplineComponent } from './chart-spline/chart-spline.component';
import { HomeComponent } from './home/home.component';
import { TestdataComponent } from './testdata/testdata.component';
import { DataComponent } from './data/data.component';
import { ChartComponent } from './chart/chart.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { LayoutModule } from '@angular/cdk/layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MatAutocompleteModuleComponent } from './mat-autocomplete-module/mat-autocomplete-module.component';
import { TableComponent } from './table/table.component';
import { DonutsChartComponent } from './donuts-chart/donuts-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    NavComponent,
    ChartComponent,
    ChartSplineComponent,
    NewChartComponent,
    HomeComponent,
    TestdataComponent,
    DataComponent,
    DropdownComponent,
    MatAutocompleteModuleComponent,
    TableComponent,
    DonutsChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSlideToggleModule,
    HighchartsChartModule,
    MatDialogModule,
    MatAutocompleteModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
