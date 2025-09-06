import { DataTypes } from "sequelize";
import sequelize from "./index.js";

const Member = sequelize.define("Member", {
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  prenom: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  telephone: {
    type: DataTypes.STRING
  },
  region: {
    type: DataTypes.STRING
  },
  departement: {
    type: DataTypes.STRING
  },
  arrondissement: {
    type: DataTypes.STRING
  }
});

export default Member;
