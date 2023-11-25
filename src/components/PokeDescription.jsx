/* eslint-disable react/prop-types */
const PokeDescription = ({ poke }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold mb-5 mt-5 text-xl sm:text-2xl text-white">
        {poke.name}
      </h1>
      <div className="gap-1 flex flex-row">
        {poke.types.map((x) => (
          <p
            className="bg-gray-100/30 text-sm font-bold py-1 px-3 rounded-full text-white"
            key={x.slot}
          >
            {x.type.name}
          </p>
        ))}
      </div>

      <h1 className="top-3 left-3 absolute text-3xl text-white text-opacity-60">
        #{poke.id}
      </h1>
    </div>
  );
};

export default PokeDescription;
