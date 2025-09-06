import { DataTypes } from "sequelize";
import sequelize from "./index.js";

const Message = sequelize.define("Message", {
  titre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contenu: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  cibleRegion: {
    type: DataTypes.STRING
  },
  cibleDepartement: {
    type: DataTypes.STRING
  },
  cibleArrondissement: {
    type: DataTypes.STRING
  },
  operateur: {
    type: DataTypes.ENUM("orange", "mtn"),
    allowNull: true
  }
});

export default Message;
