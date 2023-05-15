import React, { useState, useEffect } from "react";
import axios from "axios";

const Header = () => {
  const [books, setBooks] = useStates([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const response = await axios.get("http://localhost:5000/books");
    setBooks(response.data);
  };

  return (
    <header className="relative">
      <div className="mx-auto">
        <img src="./img/FOTO-BUKU.png" />
        <img className="absolute top-0" src="./img/HITAM.png" />
      </div>
      <a href="index.html">
        <h1 className="text-[44px] font-bold absolute top-0 text-[#FFFFFF] inset-0 flex items-center justify-center">
          SUPER PREVIEW
        </h1>
      </a>
    </header>
  );
};

export default Header;
