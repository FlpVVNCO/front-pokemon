/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { getPokemonColorClass } from "../utils/helpers";
import { typeColors } from "../utils/typeColors";
import { usePoke } from "../hooks/usePoke";
import { Image } from "@nextui-org/react";
import pokemonLogo from "../assets/pokemon-logo.png";
import pokeball from "../assets/pokeball.png";
import PokeDescription from "./PokeDescription";

const Pokemon = ({ poke }) => {
  const { getPokeDetails, setOpen } = usePoke();

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      style={{ backgroundImage: `url(${pokeball})` }}
      className={getPokemonColorClass(
        poke.types,
        typeColors,
        "rounded-lg py-10 px-5 flex flex-row gap-1 justify-around items-center cursor-pointer bg-no-repeat bg-right-top shadow-md relative z-0"
      )}
      onClick={() => (getPokeDetails(poke.name), setOpen(true))}
    >
      <PokeDescription poke={poke} />

      <Image
        width={100}
        src={
          poke.sprites?.other.dream_world.front_default
            ? poke.sprites?.other.dream_world.front_default
            : poke.sprites?.front_default
            ? poke.sprites?.front_default
            : pokemonLogo
        }
      />
    </motion.div>
  );
};

export default Pokemon;
