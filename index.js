const inquirer = require('inquirer');
const mysql= require('mysql');
const contable = require('console.table');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'employee_tracker'
    });

    function start() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'view',
                message: 'What would you like to do?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee', 
                    'Update an employee',
                    'Exit'
                ]
              },  
        ])
          then(function(answer){
              switch(answer.action) {
                  case 'View all departments': 
                  viewDepart(); 
                  break;
                  case 'View all roles':
                      viewRole();
                      break;
                      case 'View all employees':
                          viewEmployee();
                          break;
                          case 'Add a department':
                              addDepart();
                              break;
                              case 'Add a role':
                                  addRole();
                                  break;
                                  case 'Add an employee':
                                      addEmployee();
                                      break;
                                      case 'Update an employee':
                                          updateEmployee();

              }
          })   
    
          function viewDepart(){
           db.query('USE employee_tracker SELECT * FROM department', function (err,results)  {
               if(err){
                   console.log(err);
                   console.log(results);
           }
           
        });
    }

    function viewRole(){
        db.query('USE employee_tracker SELECT department.id,role.department_id,title,salary,department.name FROM department INNER JOIN role ON department.id = role.department_id', function (err,results)  {
            if(err){
                console.log(err);
                console.log(results);
        }
        
     });
    }
    
    function viewEmployee(){
        db.query('USE employee_tracker SELECT department SELECT department.id,role.department_id,title,salary,employee.first_name,last_name,manager_id,department.name FROM department JOIN role ON department.id=role.department_id CROSS JOIN employee ON employee.role_id=role.id', function (err,results) {
         if(err){
             console.log(err);
             console.log(results);
         }   
         })
        } 
          
          
          
          
          
          
          
          function addDepart() {
              inquirer.prompt ([
                 {
                     name: 'addDepart',
                     message: 'What is the name of the new department?'
                 } 
              ])
          }
    
    
    
    
    
    
    
    
    
    
    
    
    
    }