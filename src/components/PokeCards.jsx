import { usePoke } from "../hooks/usePoke";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motionTransition";
import { IoArrowBack } from "react-icons/io5";
import Loader from "./Loader";
import Pokemon from "./Pokemon";

const PokeCards = () => {
  const {
    pokemonList,
    pokemonSearch,
    isFlag,
    setSearchFilter,
    searchFilter,
    isLoading,
    setIsFlag,
    setSearchTerms,
    pokeName,
  } = usePoke();

  const { cards } = isLoading;

  return (
    <>
      {cards ? (
        <Loader />
      ) : (
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full"
        >
          {/* Cuando solo es un resultado, muestra solo 1 tarjeta */}
          {isFlag && pokeName.includes(searchFilter) ? (
            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full p-5 sm:w-1/3"
            >
              <div className="flex gap-2 items-center text-blue-500 font-bold mb-5 ">
                <IoArrowBack
                  className="text-3xl hover:scale-110 cursor-pointer"
                  onClick={() => (
                    setIsFlag(false), setSearchTerms(""), setSearchFilter("")
                  )}
                />
                <h1>Back</h1>
              </div>

              <h1 className="mb-5 text-xl font-bold text-red-500">
                Search results:{" "}
              </h1>
              <Pokemon poke={pokemonSearch} />
            </motion.div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {pokemonList.map((poke, i) => (
                  <Pokemon poke={poke} key={i} />
                ))}
              </div>
            </>
          )}
        </motion.div>
      )}
    </>
  );
};

export default PokeCards;
