import Gallery from "../models/Gallery.js";

export const getAllMedia = async (req, res) => {
  try {
    const media = await Gallery.findAll();
    res.json(media);
  } catch (err) {
    console.error("❌ Error fetching gallery:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export const addMedia = async (req, res) => {
  try {
    console.log("DEBUG req.body:", req.body);
    const { type, mediaUrl } = req.body;

    if (!type || !mediaUrl) {
      return res.status(400).json({ error: "Type et mediaUrl sont requis" });
    }

    const media = await Gallery.create(req.body);
    res.status(201).json(media);
  } catch (err) {
    console.error("❌ Error adding media:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export const deleteMedia = async (req, res) => {
  try {
    const media = await Gallery.findByPk(req.params.id);
    if (!media) return res.status(404).json({ error: "Media non trouvé" });

    await media.destroy();
    res.json({ message: "Media supprimé" });
  } catch (err) {
    console.error("❌ Error deleting media:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
