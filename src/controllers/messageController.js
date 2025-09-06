import Message from "../models/Message.js";

export const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.findAll();
    res.json(messages);
  } catch (err) {
    console.error("❌ Error fetching messages:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export const createMessage = async (req, res) => {
  try {
    console.log("DEBUG req.body:", req.body);
    const { titre, contenu } = req.body;

    if (!titre || !contenu) {
      return res.status(400).json({ error: "Titre et contenu sont obligatoires" });
    }

    const message = await Message.create(req.body);
    res.status(201).json(message);
  } catch (err) {
    console.error("❌ Error creating message:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const message = await Message.findByPk(req.params.id);
    if (!message) return res.status(404).json({ error: "Message non trouvé" });

    await message.destroy();
    res.json({ message: "Message supprimé" });
  } catch (err) {
    console.error("❌ Error deleting message:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
