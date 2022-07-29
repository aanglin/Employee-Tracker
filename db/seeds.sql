INSERT INTO department(name)
    VALUES("Sales"),
          ("Hr"),
          ("Salesperson"),
          ("Hr Rep");
        

INSERT INTO role (title, salary, department_id)   
    VALUES("Sales Mananger", 60000, 01),
          ("Hr Mananger", 60000, 02),
          ("salesman", 40000, 03),
          ("Hr Rep", 40000, 04);
          

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ("Jason", "Smith", 01, NULL),
           ("John", "JONES", 02, NULL),
           ("Jane", "Doe", 03, 01),
           ("Jesse", "Don", 03, 01),
           ("Julia", "Baker", 04, 02),
           ("James", "Baker", 04, 02);