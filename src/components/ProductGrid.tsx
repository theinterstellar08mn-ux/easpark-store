import type { Product } from "../data/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products, saved, onToggleSaved, onAddToCart, dark = false }: { products: Product[]; saved: number[]; onToggleSaved: (id: number) => void; onAddToCart: (product: Product) => void; dark?: boolean }) {
  return <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-5">{products.map((product) => <ProductCard key={product.id} product={product} saved={saved.includes(product.id)} onToggleSaved={onToggleSaved} onAddToCart={onAddToCart} dark={dark} />)}</div>;
}
