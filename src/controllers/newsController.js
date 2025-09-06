export const updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const { titre, sousTitre, contenu, type, highlightMarquee, highlightCarousel } = req.body;

    const news = await News.findByPk(id);
    if (!news) return res.status(404).json({ error: "Actualité introuvable" });

    let mediaUrl = news.mediaUrl;
    if (req.file) {
      mediaUrl = `/uploads/${req.file.filename}`;
    }

    await news.update({
      titre,
      sousTitre,
      contenu,
      type,
      mediaUrl,
      highlightMarquee: highlightMarquee === "true",
      highlightCarousel: highlightCarousel === "true",
    });

    res.json(news);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
