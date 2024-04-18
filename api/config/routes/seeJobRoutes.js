import express from "express"
import { decodeEmail } from "../../middlewares/validateEmail.js"
import { lookJobsController } from "../../src/controllers/seeJobsController.js"

const router = express.Router()

router.get("/enterprise", decodeEmail, lookJobsController)

export default router
