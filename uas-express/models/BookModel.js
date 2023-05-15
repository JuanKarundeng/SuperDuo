import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Book = db.define(
  "book",
  {
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    preview: DataTypes.STRING,
    link: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Book;

(async () => {
  await db.sync();
})();
