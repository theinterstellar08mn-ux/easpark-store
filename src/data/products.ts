export type ProductCategory = "tshirts" | "jerseys" | "watches";

export type Product = {
  id: number;
  name: string;
  category: string;
  categoryKey: ProductCategory;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  colour: string;
};

export const products: Product[] = [
  { id: 1, name: "Midnight Oversized Tee", category: "Oversized T-Shirts", categoryKey: "tshirts", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85", rating: 4.9, reviews: 126, badge: "Best seller", colour: "Black" },
  { id: 2, name: "Barcelona 25/26 Jersey", category: "Football Jerseys", categoryKey: "jerseys", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=85", rating: 4.8, reviews: 91, badge: "New drop", colour: "Royal blue" },
  { id: 3, name: "After Hours Graphic Tee", category: "Oversized T-Shirts", categoryKey: "tshirts", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85", rating: 4.9, reviews: 154, badge: "Limited", colour: "Stone" },
  { id: 4, name: "Portugal Fan Jersey", category: "Football Jerseys", categoryKey: "jerseys", image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=85", rating: 4.7, reviews: 73, colour: "Red" },
  { id: 5, name: "Signature Heavyweight Tee", category: "Oversized T-Shirts", categoryKey: "tshirts", image: "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?auto=format&fit=crop&w=900&q=85", rating: 4.8, reviews: 188, badge: "Trending", colour: "White" },
  { id: 6, name: "Blackout Street Jersey", category: "Football Jerseys", categoryKey: "jerseys", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=900&q=85", rating: 4.8, reviews: 64, colour: "Black" },
  { id: 7, name: "Off-duty Essential Tee", category: "Oversized T-Shirts", categoryKey: "tshirts", image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=85", rating: 4.6, reviews: 52, colour: "Cream" },
  { id: 8, name: "Club Culture Jersey", category: "Football Jerseys", categoryKey: "jerseys", image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=900&q=85", rating: 4.9, reviews: 109, badge: "Fan favourite", colour: "Orange" },
  { id: 9, name: "Midnight Steel Watch", category: "Watches", categoryKey: "watches", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85", rating: 4.9, reviews: 82, badge: "New drop", colour: "Black" },
  { id: 10, name: "Classic Silver Watch", category: "Watches", categoryKey: "watches", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=85", rating: 4.8, reviews: 67, colour: "Silver" },
];

export const productPrice = 350;
export const money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
