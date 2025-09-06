import { DataTypes } from "sequelize";
import { sequelize } from "./index.js";

const News = sequelize.define("News", {
  titre: { type: DataTypes.STRING, allowNull: false },
  sousTitre: { type: DataTypes.STRING },
  contenu: { type: DataTypes.TEXT },
  type: { type: DataTypes.ENUM("article", "photo", "video"), defaultValue: "article" },
  mediaUrl: { type: DataTypes.STRING },
  highlightMarquee: { type: DataTypes.BOOLEAN, defaultValue: false },  // 📰 Marquee
  highlightCarousel: { type: DataTypes.BOOLEAN, defaultValue: false }, // 🎥 Carrousel vidéos
});

export default News;
