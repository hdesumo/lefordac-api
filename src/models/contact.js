import { DataTypes } from "sequelize";
import { sequelize } from "./index.js";

const Contact = sequelize.define("Contact", {
  nom: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  message: { type: DataTypes.TEXT, allowNull: false },
  region: { type: DataTypes.STRING },
  departement: { type: DataTypes.STRING },
  arrondissement: { type: DataTypes.STRING },
  ville: { type: DataTypes.STRING }
});

export default Contact;
