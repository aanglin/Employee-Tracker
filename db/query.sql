SELECT department.name AS department,role.title AS role, employee.first_name
FROM employees
LEFT JOIN department
ON role.department_id = employee.department_id