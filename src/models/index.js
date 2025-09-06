import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

console.log("DEBUG DATABASE_URL =", process.env.DATABASE_URL);

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

export default sequelize;
