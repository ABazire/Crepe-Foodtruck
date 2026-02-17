import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/app/data/products";
import Container from "@/app/components/Container";
import ProductItem from "@/app/components/ProductItem";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Produit introuvable" };
  }

  return {
    title: `${product.title} — Crêpe Food Truck`,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Container>
        <ProductItem product={product} />
      </Container>
    </>
  );
}
