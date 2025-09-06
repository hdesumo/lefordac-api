import Gallery from "../models/Gallery.js";

// Ajouter un média
export const addMedia = async (req, res) => {
  try {
    const { titre, type, description } = req.body;
    let mediaUrl = null;
    if (req.file) {
      mediaUrl = `/uploads/${req.file.filename}`;
    }
    const media = await Gallery.create({ titre, type, mediaUrl, description });
    res.status(201).json(media);
  } catch (err) {
    res.status(500).json({ error: "Erreur ajout média", details: err.message });
  }
};

// Lister tous les médias
export const getMedia = async (_req, res) => {
  try {
    const media = await Gallery.findAll({ order: [["createdAt", "DESC"]] });
    res.json(media);
  } catch (err) {
    res.status(500).json({ error: "Erreur chargement médias" });
  }
};
