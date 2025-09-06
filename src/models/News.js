import { DataTypes } from "sequelize";
import sequelize from "./index.js";

const News = sequelize.define("News", {
  titre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sousTitre: {
    type: DataTypes.STRING
  },
  contenu: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM("article", "photo", "video"),
    allowNull: false,
    defaultValue: "article"
  },
  highlightMarquee: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  highlightCarousel: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

export default News;
