-- To view all departments function
SELECT * FROM department

-- To view all roles function
SELECT * FROM role

-- SELECT
-- department.id,role.title,department.name
-- FROM department
-- INNER JOIN role ON department.id = role.department_id



-- To view all employees function( THIS IS A JOIN STATEMENT)
SELECT * FROM employee

-- To create a table function
CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100)
);


-- To create a role function
CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) 
    REFERENCES department(id)
    ON DELETE SET NULL
);


-- To create a new employee function
CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
);

