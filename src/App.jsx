import PokeCards from "./components/PokeCards";
import PokeCardDetails from "./components/PokeCardDetails";
import PokeResume from "./components/PokeResume";
import PokeAutocomplete from "./components/PokeAutocomplete";
import { Image } from "@nextui-org/react";
import Modal from "./components/Modal";
import { motion } from "framer-motion";
import { fadeIn } from "./utils/motionTransition";
import logo from "./assets/pokemon-logo.png";
import PokePaginator from "./components/PokePaginator";

function App() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 justify-center content-center gap-10 py-20 px-5 xl:px-20">
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex  justify-center w-full xl:w-3/4 col-span-4 z-0"
      >
        <Image width={300} src={logo} />
      </motion.div>

      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="col-span-4 flex items-center w-full xl:w-3/4 flex-col"
      >
        <h1 className="text-red-400 mb-5 text-lg sm:text-2xl font-semibold">
          Search a Pokemon:
        </h1>
        <PokeAutocomplete />
      </motion.div>

      <div className="order-2 sm:order-1 col-span-4 sm:col-span-4 xl:col-span-3">
        <PokeCards />
        <PokePaginator />
        <PokeResume />
      </div>

      <div className=" xl:order-2 col-span-4 sm:col-span-2 xl:col-span-1 hidden xl:block">
        <PokeCardDetails />
      </div>

      <Modal>
        <PokeCardDetails />
      </Modal>
    </div>
  );
}

export default App;
