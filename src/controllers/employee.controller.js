//import model
const Employee = require('../models/employee.model');
const EmployeeModel = require('../models/employee.model');


//get list of all employees
exports.getEmployeeList = (req, res) => {
    //console.log('here is a list of all employees');
    EmployeeModel.getAllEmployees((err, employees) => {
        
        if (err)
            res.send(err);
            console.log('Employees', employees);
            res.send(employees)
        
    })
};

//get employee by ID
exports.getEmployeeByID = (req, res) => {
    //console.log('Get Employee by ID');
    EmployeeModel.getEmployeeByID(req.params.id, (err, employee) => {
        if (err) 
        res.send(err);
        console.log('employee data', employee);
        res.send(employee);
    } )
};

//create new employee 
exports.createNewEmployee = (req, res) => {
    const employeeReqData = new EmployeeModel(req.body); 
    console.log('EmployeeReqData', employeeReqData);
    //check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message:'Please fill in all fields'});
    }else{
        //console.log('valid data');
        EmployeeModel.createEmployee(employeeReqData, (err, employee) => {
            if (err) 
            res.send(err);
            res.json({status: true, message: 'Employee Created Successfully', data: employee});

        });
    }
}

//update employee
exports.updateEmployee =(req, res) => {
    const employeeReqData = new EmployeeModel(req.body); 
    console.log('EmployeeReqData update', employeeReqData);
    //check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message:'Please fill in all fields'});
    }else{
        //console.log('valid data');
        EmployeeModel.updateEmployee(req.params.id, employeeReqData, (err, employee) => {
            if (err) 
            res.send(err);
            res.json({status: true, message: 'Employee Updated Successfully', data: employee});

        });
    }

}

// Delete employee 
exports.deleteEmployee = (req, res) => {
    EmployeeModel.deleteEmployee(req.params.id, (err, employee) => {
        if(err)
        res.send(err);
        res.json({success: true, message : 'Employee deleted successfully!' });
    })
}