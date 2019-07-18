import {Employees} from './Employee';

export class EmployeeServices {

// Get All employees
    getEmployee() {

        const EMPLOYEE_DATA: Employees[] = [
            {code: 'Emp-001', empName: 'Mr.India', designation: 'Project Manager', department: 'Tech'},
            {code: 'Emp-002', empName: 'Gabbar Singh', designation: 'Team Leader', department: 'Tech'},
            {code: 'Emp-003', empName: 'Mahismati', designation: 'Module Lead', department: 'Tech'},
            {code: 'Emp-004', empName: 'Bhallaldev', designation: 'Software Developer', department: 'IT'},
            {code: 'Emp-005', empName: 'Kattapa', designation: 'Sr. Software Developer', department: 'IT'},
            {code: 'Emp-006', empName: 'Bahubali', designation: 'Software Developer', department: 'IT'},
            {code: 'Emp-007', empName: 'Mogamgo', designation: 'Quality Analyst', department: 'QA'},
            {code: 'Emp-008', empName: 'Dr.Dang', designation: 'Quality Analyst', department: 'QA'},
            {code: 'Emp-009', empName: 'Kanchacheena', designation: 'Customer Support', department: 'Support'},
            {code: 'Emp-010', empName: 'Vijay Deenanath Chauchan', designation: 'Customer Support', department: 'Support'},
            ];
            return EMPLOYEE_DATA;
        }
}

//     // Get All employees
//     getEmployee() {

//         const EMPLOYEE_DATA: Employees[] = [
//             {
//               Annotations: 'Emp-001',
//               FLC: 'Mr.India',
//               FCC: 'Project Manager',
//               FFN: 'Tech'
//             },
//             {
//               Annotations: 'Emp-002',
//               FLC: 'Gabbar Singh',
//               FCC: 'Team Leader',
//               FFN: 'Tech'
//             },
//             {
//               Annotations: 'Emp-003',
//               FLC: 'Mahismati',
//               FCC: 'Module Lead',
//               FFN: 'Tech'
//             },
//             {
//               Annotations: 'Emp-004',
//               FLC: 'Bhallaldev',
//               FCC: 'Software Developer',
//               FFN: 'IT'
//             },
//             {
//               Annotations: 'Emp-005',
//               FLC: 'Kattapa',
//               FCC: 'Sr. Software Developer',
//               FFN: 'IT'
//             },
//             {
//               Annotations: 'Emp-006',
//               FLC: 'Bahubali',
//               FCC: 'Software Developer',
//               FFN: 'IT'
//             },
//             {
//               Annotations: 'Emp-007',
//               FLC: 'Mogamgo',
//               FCC: 'Quality Analyst',
//               FFN: 'QA'
//             },
//             {
//               Annotations: 'Emp-008',
//               FLC: 'Dr.Dang',
//               FCC: 'Quality Analyst',
//               FFN: 'QA'
//             },
//             {
//               Annotations: 'Emp-009',
//               FLC: 'Kanchacheena',
//               FCC: 'Customer Support',
//               FFN: 'Support'
//             },
//             {
//               Annotations: 'Emp-010',
//               FLC: 'Vijay Deenanath Chauchan',
//               FCC: 'Customer Support',
//               FFN: 'Support'
//             },
//             ];
//             return EMPLOYEE_DATA;
//         }
// }
