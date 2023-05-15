import { Sequelize } from "sequelize";

const db = new Sequelize("book_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
