import PokemonList from "../components/pokemon-list/PokemonList";

function Home() {
  return (
    <div className="poke-home">
      <h1 className="home-title">Pokédex App</h1>
      <PokemonList />
    </div>
  );
}

export default Home;
