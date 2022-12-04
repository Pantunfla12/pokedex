import PokedexCard from "../../components/pokedexCard";

const DashboardPage = () => {
  //create a function called pokemons wich will return pokedexCard component 5 times
  const pokemons = () => {
    let pokeArray = [];
    for (let i = 1; i <= 893; i++) {
      pokeArray.push(<PokedexCard key={i} pokeId={i} />);
    }
    return pokeArray;
  };

  return (
    <div>
      <h1 className="font-bold">Pokedex</h1>
      {/* create a cicle to print pokedexCard component 5 times */}
      <div className="grid grid-cols-1 ">{pokemons()}</div>
    </div>
  );
};

export default DashboardPage;
