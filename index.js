const inquirer = require('inquirer');
const db = require('./db/connect');
// const table = require('console.table');


db.connect(function(err) {
    if(err) throw err;
    console.log('Connected to MySql');
    start()
})
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
                    'Exit'
                ]
              },  
        ])
          .then(function(answer){
              switch(answer.view) {
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
              }
          })   
        }
          function viewDepart(){
           db.query('SELECT * FROM department', function (err,results)  {
               if(err) throw err;
                
                console.table(results);
          start(); 
        });
    }

    function viewRole(){
        db.query('SELECT department.id,role.department_id,title,salary,department.name FROM department INNER JOIN role ON department.id = role.department_id', function (err,results)  {
            if(err){
                console.log(err);
            }
            console.table(results);
        start();
     });
    }
    
    function viewEmployee(){
        db.query('SELECT department.id,role.department_id,title,salary,employee.first_name,last_name,manager_id,department.name FROM department JOIN role ON department.id = role.department_id CROSS JOIN employee ON employee.role_id = role.id', function (err,results) {
         if(err){
             console.log(err);
            }   
            console.table(results);
            start();
         })
        } 
          
        function addDepart() {
            inquirer.prompt ([
               {
                   name: 'addDepart',
                   message: 'What is the name of the new department?',
                   type: 'input'
               } 
            ]).then (answer =>{
                db.query('INSERT INTO department SET ?', {
                    name: answer.addDepart
                })
                start();
            })
        }
          
          
        function addRole() {
            db.query('SELECT * FROM role', function (err,results){
                inquirer.prompt ([
                    {
                        name: 'title',
                        message: 'What is the title of the new role?',
                        type: 'input'
                    },
                    {
                        name: 'salary',
                        message: 'What is the salary of the new employee?',
                        type: 'input'
                    },  
                    {
                        name: 'id',
                        message: 'What is the id of the new department?',
                        type: 'input'
                    }, 
                    
                    
                ]).then (answer =>{
                    let selectedRole = results.find(department => department.name === answer.department_id)
                    db.query('INSERT INTO role SET ?', {
                       title: answer.title,
                       salary: answer.salary,
                       department_id:selectedRole.id,
                    })
                    start();
                })
            })
        }      
        
        function addEmployee() {
            db.query('SELECT * FROM role', function (err,results){
                inquirer.prompt ([
                    {
                        name: 'first_name',
                        message: 'What is the first name of new employee?',
                        type: 'input'
                    },
                    {
                        name: 'last_name',
                        message: 'What is the last name of the new employee?',
                        type: 'input'
                    },  
                    {
                        name: 'role',
                        message: 'What is the role of the new employee?',
                        type: 'list',
                        choices:results.map(role => role.title)
                    }, 
                    {
                        name: 'id',
                        message: 'What is the id of the manager for new employee?',
                        type: 'list',
                        choices: ['1', '2']
                    }
    
                    // add manager id in question 
                ]).then (answer =>{
                    let selectedRole = results.find(role => role.title === answer.role)
                    db.query('INSERT INTO employee SET ?', {
                       first_name: answer.first_name,
                       last_name: answer.last_name,
                       role_id:selectedRole.id,
                    })
                    start();
                })
            })
        }      
              
              

          
    
    
    
    
    
    
    
    
    
    
    
    
    
    