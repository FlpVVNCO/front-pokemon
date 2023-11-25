export const getPokemonColorClass = (types, colors, additionalClasses = "") => {
  const firstColor =
    types?.length > 0 ? colors[types[0].type.name] || "bg-white" : "bg-white";

  return `${firstColor} ${additionalClasses.trim()}`;
};
