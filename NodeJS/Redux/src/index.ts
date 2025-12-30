import express from "express";
import type { Request, Response } from "express";

import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT: number = Number(process.env.PORT);

app.use("/user", (req: Request, res: Response) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
