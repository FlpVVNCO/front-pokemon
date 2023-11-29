/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const PokeContext = createContext();

export const PokeProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonSearch, setPokemonSearch] = useState({});
  const [pokeName, setPokeName] = useState([]);
  const [isFlag, setIsFlag] = useState(false);
  const [isLoading, setIsLoading] = useState({
    stats: true,
    cards: true,
    loader: false,
  });
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [nombresFiltrados, setNombresFiltrados] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [open, setOpen] = useState(false);

  const itemsPerPage = 15;

  const getAllPokemon = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=1000000`
      );
      const data = await response.json();
      setTotalPages(Math.round(data.count / itemsPerPage));
      setPokeName(data.results.map((poke) => poke.name));
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  const fetchPokemons = async () => {
    try {
      setIsLoading((prev) => ({ ...prev, cards: true }));
      const baseURL = "https://pokeapi.co/api/v2/";

      const res = await fetch(
        `${baseURL}pokemon?limit=${itemsPerPage}&offset=${currentPage}`
      );
      const data = await res.json();

      const promises = data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      });
      const results = await Promise.all(promises);

      setPokemonList(results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading((prev) => ({ ...prev, cards: false }));
    }
  };

  const getPokeDetails = async (name) => {
    setOpen(false);
    try {
      setIsLoading((prev) => ({ ...prev, stats: true, loader: true }));
      setOpen(true);
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();

      setPokemonSearch(data);
      // valida si existe termino buscador para poner
      // en true la bandera
      if (name.includes(searchTerms)) {
        setIsFlag(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading((prev) => ({ ...prev, stats: false, loader: false }));
    }
  };

  const handlePokeDetails = (name) => {
    getPokeDetails(name);
    setNombresFiltrados([]);
    setSearchTerms(name);
    setSearchFilter(name);
  };

  useEffect(() => {
    fetchPokemons();
  }, [currentPage]);

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <PokeContext.Provider
      value={{
        pokemonList,
        totalPages,
        pokeName,
        pokemonSearch,
        nombresFiltrados,
        searchTerms,
        isFlag,
        isLoading,
        open,
        currentPage,
        itemsPerPage,
        searchFilter,
        setCurrentPage,
        setOpen,
        setIsFlag,
        getPokeDetails,
        getAllPokemon,
        handlePokeDetails,
        setTotalPages,
        setNombresFiltrados,
        setSearchTerms,
        setPokemonSearch,
        setSearchFilter,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};
