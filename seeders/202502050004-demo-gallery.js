export async function up(queryInterface) {
  await queryInterface.bulkInsert("gallery", [
    {
      titre: "Meeting de Njombé-Penja",
      description: "Les militants du FORDAC réunis en grand nombre au stade municipal.",
      mediaUrl: "/uploads/meeting-njombe-penja.jpg",
      type: "photo",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titre: "Discours du président Semenou",
      description: "Extrait vidéo du discours de Romaric Yebchue Semenou à Njombé-Penja.",
      mediaUrl: "/uploads/discours-njombe-penja.mp4",
      type: "video",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete("gallery", null, {});
}
