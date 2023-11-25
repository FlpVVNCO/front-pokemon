// Asegúrate de tener un archivo CSS para los estilos
const Loader = () => {
  return (
    <div className="pokeball-loader-container text-white xl:text-red-500">
      <div className="pokeball-loader"></div>
      <p className="text-xl font-bold">Catching...</p>
    </div>
  );
};

export default Loader;
