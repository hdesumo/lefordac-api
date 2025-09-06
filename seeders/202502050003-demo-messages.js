export async function up(queryInterface) {
  await queryInterface.bulkInsert("messages", [
    {
      destinataires: "Njombé-Penja",
      contenu: "Réunion militante prévue ce samedi à la permanence de Njombé-Penja.",
      operateur: "orange",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      destinataires: "Moungo",
      contenu: "Mobilisation générale : chaque section locale doit préparer le congrès départemental.",
      operateur: "mtn",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete("messages", null, {});
}
