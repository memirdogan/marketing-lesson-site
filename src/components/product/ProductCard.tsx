import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        {product.new && (
          <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 text-xs font-medium rounded">
            Yeni
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/products/${product.id}`} className="hover:underline">
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm font-bold uppercase tracking-wider text-gray-600">{product.brand}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price} TL</p>
      </div>
      <button
        className="mt-4 block w-full bg-black text-white text-center py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
      >
        Satın Al
      </button>
    </div>
  );
};

export default ProductCard; 