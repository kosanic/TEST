import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule,HttpParams } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeesService } from './service/employees.service';
import {AccordionModule} from 'primeng/accordion';     
import {MenuItem} from 'primeng/api';                  
import { PrimeNGConfig } from 'primeng/api';
import { TableModule } from 'primeng/table';



@NgModule({
    declarations: [
        AppComponent,
        EmployeeComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        AccordionModule,
        TableModule,
        
        
        
        
    ]
})
export class AppModule { }
