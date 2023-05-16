import React, { useState, useEffect } from "react";
import axios from "axios";
import MainTautan from "../components/MainTautan";
import { useParams } from "react-router-dom";

const Tautan = () => {
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
      <p>
        https://static.buku.kemdikbud.go.id/content/pdf/bukuteks/k13/bukusiswa/Kelas%20X%20Bahasa%20Indonesia%20BS%20press.pdf
      </p>
    </div>
  );
};

export default Tautan;
