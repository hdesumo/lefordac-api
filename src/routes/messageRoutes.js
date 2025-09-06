import express from "express";
import {
  getAllMessages,
  createMessage,
  deleteMessage
} from "../controllers/messageController.js";

const router = express.Router();

router.get("/", getAllMessages);
router.post("/", createMessage);
router.delete("/:id", deleteMessage);

export default router;
