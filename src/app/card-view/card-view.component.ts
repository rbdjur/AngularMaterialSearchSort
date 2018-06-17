import { Employees } from './../Employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeServices } from '../GetEmployeesService';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  empData : Employees[];
  constructor(omp : EmployeeServices) { 
    this.empData = omp.getEmployee();
  }

  ngOnInit() {
  }

}
