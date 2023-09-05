export default function TypeTag({ type }) {
  const colors = {
    water: { bg: "#6890F0", text: "white" },
    ice: { bg: "#98D8D8", text: "black" },
    psychic: { bg: "#F85888", text: "black" },
    fire: { bg: "#F08030", text: "white" },
    poison: { bg: "#A040A0", text: "white" },
    normal: { bg: "#A8A878", text: "black" },
    grass: { bg: "#78C850", text: "white" },
    electric: { bg: "#F8D030", text: "black" },
    ground: { bg: "#E0C068", text: "black" },
    rock: { bg: "#B8A038", text: "white" },
    fighting: { bg: "#C03028", text: "white" },
    bug: { bg: "#A8B820", text: "black" },
    ghost: { bg: "#705898", text: "white" },
    steel: { bg: "#B8B8D0", text: "black" },
    flying: { bg: "#A890F0", text: "black" },
    dragon: { bg: "#7038F8", text: "white" },
    dark: { bg: "#705848", text: "white" },
    fairy: { bg: "#EE99AC", text: "black" },
  };

  const tagStyle = {
    backgroundColor: colors[type]?.bg,
    color: colors[type]?.text || "black",
  };
  return <p style={tagStyle}>{type.toUpperCase()}</p>;
}
