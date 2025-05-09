'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductById } from '@/lib/products';
import { notFound } from 'next/navigation';

export default function ProductPage() {
  const { id } = useParams();
  const product = getProductById(id as string);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          {product.images.slice(1).map((image, index) => (
            <div
              key={index}
              className="aspect-square relative overflow-hidden rounded-lg bg-gray-100"
            >
              <Image
                src={image}
                alt={`${product.name} - View ${index + 2}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Product Info */}
        <div>
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link href="/products" className="hover:text-gray-900">
                  Products
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li>{product.brand}</li>
            </ol>
          </nav>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-serif">{product.name}</h1>
              <p className="mt-2 text-xl text-gray-900">${product.price}</p>
            </div>

            <div>
              <h2 className="text-lg font-medium">Description</h2>
              <p className="mt-2 text-gray-600">{product.description}</p>
            </div>

            {product.new && (
              <div className="inline-block bg-black text-white px-3 py-1 text-sm">
                New Arrival
              </div>
            )}

            <div className="pt-6">
              <a
                href={product.shopierLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-black text-white px-8 py-4 rounded-md text-center block hover:bg-gray-800 transition-colors"
              >
                Shop on Shopier
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 