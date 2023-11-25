import { Image, Progress } from "@nextui-org/react";
import { usePoke } from "../hooks/usePoke";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motionTransition";
import pokeball from "../assets/pokeball.png";
import pokemonLogo from "../assets/pokemon-logo.png";
import { typeColors } from "../utils/typeColors";
import { getPokemonColorClass } from "../utils/helpers";
import { IoArrowBack } from "react-icons/io5";
import PokeDescription from "./PokeDescription";
import Loader from "./Loader";

const PokeCardStats = () => {
  const { pokemonSearch, isLoading, setOpen } = usePoke();

  const { stats, loader } = isLoading;

  return (
    <>
      {loader ? <Loader /> : null}
      {stats ? null : (
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className={getPokemonColorClass(
            pokemonSearch.types,
            typeColors,
            "rounded-md shadow-md bg-no-repeat bg-right-top relative"
          )}
          style={{ backgroundImage: `url(${pokeball})` }}
        >
          <div className="py-2 px-2 flex flex-col items-center ">
            <IoArrowBack
              className="right-5 top-5 text-white text-3xl text-opacity-60 absolute cursor-pointer xl:hidden"
              onClick={() => setOpen(false)}
            />
            <PokeDescription poke={pokemonSearch} />
            <Image
              className="pt-5 w-36 sm:w-72"
              src={
                pokemonSearch.sprites?.other.dream_world.front_default
                  ? pokemonSearch.sprites?.other.dream_world.front_default
                  : pokemonSearch.sprites?.front_default
                  ? pokemonSearch.sprites?.front_default
                  : pokemonLogo
              }
            />

            <h1 className="text-white text-2xl font-medium py-2">Base Stats</h1>

            <div className="rounded-md bg-white w-full px-5 flex-col py-5 flex gap-5 ">
              <div className="flex flex-row justify-around font-bold">
                <h1>
                  Height:
                  <span className="font-semibold">
                    {" "}
                    {Math.round(pokemonSearch.height * 4 * 2.54)} Cm{" "}
                  </span>
                </h1>
                <h1>
                  Weight:
                  <span className="font-semibold">
                    {" "}
                    {Math.round(pokemonSearch.weight / 4.3 / 2.2)} Kg
                  </span>
                </h1>
              </div>

              <table>
                <thead>
                  <tr>
                    <th className="text-left"></th>
                    <th className="text-left"></th>
                    <th className="text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  {pokemonSearch.stats?.map((stat, index) => (
                    <tr key={index}>
                      <td className="font-bold uppercase">
                        {stat.stat.name.includes("special-attack")
                          ? "Sp. Atk"
                          : stat.stat.name.includes("special-defense")
                          ? "Sp. Def"
                          : stat.stat.name}
                      </td>
                      <td className="font-semibold">{stat.base_stat}</td>
                      <td className="w-3/5">
                        <Progress
                          value={stat.base_stat}
                          size="sm"
                          color={stat.base_stat >= 60 ? "success" : "danger"}
                          aria-label="Progress details"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default PokeCardStats;
