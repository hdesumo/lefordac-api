import Member from "../models/Member.js";

// GET all members
export const getAllMembers = async (req, res) => {
  try {
    const members = await Member.findAll();
    res.json(members);
  } catch (err) {
    console.error("❌ Error fetching members:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// GET member by ID
export const getMemberById = async (req, res) => {
  try {
    const member = await Member.findByPk(req.params.id);
    if (!member) return res.status(404).json({ error: "Membre non trouvé" });
    res.json(member);
  } catch (err) {
    console.error("❌ Error fetching member:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// POST create member
export const createMember = async (req, res) => {
  try {
    const member = await Member.create(req.body);
    res.status(201).json(member);
  } catch (err) {
    console.error("❌ Error creating member:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// PUT update member
export const updateMember = async (req, res) => {
  try {
    const member = await Member.findByPk(req.params.id);
    if (!member) return res.status(404).json({ error: "Membre non trouvé" });

    await member.update(req.body);
    res.json(member);
  } catch (err) {
    console.error("❌ Error updating member:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// DELETE member
export const deleteMember = async (req, res) => {
  try {
    const member = await Member.findByPk(req.params.id);
    if (!member) return res.status(404).json({ error: "Membre non trouvé" });

    await member.destroy();
    res.json({ message: "Membre supprimé" });
  } catch (err) {
    console.error("❌ Error deleting member:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
