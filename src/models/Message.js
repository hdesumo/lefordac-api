import { DataTypes } from "sequelize";
import { sequelize } from "./index.js";

const Message = sequelize.define("Message", {
  titre: { type: DataTypes.STRING, allowNull: false },
  contenu: { type: DataTypes.TEXT, allowNull: false },
  cibleRegion: { type: DataTypes.STRING },       // ex: "Littoral"
  cibleDepartement: { type: DataTypes.STRING },  // ex: "Moungo"
  cibleArrondissement: { type: DataTypes.STRING } // ex: "Nkongsamba 1er"
});

export default Message;
