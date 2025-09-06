import { DataTypes } from "sequelize";
import { sequelize } from "./index.js";

const Gallery = sequelize.define("Gallery", {
  titre: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.ENUM("photo", "video"), allowNull: false },
  mediaUrl: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
});

export default Gallery;
