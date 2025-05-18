import { redirect } from 'next/navigation';

export default function BestSellersPage() {
  redirect('/products?category=best-sellers');
  return null;
}