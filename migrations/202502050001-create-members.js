export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("members", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    prenom: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    telephone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    region: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    departement: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    arrondissement: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    photo: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    statut: {
      type: Sequelize.ENUM("en_attente", "valide", "rejete"),
      defaultValue: "en_attente",
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable("members");
}
