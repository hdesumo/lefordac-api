import express from "express";
import {
  getAllContacts,
  createContact,
  deleteContact
} from "../controllers/contactController.js";

const router = express.Router();

router.get("/", getAllContacts);
router.post("/", createContact);
router.delete("/:id", deleteContact);

export default router;
