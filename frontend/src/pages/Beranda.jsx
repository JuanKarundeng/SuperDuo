import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const Beranda = () => {
  const [Book, setBook] = useState([]);

  const getBook = async () => {
    const response = await axios.get("http://localhost:5000/books");
    setBook(response.data);
  };

  useEffect(() => {
    getBook();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-[50px] mx-auto w-max mt-10">
      {Book.map((item) => (
        <Card image={item.url} name={item.name} id={item.id} />
      ))}
    </div>
  );
};

export default Beranda;
