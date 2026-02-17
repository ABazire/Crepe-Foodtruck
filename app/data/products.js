export const products = [
  {
    slug: "la-normande",
    image: "/images/crepe-choco.png",
    label: "Salée",
    title: "La Normande",
    abstract:
      "La classique galette normande, garnie de produits du terroir normand.",
    description:
      "Nos crêpes “froment” sont faites à la main, elles sont emballées par douzaine. Les crêpes se conservent jours à température ambiante, et plus de 6 mois dans un congélateur. Il n’y a aucun conservateur dans la crêpe.Nous travaillons beaucoup la qualité de la crêpe qui est reconnue pour sa conservation, elle est plutôt fine et bien cuite.C’est aussi une grande crêpe, les plaques que nous utilisons font 45 cm de diamètre au lieu de 40 cm en général ailleurs.La crêpe est mangée froide ou chaude, au petit déjeuner ou au goûter acompagnée de beurre, chocolat, ou de confiture.Servie chaude elle permet aussi de préparer des desserts au déjeuner ou au diner.",
    ingredients: ["Oeuf", "Jambon", "Crème", "Camembert", "Pommes", "Noix"],
    price: "17,60€",
  },
  {
    slug: "la-bretonne",
    image: "/images/crepe-choco.png",
    label: "Salée",
    title: "La Bretonne",
    abstract:
      "La classique galette bretonne au sarrasin, garnie de produits du terroir breton.",
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
    abstract:
      "Un délice chocolaté avec du chocolat noir fondu et des éclats de noisettes croquantes.",
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
    abstract:
      "Une crêpe fondante nappée de caramel au beurre salé, accompagnée de pommes flambées.",
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
