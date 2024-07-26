import { products } from "./data";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: { width: number; height: number; depth: number };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: { createdAt: string; updatedAt: string; barcode: string; qrCode: string };
  images: string[];
  thumbnail: string;
}

export async function GET() {
  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}

export async function POST(request: Request) {
  const product = await request.json();

  const newProduct: Product = {
    id: products.length + 1,
    title: product.title,
    description: product.description,
    category: product.category ?? undefined,
    discountPercentage: product.discountPercentage ?? undefined,
    rating: product.rating ?? undefined,
    stock: product.stock ?? undefined,
    tags: product.tags ?? undefined,
    brand: product.brand ?? undefined,
    sku: product.sku ?? undefined,
    weight: product.weight ?? undefined,
    dimensions: product.dimensions ?? undefined,
    warrantyInformation: product.warrantyInformation ?? undefined,
    shippingInformation: product.shippingInformation ?? undefined,
    availabilityStatus: product.availabilityStatus ?? undefined,
    reviews: product.reviews ?? undefined,
    returnPolicy: product.returnPolicy ?? undefined,
    minimumOrderQuantity: product.minimumOrderQuantity ?? undefined,
    meta: product.meta ?? undefined,
    price: product.price,
    images: product.images,
    thumbnail: product.thumbnail ?? undefined,
  };
  products.push(newProduct);
  return new Response(JSON.stringify(newProduct), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
