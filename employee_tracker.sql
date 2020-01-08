
DROP DATABASE IF EXISTS employee_tracker;

/* Create database */
CREATE DATABASE employee_tracker;
USE employee_tracker;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary INT(7),
  department_id INT(50),
  PRIMARY KEY (id)
);

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT(50),
  primary key (id)
);

INSERT INTO department(name)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Legal');

INSERT INTO role(title, salary, department_id)
VALUES ('Sales Lead', 100000, 1),
       ('Salesperson', 80000, 1),
       ('Lead Engineer', 150000, 2),
       ('Software Engineer', 120000, 2),
       ('Accountant', 125000, 3),
       ('Legal Team Lead', 250000, 4),
       ('Lawyer', 190000, 4),
       ('Lead Engineer', 150000, 2);

INSERT INTO employee(first_name, last_name, role_id)
VALUES ('Tom', 'Maddocks', 1),
       ('Bilaal', 'Salaad', 2),
       ('Nath', 'Fenton', 3),
       ('Nilesh', 'Patel', 4),
       ('Vikram', 'Multani', 5),
       ('Simona', 'Dulgheru', 6),
       ('Anna', 'Lebiedziewicz', 7),
       ('Jennifer', 'Chan', 3);
