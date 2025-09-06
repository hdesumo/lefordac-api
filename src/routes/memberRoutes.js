import express from "express";
import { exportMembers, exportMembersExcel } from "../controllers/memberController.js";
import {
  createMember,
  getMembers,
  updateMemberStatus,
  deleteMember,
  exportMembers,
} from "../controllers/memberController.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.post("/", upload.single("photo"), createMember);
router.get("/", getMembers);
router.put("/:id/status", updateMemberStatus);
router.get("/export", exportMembers);         // CSV
router.get("/export/excel", exportMembersExcel); // Excel
router.delete("/:id", deleteMember);

// ✅ export CSV
router.get("/export", exportMembers);

export default router;
