const database = require("../config/database");

const CREATE_USERS_TABLE = `CREATE TABLE IF NOT EXISTS users (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    fullName VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(10) NOT NULL DEFAULT 'user'
  );`;

const CREATE_PRODUCTS_TABLE = ` CREATE TABLE IF NOT EXISTS products (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    prod_name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    capacity INT NOT NULL,
    image VARCHAR(255) NOT NULL,
   stock INT NOT NULL
  );`;

  const createTables = async () => {
    try {
      const [usersTableCreation] = await database.query(CREATE_USERS_TABLE);
      const [productsTableCreation] = await database.query(CREATE_PRODUCTS_TABLE);
      console.log({
        usersTableCreation,
        productsTableCreation,
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  createTables();