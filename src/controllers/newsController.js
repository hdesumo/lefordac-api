import News from "../models/News.js";

export const getAllNews = async (req, res) => {
  try {
    const news = await News.findAll();
    res.json(news);
  } catch (err) {
    console.error("❌ Error fetching news:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export const createNews = async (req, res) => {
  try {
    const news = await News.create(req.body);
    res.status(201).json(news);
  } catch (err) {
    console.error("❌ Error creating news:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export const deleteNews = async (req, res) => {
  try {
    const news = await News.findByPk(req.params.id);
    if (!news) return res.status(404).json({ error: "Actualité non trouvée" });

    await news.destroy();
    res.json({ message: "Actualité supprimée" });
  } catch (err) {
    console.error("❌ Error deleting news:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
