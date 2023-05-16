import express from "express";
import {
  getBooks,
  getBookById,
  saveBook,
  updateBook,
  deleteBook,
} from "../controllers/BookController.js";

const router = express.Router();

router.get("/books", getBooks);
router.get("/book/:id", getBookById);
router.post("/book", saveBook);
router.patch("/book/:id", updateBook);
router.delete("/book/:id", deleteBook);

export default router;
