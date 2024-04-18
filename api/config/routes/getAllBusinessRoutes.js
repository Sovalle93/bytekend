import express from "express";
import { getBusinesses } from "../../src/controllers/getAllBusinessController.js";

const router = express.Router();

router.get("/businesses", getBusinesses);

export default router;
