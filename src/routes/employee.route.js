const express = require ('express');
//const { route } = require('express/lib/application');
const router = express.Router();

const EmployeeController = require('../controllers/employee.controller');


// get all employees 
router.get('/', EmployeeController.getEmployeeList);

//get employee by ID  
 router.get('/:id', EmployeeController.getEmployeeByID);

 //create new employee
 router.post('/', EmployeeController.createNewEmployee);

 // update employee
router.put('/:id', EmployeeController.updateEmployee);

//delete employee
router.delete('/:id', EmployeeController.deleteEmployee);

module.exports = router ;
