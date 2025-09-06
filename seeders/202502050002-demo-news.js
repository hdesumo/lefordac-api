export async function up(queryInterface) {
  await queryInterface.bulkInsert("news", [
    {
      titre: "Grand meeting populaire à Njombé-Penja",
      sousTitre: "Mobilisation record dans le Moungo",
      contenu: "Le FORDAC a réuni des milliers de militants à Njombé-Penja, en marge des festivités de la fête nationale du 20 mai 2025",
      type: "article",
      mediaUrl: null,
      highlightMarquee: true,
      highlightCarousel: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titre: "Visite du siège local",
      sousTitre: "Romaric Yebchue Semenou sur le terrain.",
      contenu: "Le président national a effectué une visite de chantier pour s'assurer de l'avancement des travaux de forage.",
      type: "photo",
      mediaUrl: "/uploads/travaux-forage.jpg",
      highlightMarquee: false,
      highlightCarousel: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete("news", null, {});
}
