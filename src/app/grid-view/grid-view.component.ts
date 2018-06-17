import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Employees} from '../Employee';
import { EmployeeServices } from '../GetEmployeesService';
@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
  
  dataSource = new MatTableDataSource();
  constructor(oEmp : EmployeeServices) {
    this.dataSource = new MatTableDataSource(oEmp.getEmployee());
   }

  ngOnInit() {
    console.log(this.sort); // loggin the sort object, try to check it out on browser console.
    this.dataSource.sort = this.sort;
  }
  // displayed column name must match with matColumnDef in template.
  displayedColumns = ['code', 'empName', 'department', 'designation'];

  
  @ViewChild(MatSort) sort: MatSort;
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  resetFilter(sender){
    //sender.value = "search here...";
  }

}
