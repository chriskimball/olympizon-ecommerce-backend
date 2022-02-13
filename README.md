# 13 - ORM - Olympizon Ecommerce Backend

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)


## Contributors

[Chris Kimball](https://github.com/chirskimball "chirskimball's GitHub Profile")

TODO:
## Description

The following project is the back end server and data model for an e-commerce website. This app utilizes Express.js, mysql, and sequelize to build out a REST API to Create, Read, Update and Delete products, categories, and product tags.

This application has no front end at the moment, therefore users must interact with the API through an API client such as Insomnia.

E
<!-- When a user initiates the application via command line terminal they will be prompted with the following choices:

* View All Employees
* View Employees By Manager
* View Employees By Department
* Add Employee
* Delete Employee
* Update Employee Role
* Update Employee's Manager
* View All Roles
* Add Role
* Delete Role
* View All Departments
* View Department Budget
* Add Department
* Delete Department
* Quit

When the `View All Employees` option is selected, the user will be returned a table of all employees, their roles, and managers information.

When the `View Employees By Manager` option is selected, the user will be prompted to select a specific manager, which will return them a table that displays all employees for the specified manager.

When the `View Employees By Department` option is selected, the user will be prompted to select a specific department, which will return them a table that displays all employees for the specified department.

When the `Add Employee` option is selected, the user will be prompted to fill in information to create a new employee record in the database including `first name`, `last name`, `role`, and `manager`.

When the `Delete Employee` option is selected, the user will be prompted to choose an existing employee record from the database to delete.

When the `Update Employee Role` option is selected, the user will be prompted to select an existing employee and also select a new role to assign to the selected employee record.

When the `Update Employee's Manager` option is selected, the user will be prompted to select an existing employee and then promppt them to select a new manager for the selected employee.

When the `View All Roles` option is selected, the user will be returned a table with all roles, salary, and department information.

When the `Add Role` option is selected, the user will be propmted to fill in information to create a new role record in the database including `role title`, `role salary`, and the role's `department`.

When the `Delete Role` option is selected, the user will be prompted to select a specific role to be deleted, additionally they will be prompted to assign new roles for employees who currently have the role that will be deleted.

When the `View All Departments` option is selected, the user will be returned a table with all departments within the database.

When the `View Department Budget` option is selected, the user will be prompted to select a specific department which will then return a table with the department's name and a SUM of all employees/roles associeated with the given department.

When the `Add Department` option is selected, the user will be prompted to enter the new departments name which will then be created in the database.

When the `Delete Department` option is selected, the user will be prompted to select a department that will be deleted. They will also be prompted to re-assign any roles to a new department that currently are associated to the department that will be deleted.

When the `Quit` option is selected, the application will close. -->


## Table of Contents 

* [Web Addresses](#web-addresses)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Techology Used](#technology-used)
* [Questions](#questions)


## Web Addresses
---------------

*  [Github Repository](https://github.com/chriskimball/olympizon-ecommerce-backend "Github Repo")
*  [Walkthrough Demo Part 1](https://watch.screencastify.com/v/HeSGAJDGyeXjwtHWFB9b "Walkthrough Demo Part 1")
*  [Walkthrough Demo Part 2](https://watch.screencastify.com/v/VdKKqlPSBL4TB29JUjq0 "Walkthrough Demo Part 2")
*  [Walkthrough Demo Part 3](https://watch.screencastify.com/v/jqrxybZUpPKLFQoVCZXp "Walkthrough Demo Part 3")


## Installation

1. Clone this Git repository
2. Navigate to repository in local directory.
3. To install any necessary dependencies, run the following command:

```bash
npm i
```

4. Rename the `.env.EXAMPLE` file to `.env`, and open it.
5. Enter your mysql `username`, and `password` into the `DB_USER=''` and 
`DB_PW=''` fields.
6. Open a new terminal, open mysql shell with the following command:

```bash
mysql -u <mysql username> -p
```
7. Enter your mysql password when prompted.
8. Enter the following commands to source the schema.sql and seed.sql data.
```bash
source db/schema.sql;
```
9. Enter the following command to exit the mysql shell. 
```bash
quit;
```
10. Run the seed file with the follwing command:
```bash
npm run seed
```

## Usage

You will need node.js and mysql to run this application. Once the repository has been cloned and mysql schema/seed files have been sourced, navigate to the file directory, open a new terminal and run the following command.

```bash
npm start
```

Use your arrow keys to navigate to different options and enter to select an option.

## License

This project is licensed under the MIT license.


## Technology Used

* MySQL
* Javascript
* Node.js
* Express.js npm package
* MySQL2 npm package
* Sequelize package
* dotenv npm package
* nodemon npm package


## Questions

If you have any questions about the repo, open an issue or contact me directly at [ctrain21@gmail.com](mailto:ctrain21@gmail.com). You can find more of my work at [chirskimball](https://github.com/chirskimball "chirskimball's GitHub Profile").
