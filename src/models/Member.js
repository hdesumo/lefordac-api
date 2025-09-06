import { DataTypes } from "sequelize";
import { sequelize } from "./index.js";

const Member = sequelize.define("Member", {
  nom: { type: DataTypes.STRING, allowNull: false },
  prenom: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true },
  telephone: { type: DataTypes.STRING, allowNull: false },
  region: { type: DataTypes.STRING, allowNull: false },
  departement: { type: DataTypes.STRING, allowNull: false },
  arrondissement: { type: DataTypes.STRING, allowNull: false },
  statut: { type: DataTypes.ENUM("en_attente", "valide", "rejete"), defaultValue: "en_attente" },
  photoUrl: { type: DataTypes.STRING } // ✅ upload photo
});

export default Member;
