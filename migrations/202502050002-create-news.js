export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("news", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    sousTitre: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    contenu: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    type: {
      type: Sequelize.ENUM("article", "photo", "video"),
      defaultValue: "article",
    },
    mediaUrl: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    highlightMarquee: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    highlightCarousel: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
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
  await queryInterface.dropTable("news");
}
