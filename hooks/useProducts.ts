"use client"
import { useQuery } from 'react-query';
import { fetchProducts } from '../services/productsService';

export default function useProducts(limit: number = 5) {
  return useQuery(['products', limit], () => fetchProducts(limit));
};