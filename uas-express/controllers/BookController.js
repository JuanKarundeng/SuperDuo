import Book from "../models/BookModel.js";
import path from "path";
import fs from "fs";

export const getBooks = async (req, res) => {
  try {
    const response = await Book.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getBookById = async (req, res) => {
  try {
    const response = await Book.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const saveBook = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const name = req.body.name;
  const preview = req.body.preview;
  const link = req.body.link;
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Message" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Book.create({
        name: name,
        image: fileName,
        preview: preview,
        link: link,
        url: url,
      });
      res.status(201).json({ msg: "Book Created Succesfully" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateBook = async (req, res) => {
  const book = await Book.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!book) return res.status(404).json({ msg: "No Data Found" });
  let fileName = "";
  if (req.files === null) {
    fileName = book.image;
  } else {
    const name = req.body.name;
    const preview = req.body.preview;
    const link = req.body.link;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000)
      return res.status(422).json({ msg: "Image must be less than 5 MB" });

    const filepath = `./public/images/${book.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const name = req.body.name;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  try {
    await Book.update(
      { name: name, image: fileName, preview: preview, link: link, url: url },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Book Updated Succesfully" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBook = async (req, res) => {
  const book = await Book.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!book) return res.status(404).json({ msg: "No Data Found" });
  try {
    const filepath = `./public/images/${book.image}`;
    fs.unlinkSync(filepath);
    await Book.destroy({
      where: {
        id: req.params.id,
      },
    });
    req.status(200).json({ msg: "Book Deleted Succesfully" });
  } catch (error) {
    console.log(error.message);
  }
};
