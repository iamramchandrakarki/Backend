import express from "express";
import type { Request, Response } from "express";
import

import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT: number = Number(process.env.PORT);

app.use("/api/dashboard", dashboardRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
