import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
  constructor() { }

  ngOnInit() {
    console.log(this.sort); // loggin the sort object, try to check it out on browser console.
    this.dataSource.sort = this.sort;
  }
  // displayed column name must match with matColumnDef in template.
  displayedColumns = ['code', 'empName', 'department', 'designation'];
  dataSource = new MatTableDataSource(EMPLOYEE_DATA);
  
  @ViewChild(MatSort) sort: MatSort;
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  rowClicked(sender){
    sender.target.value = "";
    console.log(sender.target.value);
  }
  resetFilter(sender){
    //sender.value = "search here...";
  }

}

export interface Employees{
  code : string;
  empName : string;
  designation : string;
  department : string;
}

const EMPLOYEE_DATA: Employees[] = [
{code: "Emp-001", empName: 'Mr.India', designation: "Project Manager", department: 'Tech'},
{code: "Emp-002", empName: 'Gabbar Singh', designation: "Team Leader", department: 'Tech'},
{code: "Emp-003", empName: 'Mahismati', designation: "Module Lead", department: 'Tech'},
{code: "Emp-004", empName: 'Bhallaldev', designation: "Software Developer", department: 'IT'},
{code: "Emp-005", empName: 'Kattapa', designation: "Sr. Software Developer", department: 'IT'},
{code: "Emp-006", empName: 'Bahubali', designation: "Software Developer", department: 'IT'},
{code: "Emp-007", empName: 'Mogamgo', designation: "Quality Analyst", department: 'QA'},
{code: "Emp-008", empName: 'Dr.Dang', designation: "Quality Analyst", department: 'QA'},
{code: "Emp-009", empName: 'Kanchacheena', designation: "Customer Support", department: 'Support'},
{code: "Emp-010", empName: 'Vijay Deenanath Chauchan', designation: "Customer Support", department: 'Support'},
];