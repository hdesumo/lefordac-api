import { DataTypes } from "sequelize";
import sequelize from "./index.js";

const Contact = sequelize.define("Contact", {
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sujet: {
    type: DataTypes.STRING
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

export default Contact;
