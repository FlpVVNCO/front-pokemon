import { usePoke } from "../hooks/usePoke";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motionTransition";

const PokeResume = () => {
  const { pokemonList } = usePoke();

  const countByLetter = pokemonList.reduce((count, pokemon) => {
    const firstLetter = pokemon.name.charAt(0).toUpperCase();
    count[firstLetter] = (count[firstLetter] || 0) + 1;
    return count;
  }, {});

  return (
    <motion.div
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="fixed bottom-0 text-black  left-2  right-2 sm:right-0  z-0 xl:z-20 bg-gray-100/50 p-3 sm:rounded-xl"
    >
      <div className="flex flex-col text-center">
        <h1 className="font-bold">Poke count for first letter</h1>
        <div className="flex gap-3 font-semibold items-center justify-center">
          {Object.entries(countByLetter).map(([letter, count]) => (
            <p key={letter}>{`${letter}: ${count}`}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PokeResume;
