export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("gallery", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    mediaUrl: {
      type: Sequelize.STRING,
      allowNull: false, // image ou vidéo
    },
    type: {
      type: Sequelize.ENUM("photo", "video"),
      defaultValue: "photo",
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
  await queryInterface.dropTable("gallery");
}
