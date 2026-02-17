export const products = [
  {
    slug: "la-normande",
    image: "/images/crepe-choco.png",
    label: "Salée",
    title: "La Normande",
    description:
      "Une crêpe généreuse aux saveurs normandes, garnie de camembert fondant et de pommes caramélisées.",
    ingredients: ["Oeuf", "Jambon", "Crème", "Camembert", "Pommes", "Noix"],
    price: "17,60€",
  },
  {
    slug: "la-bretonne",
    image: "/images/crepe-choco.png",
    label: "Salée",
    title: "La Bretonne",
    description:
      "La classique galette bretonne au sarrasin, garnie de produits du terroir breton.",
    ingredients: ["Oeuf", "Jambon", "Fromage", "Champignons"],
    price: "14,50€",
  },
  {
    slug: "la-chocolatee",
    image: "/images/crepe-choco.png",
    label: "Sucrée",
    title: "La Chocolatée",
    description:
      "Un délice chocolaté avec du chocolat noir fondu et des éclats de noisettes croquantes.",
    ingredients: ["Chocolat noir", "Noisettes", "Chantilly", "Sucre glace"],
    price: "12,90€",
  },
  {
    slug: "la-caramel",
    image: "/images/crepe-choco.png",
    label: "Sucrée",
    title: "La Caramel",
    description:
      "Une crêpe fondante nappée de caramel au beurre salé, accompagnée de pommes flambées.",
    ingredients: [
      "Caramel beurre salé",
      "Pommes flambées",
      "Chantilly",
      "Amandes",
    ],
    price: "13,50€",
  },
];

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}
