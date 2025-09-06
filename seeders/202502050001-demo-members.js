export async function up(queryInterface) {
  await queryInterface.bulkInsert("members", [
    {
      nom: "Semenou",
      prenom: "Romaric",
      email: "presi.semenou@fordac.org",
      telephone: "+237696196619",
      region: "Littoral",
      departement: "Moungo",
      arrondissement: "Njombé-Penja",
      statut: "valide",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nom: "Ngalla",
      prenom: "Clarisse",
      email: "clarisse.ngalla@fordac.org",
      telephone: "+237690222222",
      region: "Littoral",
      departement: "Moungo",
      arrondissement: "Njombé-Penja",
      statut: "en_attente",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nom: "Tchinda",
      prenom: "Michel",
      email: "michel.tchinda@fordac.org",
      telephone: "+237690333333",
      region: "Littoral",
      departement: "Moungo",
      arrondissement: "Njombé-Penja",
      statut: "rejete",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete("members", null, {});
}
