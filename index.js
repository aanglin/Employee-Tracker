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
                      viewRoles();
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
    
          function addDepart() {
              inquirer.prompt ([
                 {
                     name: 'addDepart',
                     message: 'What is the name of the new department?'
                 } 
              ])
          }
    
    
    
    
    
    
    
    
    
    
    
    
    
    }