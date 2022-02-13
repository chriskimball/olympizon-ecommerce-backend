# 13 - ORM - Olympizon Ecommerce Backend

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)


## Contributors

[Chris Kimball](https://github.com/chirskimball "chirskimball's GitHub Profile")

TODO:
## Description

The following project is the back end server and data model for an e-commerce website. This app utilizes Express.js, mysql, and sequelize to build out a REST API to Create, Read, Update and Delete products, categories, and product tags.

This application has no front end at the moment, therefore users must interact with the API through an API client such as Insomnia.

Users can make requests to the following API routes to create, read, update or delete data from the database.

### Products
* GET All Products: GET request to ```http://localhost:3001/api/products/```
* GET one single Product by id: GET request to ```http://localhost:3001/api/products/:id```
* CREATE New Product: POST request to ```http://localhost:3001/api/products/```
    * Example JSON body data in POST request:
    ```bash
    {
        "product_name": "Michael Jordan's socks",
        "price": 200.00,
        "stock": 3,
        "tagIds": [1, 2, 3, 4],
        "category_id": 5
    }
    ```
* UPDATE Existing Product by id: PUT request to ```http://localhost:3001/api/products/:id```
    * Example JSON body data in POST request:
    ```bash
    {
        "product_name": "Basketball socks but affordable",
        "price": 20.00,
        "stock": 30,
        "tagIds": [1, 2],
        "category_id": 5
    }
    ```
* DELETE Product by id: DELETE request to ```http://localhost:3001/api/products/:id```

### Tags
* GET All Tags: GET request to ```http://localhost:3001/api/tags/```
* GET one single Tag by id: GET request to ```http://localhost:3001/api/tags/:id```
* CREATE New Tag: POST request to ```http://localhost:3001/api/tags/```
    * Example JSON body data in POST request:
    ```bash
    {
        "tag_name": "Coding is cool",
        "productIds": [1,2,3]
    }
    ```
* UPDATE Existing Tag by id: PUT request to ```http://localhost:3001/api/tags/:id```
    * Example JSON body data in POST request:
    ```bash
    {
        "tag_name": "APIs are great and useful",
        "productIds": [1]
    }
    ```
* DELETE Tag by id: DELETE request to ```http://localhost:3001/api/tags/:id```

### Categories
* GET All Categories: GET request to ```http://localhost:3001/api/categories/```
* GET one single Category by id: GET request to ```http://localhost:3001/api/categories/:id```
* CREATE New Category: POST request to ```http://localhost:3001/api/categories/```
    * Example JSON body data in POST request:
    ```bash
    {
        "category_name": "Socks"
    }
    ```
* UPDATE Existing Category by id: PUT request to ```http://localhost:3001/api/categories/:id```
    * Example JSON body data in POST request:
    ```bash
    {
        "category_name": "Famous socks"
    }
    ```
* DELETE Category by id: DELETE request to ```http://localhost:3001/api/categories/:id```


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
