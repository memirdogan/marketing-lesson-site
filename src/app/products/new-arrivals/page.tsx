import { redirect } from 'next/navigation';

export default function NewArrivalsPage() {
  redirect('/products?category=new-arrivals');
  return null;
}