import express from "express";
import { addMedia, getMedia } from "../controllers/galleryController.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.post("/", upload.single("media"), addMedia);
router.get("/", getMedia);

export default router;
