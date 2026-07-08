import express from "express";
import { getUsernames, createUsername } from "./controllers.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", getUsernames);
app.post("/", createUsername);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
