import React, { useState, useEffect } from "react";
import axios from "axios";
import MainHalaman2 from "../components/MainHalaman2";
import { useParams } from "react-router-dom";

const Halaman2 = () => {
  const { id } = useParams();
  const [book, setBook] = useState("");

  const getBookById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/book/${id}`);
      setBook(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookById();
  }, [id]);

  return (
    <div className="">
      {<MainHalaman2 image={book.url} name={book.name} id={book.id} />}
    </div>
  );
};

export default Halaman2;
