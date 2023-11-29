import { usePoke } from "../hooks/usePoke";

const PokeAutocomplete = () => {
  const {
    pokeName,
    nombresFiltrados,
    setNombresFiltrados,
    searchTerms,
    setSearchTerms,
    handlePokeDetails,
  } = usePoke();

  // const name = pokeName.map((poke) => poke.name);

  const handleInputChange = (event) => {
    const filtro = event.target.value.toLowerCase();
    setSearchTerms(event.target.value);

    // Verificar si el input está vacío
    if (filtro === "") {
      setNombresFiltrados([]);
      return;
    }

    // Filtrar nombres que coincidan con la entrada del usuario
    const nombresFiltrados = pokeName.filter((nombre) =>
      nombre.toLowerCase().includes(filtro)
    );

    setNombresFiltrados(nombresFiltrados);
  };

  return (
    <div className="relative w-full sm:w-2/4">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="text"
        value={searchTerms}
        onChange={handleInputChange}
        placeholder="Enter a Pokémon name..."
        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
      />
      <ul className="list-none absolute bg-white w-full max-h-40 overflow-y-auto rounded-xl shadow-md z-20">
        {nombresFiltrados.map((name, index) => (
          <li
            key={index}
            className="p-2 cursor-pointer hover:bg-blue-800 hover:text-white hover:ease-out transition duration-100"
            onClick={() => handlePokeDetails(name)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokeAutocomplete;
