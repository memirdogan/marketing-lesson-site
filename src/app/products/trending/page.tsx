import { redirect } from 'next/navigation';

export default function TrendingPage() {
  redirect('/products?category=trending');
  return null;
}