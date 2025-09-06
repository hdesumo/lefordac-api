import express from "express";
import { createNews, getNews, getNewsById, updateNews, deleteNews } from "../controllers/newsController.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

// ✅ Upload fichier avec Multer
router.post("/", upload.single("media"), createNews);
router.get("/", getNews);
router.get("/:id", getNewsById);
router.put("/:id", upload.single("media"), updateNews);
router.delete("/:id", deleteNews);

export default router;
