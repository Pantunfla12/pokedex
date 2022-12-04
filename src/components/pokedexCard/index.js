import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { useEffect, useState } from "react";

import { pokeUrl, betterId, toCamelCase, bgColorCard, test } from "../../util";

const PokedexCard = ({ pokeId }) => {
  const [pokemon, setPokemon] = useState({
    name: "",
    id: "",
    image: "",
    type: [],
  });

  const getPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then(({ data }) => {
        setPokemon({
          name: data.name,
          id: data.id,
          image: data.sprites.front_default,
          type: data.types,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="Card flex flex-wrap flex-row p-5 w-80  relaitve ">
      <div
        className={`container ${bgColorCard(
          pokemon.type,
          false,
          false
        )}  rounded-xl shadow box-border p-5 border-4 relative`}
      >
        <div className="CardImage  bottom-2 right-2 h-28 w-28  absolute" />
        <div className="card-Header flex flex-row  place-content-between">
          <p className="pokeName text-white font-bold text-2xl">
            {toCamelCase(pokemon.name)}
          </p>
          <p
            className={`pokeId self-center ${bgColorCard(
              pokemon.type,
              false,
              true
            )} font-bold`}
          >
            #{betterId(pokemon.id)}
          </p>
        </div>
        <div className="card-Body flex flex-row place-content-between">
          <div className="card-Tag">
            {pokemon.type.map((type, i) => {
              return (
                <div
                  key={i}
                  className={`pokeTag ${bgColorCard(
                    pokemon.type,
                    true,
                    false
                  )}  rounded-full px-3 py--1 w-fit my-1`}
                >
                  <p className="pokeTagText text-white font-bold text-xs">
                    {toCamelCase(type.type.name)}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="cardImgPokemon  z-20">
            <img
              src={pokeUrl(pokemon.id)}
              alt={pokemon.name}
              width="100px"
              height="100px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokedexCard;
