import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  try {
    const { nom, email, message } = req.body;
    if (!nom || !email || !message) {
      return res.status(400).json({ error: "Tous les champs sont obligatoires" });
    }

    const newContact = await Contact.create({ nom, email, message });
    res.status(201).json(newContact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.findAll({ order: [["createdAt", "DESC"]] });
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
