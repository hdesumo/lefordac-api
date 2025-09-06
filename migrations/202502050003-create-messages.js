export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("messages", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    destinataires: {
      type: Sequelize.STRING,
      allowNull: false, // Ex: "tous", "Littoral", "Moungo", "Njombé-Penja"
    },
    contenu: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    operateur: {
      type: Sequelize.ENUM("orange", "mtn"),
      allowNull: true,
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
  await queryInterface.dropTable("messages");
}
