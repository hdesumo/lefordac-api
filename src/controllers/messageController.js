import Message from "../models/Message.js";
import Member from "../models/Member.js";
import { sendSMSOrange, sendSMSMTN } from "../services/smsService.js";

export const sendMessage = async (req, res) => {
  try {
    const { titre, contenu, cibleRegion, cibleDepartement, cibleArrondissement, operateur } = req.body;

    // Sauvegarde en DB
    const newMsg = await Message.create({
      titre,
      contenu,
      cibleRegion,
      cibleDepartement,
      cibleArrondissement,
    });

    // 🎯 Filtrage : uniquement les membres VALIDÉS
    let whereClause = { statut: "valide" };
    if (cibleRegion) whereClause.region = cibleRegion;
    if (cibleDepartement) whereClause.departement = cibleDepartement;
    if (cibleArrondissement) whereClause.arrondissement = cibleArrondissement;

    const destinataires = await Member.findAll({ where: whereClause });

    let successCount = 0;
    for (let m of destinataires) {
      let ok = false;
      const text = `${titre}\n${contenu}`;

      if (operateur === "orange") {
        ok = await sendSMSOrange(m.telephone, text);
      } else if (operateur === "mtn") {
        ok = await sendSMSMTN(m.telephone, text);
      } else {
        const tryOrange = await sendSMSOrange(m.telephone, text);
        const tryMTN = await sendSMSMTN(m.telephone, text);
        ok = tryOrange || tryMTN;
      }

      if (ok) successCount++;
    }

    res.status(201).json({
      message: "Message diffusé avec succès",
      totalDestinataires: destinataires.length,
      succes: successCount,
      data: newMsg,
    });
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur", details: err.message });
  }
};
