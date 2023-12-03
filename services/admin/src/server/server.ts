import express from "express";
import cors from "cors";

const main = async () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.listen(process.env.ADMIN_PORT);
};

main();
