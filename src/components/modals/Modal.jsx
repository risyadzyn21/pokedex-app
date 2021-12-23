import api from "../../services/api";
import axios from "axios";
import { useEffect, useState } from "react";

function Modal({ setOpenModal, pokemon }) {
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    axios.get(pokemon.url).then((res) => {
      setPokemonDetails(res.data);
    });
  }, [pokemon]);

  return (
    <div
      className="modalBackground"
      onClick={() => {
        setOpenModal(false);
      }}
    >
      <div
        className="modalContainer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h1>modal</h1>
        <h1>{pokemonDetails.name}</h1>
      </div>
    </div>
  );
}

export default Modal;
