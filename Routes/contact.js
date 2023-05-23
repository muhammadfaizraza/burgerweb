import express from "express";
import { createContact } from "../controller/contact.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.post("/contact", isAuthenticated, createContact);

export default router;
