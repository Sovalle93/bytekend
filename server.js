import express from "express";
import cors from "cors";
import { logger } from "logger-express";


import registerBusinessRoutes from "./api/config/routes/registerBusinessRoutes.js";
import registerUserRoutes from "./api/config/routes/registerUserRoutes.js";
import loginRoutes from "./api/config/routes/loginRoutes.js";
import readUserRoutes from "./api/config/routes/readUserRoutes.js";
import createJobRoutes from "./api/config/routes/createJobRoutes.js";
import readJobRoutes from "./api/config/routes/readJobRoutes.js";
import viewProfileRoutes from "./api/config/routes/viewProfileRoutes.js";
import deleteJobRoutes from "./api/config/routes/deleteJobRoutes.js";
import seeJobRoutes from "./api/config/routes/seeJobRoutes.js";
import getAllBusinessRoutes from "./api/config/routes/getAllBusinessRoutes.js"


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
app.use(logger());

app.use("/", registerUserRoutes);
app.use("/", loginRoutes);
app.use("/", registerBusinessRoutes);
app.use("/", createJobRoutes);
app.use("/", readUserRoutes);
app.use("/", readJobRoutes);
app.use("/", viewProfileRoutes);
app.use("/", deleteJobRoutes);
app.use("/", seeJobRoutes);
app.use("/", getAllBusinessRoutes);

app.listen(PORT, console.log(`Server running on port ${PORT}`));

