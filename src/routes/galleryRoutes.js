import express from "express";
import {
  getAllMedia,
  addMedia,
  deleteMedia
} from "../controllers/galleryController.js";

const router = express.Router();

router.get("/", getAllMedia);
router.post("/", addMedia);
router.delete("/:id", deleteMedia);

export default router;
