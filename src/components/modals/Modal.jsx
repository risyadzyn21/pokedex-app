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
        <div className="pokemon-header">
          <div className="pokemon-img">
            <img
              src={pokemonDetails?.sprites?.front_default}
              alt={pokemonDetails?.name}
            />
          </div>
          <div className="pokemon-info">
            <div>#{pokemonDetails.id}</div>
            <h2>{pokemonDetails.name}</h2>
            <div className="pokemon-info-adv">
              <div>
                Base Exp <span>{pokemonDetails.base_experience}</span>
              </div>
              <div>
                Weight <span>{pokemonDetails.weight}</span>
              </div>
              <div>
                Height <span>{pokemonDetails.height}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pokemon-details">
          <div className="pokemon-details-left">
            <div className="pokemon-details-stats">
              <div className="pokemon-details-title">Stats</div>
              {pokemonDetails?.stats?.map((stat) => {
                return (
                  <div key={stat.stat.name}>
                    <div>{stat.stat.name}</div>
                  </div>
                );
              })}
            </div>
            <div className="pokemon-details-types">
              <div className="pokemon-details-title">Types</div>
              {pokemonDetails?.types?.map((type) => {
                return (
                  <div key={type.type.name}>
                    <div>{type.type.name}</div>
                  </div>
                );
              })}
            </div>
            <div className="pokemon-details-abilities">
              <div className="pokemon-details-title">Abilities</div>
              {pokemonDetails?.abilities?.map((ability) => {
                return (
                  <div key={ability.ability.name}>
                    <div>{ability.ability.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="pokemon-details-right">
            <div className="pokemon-details-moves">
              <div className="pokemon-details-title">Moves</div>
              {pokemonDetails?.moves?.map((move) => {
                return (
                  <div key={move.move.name}>
                    <div>{move.move.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
