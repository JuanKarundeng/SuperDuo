import React, { useState, useEffect } from "react";
import axios from "axios";
import MainPreview from "../components/MainPreview";
import { useParams } from "react-router-dom";

const Preview = () => {
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
        Buku ini merupakan buku siswa yang dipersiapkan Pemerintah dalam rangka
        implementasi Kurikulum 2013. Buku siswa ini disusun dan ditelaah oleh
        berbagai pihak di bawah koordinasi Kementerian Pendidikan dan
        Kebudayaan, dan dipergunakan dalam tahap awal penerapan Kurikulum 2013.
        Buku ini merupakan “dokumen hidup” yang senantiasa diperbaiki,
        diperbaharui, dan dimutakhirkan sesuai dengan dinamika kebutuhan dan
        perubahan zaman.
      </p>
    </div>
  );
};

export default Preview;
