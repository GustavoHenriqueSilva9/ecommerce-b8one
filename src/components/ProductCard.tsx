import type { Product } from '../types/Product';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className=" rounded p-4 shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-2"
      />
      <h3 className="text-sm font-medium line-clamp-2 h-[44px]">
        {product.title}
      </h3>
      <p className="text-lg font-bold text-blue-600">
        R$ {product.price.toFixed(2)}
      </p>

      <button className="cursor-pointer mt-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors duration-200 w-full">
        Comprar
      </button>
    </div>
  );
}
