"use client"
import axiosInstance from './axiosInstance';

export const fetchProducts = async (limit: number = 5) => {
  const response = await axiosInstance.get(`/products?limit=${limit}`);
  return response.data;
};