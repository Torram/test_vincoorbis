export default function TypeTag({ type, key }) {
  const colors = {
    water: { bg: "#6890F0", text: "white" }, // Azul para Water
    ice: { bg: "#98D8D8", text: "black" }, // Turquesa para Ice
    psychic: { bg: "#F85888", text: "black" }, // Rosa para Psychic
    fire: { bg: "#F08030", text: "white" }, // Naranja para Fire
    poison: { bg: "#A040A0", text: "white" }, // Púrpura para Poison
    normal: { bg: "#A8A878", text: "black" }, // Gris para Normal
    grass: { bg: "#78C850", text: "white" }, // Verde para Grass
    electric: { bg: "#F8D030", text: "black" }, // Amarillo para Electric
    ground: { bg: "#E0C068", text: "black" }, // Marrón para Ground
    rock: { bg: "#B8A038", text: "white" }, // Marrón para Rock
    fighting: { bg: "#C03028", text: "white" }, // Rojo para Fighting
    bug: { bg: "#A8B820", text: "black" }, // Verde para Bug
    ghost: { bg: "#705898", text: "white" }, // Morado para Ghost
    steel: { bg: "#B8B8D0", text: "black" }, // Gris para Steel
    flying: { bg: "#A890F0", text: "black" }, // Azul para Flying
    dragon: { bg: "#7038F8", text: "white" }, // Morado para Dragon
    dark: { bg: "#705848", text: "white" }, // Morado oscuro para Dark
    fairy: { bg: "#EE99AC", text: "black" },
  };

  const tagStyle = {
    backgroundColor: colors[type]?.bg,
    color: colors[type]?.text || "black",
  };
  return (
    <p key={key} style={tagStyle}>
      {type.toUpperCase()}
    </p>
  );
}
