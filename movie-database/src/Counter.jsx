import React, { useCallback } from "react";
import { useState, useEffect } from "react";

const Counter = () => {
  const [angka, setAngka] = useState(0);
  const [nama, setNama] = useState("Amar");
  useEffect(() => {
    console.log("Component di-mount");
    document.title = `Angka ${angka}`;
  }, [angka]);
  console.log("Component di-render");

  const addAngka = () => {
    setAngka(angka + 1);
  };

  return (
    <div>
      <p> angka: {angka} </p>
      <button onClick={addAngka}>Add</button>
      <p>nama: {nama}</p>
      <input onChange={(e) => setNama(e.target.value)} value={nama} />
    </div>
  );
};

export default Counter;
