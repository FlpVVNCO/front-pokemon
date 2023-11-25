import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";

export const usePoke = () => {
  // custom hook para acceder al context de manera mas rapida y con menos importaciones.
  const context = useContext(PokeContext);

  if (!context) {
    throw new Error("usePoke must be used within a PokeProvider");
  }

  return context;
};
