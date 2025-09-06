import Contact from "../models/Contact.js";

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.findAll();
    res.json(contacts);
  } catch (err) {
    console.error("❌ Error fetching contacts:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export const createContact = async (req, res) => {
  try {
    const { nom, email, message } = req.body;

    if (!nom || !email || !message) {
      return res.status(400).json({ error: "Nom, email et message sont requis" });
    }

    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (err) {
    console.error("❌ Error creating contact:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByPk(req.params.id);
    if (!contact) return res.status(404).json({ error: "Contact non trouvé" });

    await contact.destroy();
    res.json({ message: "Contact supprimé" });
  } catch (err) {
    console.error("❌ Error deleting contact:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
