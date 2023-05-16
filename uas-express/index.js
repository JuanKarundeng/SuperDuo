import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import BookRoute from "./routes/BookRoute.js";
import db from "./config/Database.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(FileUpload());
app.use(BookRoute);

app.listen(5000, () => console.log("Server Up and Running..."));
