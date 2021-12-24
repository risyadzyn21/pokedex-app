import api from "../../services/api";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Modal from "../modals/Modal";
import pokeball from "../../assets/png/Pokeball.png";
import Loading from "../loading/Loading";

function PokemonList() {
  const [items, setItems] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [activePokemon, setActivePokemon] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.get(`/pokemon?offset=${items}&limit=100`).then((res) => {
      setPokemons([...pokemons, ...res.data.results]);
      setIsLoading(false);
    });
  }, [items]);

  const dataModal = (pokemon) => {
    setModalOpen(true);
    setActivePokemon(pokemon);
  };

  return (
    <div>
      {isLoading ? <Loading /> : ""}
      <InfiniteScroll
        dataLength={pokemons.length}
        next={() => setItems(items + 100)}
        hasMore={true}
        className="poke-container"
      >
        {pokemons
          .sort((a, b) => a.name.localeCompare(b.name))
          ?.map((pokemon) => {
            return (
              <div
                key={pokemon.name}
                className="poke-list"
                onClick={() => {
                  dataModal(pokemon);
                }}
              >
                <div className="poke-name">
                  {pokemon.name}
                  <img src={pokeball} alt="pokeball" />
                </div>
              </div>
            );
          })}
      </InfiniteScroll>
      {modalOpen && (
        <Modal setOpenModal={setModalOpen} pokemon={activePokemon} />
      )}
    </div>
  );
}

export default PokemonList;
