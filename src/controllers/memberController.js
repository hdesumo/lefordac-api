import ExcelJS from "exceljs";

// ✅ Export Excel
export const exportMembersExcel = async (req, res) => {
  try {
    const statut = req.query.statut || null;

    let whereClause = {};
    if (statut) whereClause.statut = statut;

    const members = await Member.findAll({ where: whereClause });

    // Création workbook + feuille
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Adherents");

    // En-têtes
    worksheet.columns = [
      { header: "ID", key: "id", width: 10 },
      { header: "Nom", key: "nom", width: 20 },
      { header: "Prénom", key: "prenom", width: 20 },
      { header: "Téléphone", key: "telephone", width: 15 },
      { header: "Email", key: "email", width: 25 },
      { header: "Région", key: "region", width: 20 },
      { header: "Département", key: "departement", width: 20 },
      { header: "Arrondissement", key: "arrondissement", width: 25 },
      { header: "Statut", key: "statut", width: 15 },
      { header: "Date d’inscription", key: "createdAt", width: 25 },
    ];

    // Remplir les lignes
    members.forEach((m) => {
      worksheet.addRow({
        id: m.id,
        nom: m.nom,
        prenom: m.prenom,
        telephone: m.telephone,
        email: m.email,
        region: m.region,
        departement: m.departement,
        arrondissement: m.arrondissement,
        statut: m.statut,
        createdAt: m.createdAt,
      });
    });

    // Styles en-têtes
    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FF228B22" }, // vert foncé
      };
    });

    // Envoyer fichier Excel
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    res.setHeader("Content-Disposition", "attachment; filename=members.xlsx");

    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    res.status(500).json({ error: "Erreur export Excel", details: err.message });
  }
};
