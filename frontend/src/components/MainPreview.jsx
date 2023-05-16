import React from "react";

const MainPreview = ({ image, name, id }) => {
  return (
    <div>
      <div className="mx-auto w-max">
        <img className="" src={image} alt="" />

        <h1 className="text-[#000000] text-[26px]">{name}</h1>
      </div>

      <p className="text-[#000000]">
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
export default MainPreview;
