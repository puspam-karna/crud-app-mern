import express from "express";
import mongoose from "mongoose";
import route from "./route/routes.js";
import cors from "cors";

const app = express();
const PORT = 8000;
const URL =
  "mongodb+srv://Puspam:Puspam@createuser.op40a.mongodb.net/CreateUser?retryWrites=true&w=majority";

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ type: ["application/json", "text/plain"] }));

app.use("/users", route);

mongoose
  .connect(URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to server");
  });
